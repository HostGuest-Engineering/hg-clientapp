import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';


const Navigation = ({
  start, disabled, text, back, next,
}) => {
  const stepper = useSelector((state) => state.stepperReducer.stepper);
//   const dispatch = useDispatch();
//   const classes = CommonStyles();

//   const handleBack = () => {
//     dispatch(creditContent({...creditData}));
//     dispatch(stepperDecrement());
//   };

//   const handleKonnectBack = () => {
//     dispatch(creditContent({...creditData}));
//     dispatch(konnectStepperDecrement());
//   };
  return (
      <div>
        {
            stepper !== 0
                ? start ? (
                <Button style={{ marginRight: '20px', backgroundColor: 'white' }} disabled={disabled} size="small" variant="contained" startIcon={<ArrowBackIcon color="secondary" size="small" />}>
                    <Typography variant="body1" color="secondary">{text}</Typography>
                </Button>
                ) : (
                <Button style={{ backgroundColor: 'white' }} disabled={disabled} onClick={() => next()} size="small" variant="contained" endIcon={<ArrowForwardIcon color="secondary" size="small" />}>
                    <Typography variant="body1" color="secondary">{text}</Typography>
                </Button>
                )
                : (
                <Button style={{ backgroundColor: 'white' }} disabled={disabled} onClick={() => next()} size="small" variant="contained" endIcon={<ArrowForwardIcon color="secondary" size="small" />}>
                    <Typography variant="body1" color="secondary">{text}</Typography>
                </Button>
                )
        }
      </div>
  )
};

export default Navigation;
