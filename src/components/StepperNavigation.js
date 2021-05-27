import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import {ThemeProvider,createMuiTheme,makeStyles} from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import {stepperContent,stepperDecrement} from "../redux/actions/stepperAction";

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main:"#e71575"
    },
  },
  shadows: [
    0
  ]
});

const useStyles = makeStyles(theme=>({
  btn: {
    border: '1px #e71575 solid',
    width: '100px',
    margin: '16px 0 16px 16px'
  }
}))
const Navigation = ({
  start, disabled, text, back, next,
}) => {
  const {stepper,content} = useSelector((state) => state.stepperReducer);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleBack = () => {
    dispatch(stepperContent({...content}));
    dispatch(stepperDecrement());
  };

  return (
    <ThemeProvider theme={outerTheme}>
      <div>
        {
            stepper !== 0
                ? start ? (
                <Button style={{ marginRight: '20px', backgroundColor: 'white' }} onClick={back ? handleBack : null} disabled={disabled} size="small" variant="outlined" className={classes.btn} startIcon={<ArrowBackIcon color="secondary" size="small" />}>
                    <Typography variant="body1" color="secondary">{text}</Typography>
                </Button>
                ) : (
                <Button style={{ backgroundColor: 'white' }} disabled={disabled} onClick={() => next()} size="small" variant="outlined" className={classes.btn} endIcon={<ArrowForwardIcon color="secondary" size="small" />}>
                    <Typography variant="body1" color="secondary">{text}</Typography>
                </Button>
                )
                : (
                <Button style={{ backgroundColor: 'white' }} disabled={disabled} onClick={() => next()} size="small" className={classes.btn} variant="outlined" endIcon={<ArrowForwardIcon color="secondary" size="small" />}>
                    <Typography variant="body1" color="secondary">{text}</Typography>
                </Button>
                )
        }
      </div>
    </ThemeProvider>
  )
};

export default Navigation;

Navigation.propTypes = {
  text:PropTypes.string.isRequired,
  start:PropTypes.bool,
  disabled:PropTypes.bool,
  back:PropTypes.bool, 
  next:PropTypes.func,
}