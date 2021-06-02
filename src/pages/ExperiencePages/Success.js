import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useDispatch,useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Navigation from "../../components/StepperNavigation";
import client from "../../apollo/client";
import {CREATE_EXPERIENCE} from "../../graphql/mutations/createExperience";
import {stepperContent,resetStepper} from "../../redux/actions/stepperAction";
import {errorHandler} from "../../redux/actions/authAction"; 

const useStyles = makeStyles(theme=>({
    submit: {
        color: "#e71575",
        border: '1px #e71575 solid',
        width: '120px',
        margin: '16px 0 16px 16px',
        textDecoration:"none",
        textAlign:"center"
    },
    successDiv:{
        padding:"2rem",
        [theme.breakpoints.down('sm')]:{
            background: "#ff449f",
            color:"white"
        }
    }
}))

function SuccessPage (){
    const classes = useStyles();
    const content = useSelector(state => state.stepperReducer.content);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(content)
    const handleSubmit =async ()=>{
        //this is where uploading logic will be
        try{
            const variables = {
                input:{
                    imagesOfExperience: content.imagesOfExperience,
                    detailsOfExperience: {...content.detailsOfExperience} 
                }
            }
            const result = await client.request(CREATE_EXPERIENCE, variables);
            if(result){
                history.push('/');
                dispatch(stepperContent({
                    imagesOfExperience:[],
                    detailsOfExperience:{}
                }))
                dispatch(resetStepper());
            }
        }
        catch(e){
            dispatch(errorHandler("Could not upload your information",true,'error'));
            console.log(e);
        }
    }
    return (
            <Grid className={classes.successDiv} container direction="column" spacing={2} alignItems="center" justify="center">
                <Grid item>
                    <Typography variant="body1">
                        Click Submit To Upload Your Information
                    </Typography>
                </Grid>
                <Grid container wrap="nowrap" alignItems="center" justify="center" style={{padding:"0"}}>
                    <Navigation start back text="Back" />
                    <Navigation next={handleSubmit} text="Submit" />
                </Grid>
            </Grid>
    )
}

export default SuccessPage;