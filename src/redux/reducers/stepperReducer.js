import * as actionTypes from "../actions/actionTypes";

const initialState = {
    stepper:0,
    content:{
        imagesOfExperience:[],
        detailsOfExperience:{}
    }
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
        case actionTypes.STEPPER_CONTENT:
            return {
                ...state,
                content:{...action.payload}
            }
        default:
            return state;
    }
}