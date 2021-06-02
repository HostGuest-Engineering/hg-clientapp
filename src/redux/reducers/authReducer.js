import * as actionTypes from "../actions/actionTypes";

const initialState = {
    openAuthModal:false,
    userDetails:{},
    isAuthenticated:false,
    changeIndex:0,
    message:"",
    open:false,
    severity:"warning"
}

export const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.OPEN_AUTH_MODAL:
            return {
                ...state,
                openAuthModal:action.payload
            }
        
        case actionTypes.USER_DETAILS:
            return {
                ...state,
                userDetails:action.payload
            }
            
        case actionTypes.IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated:action.payload
            }

        case actionTypes.CHANGE_INDEX:
            return {
                ...state,
                changeIndex:action.payload
            }
            
        case actionTypes.ERROR_HANDLER:
            return {
                ...state,
                message:action.message,
                open:action.state,
                severity: action.severity
            }

        default:
            return state;
    }
}