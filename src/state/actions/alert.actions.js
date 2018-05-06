import { alertTypes } from '../actionTypes';
 
const success = message  => { type: alertTypes.SUCCESS, message };

const error = message  => { type: alertTypes.ERROR, message };

const clear = message => { type: alertTypes.CLEAR };

export const alertActions = { success, error, clear };
