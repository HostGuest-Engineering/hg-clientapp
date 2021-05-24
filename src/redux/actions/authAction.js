import * as actionTypes from "./actionTypes";

export const authAction = (payload)=>({
    type:actionTypes.OPEN_AUTH_MODAL,
    payload
});

export const userDetails = payload =>({
    type:actionTypes.USER_DETAILS,
    payload
});

export const  isAuthenticated = payload=>({
    type: actionTypes.IS_AUTHENTICATED,
    payload
});

export const changeIndex=payload=>({
    type: actionTypes.CHANGE_INDEX,
    payload
});