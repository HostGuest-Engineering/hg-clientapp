import React from 'react';
import { useSelector } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme,makeStyles } from '@material-ui/core/styles';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import shortId from 'shortid';
import GridContainer from "../GridContainer/GridContainer";
import CreateExpStepper from "./CreateExpStepper";

function getSteps() {
  return ['Upload Your Images', 'Add Experience Details', 'Success'];
}
// let pinkColorArray = ['#e71575', 'ffb6b9', '#ff449f']
const useStyles = makeStyles(theme=>({
    parent:{
        background: "#ff449f",
        display:"flex",
        justifyContent:'flex-start',
        alignItems:"center",
        gap:"2%",
        flexDirection:'column',
        borderRadius: '10px',
    },
    stepperContent:{
        background:"rgb(242, 242, 242)",
        overflowY:'auto',
        overflowX:"none"
    },
    stepperNumbering:{
        background: "#ff449f",
        color:"#fff"
    },
    alignInnerContents:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        flexDirection:'column',
        gap:"3%"
    },
    stepperText:{
        padding:"24px",
        color:"#fff",
        fontWeight:"500",
        fontSize:'1.2rem'

    },
    stepperLabel:{
        color:"#fff"
    }
}))
const DefaultStepperContainer = ()=>{
    const steps = getSteps();
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const stepCounter = useSelector((state) => state.stepperReducer.stepper);

    return !matches ? (
        <GridContainer createExperience>
            <div className={classes.parent}>
                <div className={classes.alignInnerContents}>
                    <Typography className={classes.stepperText}>
                        Create Experience
                    </Typography>
                    <Stepper className={classes.stepperNumbering} activeStep={stepCounter} orientation="vertical">

                    {steps.map((label) => (
                        <Step key={shortId.generate()}>
                            <StepLabel className={classes.stepperLabel}>
                                <span style={{ color: 'white' }}>{label}</span>
                            </StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                </div>
            </div>
            <div className={classes.stepperContent}>
                <CreateExpStepper />
            </div>
        </GridContainer>
    ):(
        <GridContainer createExperience>
            <div>
                <Typography>
                    Create Experience
                </Typography>
                <Stepper activeStep={stepCounter} orientation="vertical">

                    {steps.map((label) => (
                    <Step key={shortId.generate()}>
                        <StepLabel>
                            <span style={{ color: 'white' }}>{label}</span>
                        </StepLabel>

                        <StepContent>
                            <CreateExpStepper />
                        </StepContent>
                    </Step>
                    ))}
                </Stepper>
            </div>
        </GridContainer>
    )
}

export default DefaultStepperContainer;