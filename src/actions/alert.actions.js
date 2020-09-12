import { alertConstants } from './actionTypes';

export const alertActions = {
    success: (message) => ({ type: alertConstants.SUCCESS, message }),
    error: (message) => ({ type: alertConstants.ERROR, message }),
    clear: () => ({ type: alertConstants.CLEAR }),
}
