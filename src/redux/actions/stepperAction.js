import * as actionTypes from "./actionTypes";

export const stepperIncrement = ()=>({
    type: actionTypes.STEPPER_INCREMENT,
});

export const stepperDecrement = () => ({
    type: actionTypes.STEPPER_DECREMENT,
});

export const stepperContent =  payload=>({
    type:actionTypes.STEPPER_CONTENT,
    payload
});