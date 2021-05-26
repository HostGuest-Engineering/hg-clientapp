import * as actionTypes from "../actions/actionTypes";

const initialState = {
    stepper:0
}

export const stepperReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.STEPPER_INCREMENT:
            return {
                ...state,
                stepper:state.stepper + 1
            }
        case actionTypes.STEPPER_DECREMENT:
            return {
                ...state,
                stepper:state.stepper -1
            }
        default:
            return state;
    }
}