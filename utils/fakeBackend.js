// Array in local storage for registered users
const users = JSON.parse(localStorage.getItem('users')) || [];

export const configureFakeBackend = () => {
  const realFetch = window.fetch;

  // Overwriting the window.fetch method
  window.fetch = (url, opts) => {
    return new Promise((resolve, reject) => {
    // Wrap in setTimeout to simulate server api call
    setTimeout(() => {
      // Authenticate
      if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
        const params = JSON.parse(opts.body);
        // Find if any user matches login credentials
        const filteredUsers = users.filter(user => user.username === params.username && user.password === params.password);
        
        if (filteredUsers.length > 0) {
          // If login details are valid return user details and fake jwt token
          const user = filteredUsers[0];
          const responseJson = {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
          };
          resolve({ ok: true, json: () => responseJson });
        } else {
          reject('Username or password is incorrect');
        }
        return;
      }
      // Get users
      if (url.endsWith('/users') && opts.method === 'GET') {
        // Look for fake auth token in header and return users if valid
        if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            resolve({ ok: true, json: () => users });
        } else {
            // Return 401 not authorised if token is null or invalid
            reject('Unauthorized');
        }
        return;
      }

      // Get user by id
      if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
        // Check for fake auth token in header and return user if valid
        if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
          // Find user by id in users array
          const urlParts = url.split('/');
          const id = parseInt(urlParts[urlParts.length - 1]);
          const matchedUsers = users.filter(user => { return user.id === id; });
          const user = matchedUsers.length ? matchedUsers[0] : null;

          // Respond 200 OK with user
          resolve({ ok: true, json: () => user});
        } else {
          // return 401 not authorised if token is null or invalid
          reject('Unauthorised');
        }

        return;
      }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ ok: true, json: () => ({}) });

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, json: () => ({}) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}