import React from "react";
import Grid from "@material-ui/core/Grid";
import {useDropzone} from 'react-dropzone'
import * as Yup from "yup";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {Formik,Form as FormikForm} from "formik";
import {useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import PublishIcon from '@material-ui/icons/Publish';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import GridContainer from "../../containers/GridContainer/GridContainer";
import {checkFileSize} from "../../utils/checkFileSize";
import Error from "../../components/Errors";
import {errorHandler} from "../../redux/actions/authAction";
// import {CreateExperience} from "../../graphql/mutations/becomeHost";
import client from "../../apollo/client";
import Navigation from "../../components/StepperNavigation";

const useStyles = makeStyles(theme=>({
    headerText:{
        fontWeight:"600",
        fontSize:'1.5rem',
        padding:"24px"
    },
    dropZone:{
        border: '1px #281987 dashed',
        backgroundColor:"#fff",
        height:"20vh",
        width:"100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },
    dropzoneDiv:{
        width:"100%",
        textAlign:"center",
        verticalAlign: 'middle'
    },
    mainDiv:{
        padding:"0 24px 0 24px"
    },
    dropText:{
        color: '#c8c2bc'
    },
    textFileName:{
        marginTop:theme.spacing(1)
    }
}))

const CreateExperience = ()=>{
    const classes = useStyles();
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <Typography variant="subtitle1" key={file.name}>
            {file.name}
        </Typography>
    ));
    return (
        <Grid className={classes.mainDiv} container direction="column" alignItems="center" justify="center" spacing={2}>
            <Grid item>
                <Typography className={classes.headerText}>Upload Your Images</Typography>
            </Grid>
            <Grid item className={classes.dropzoneDiv}>
                <Grid container direction="column" alignItems="flex-start" justify="center">
                    <Formik>
                        {({setFieldValue,handleChange,handleBlur,values,errors,submitForm})=>(
                            <FormikForm style={{width:"100%"}}>
                                <Grid container direction="column" alignItems="flex-start">
                                    <div className={classes.dropZone} {...getRootProps({className: classes.dropZone})}>
                                        <input {...getInputProps()} />
                                        <p className={classes.dropText}>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    <Grid item>
                                        <Typography className={classes.textFileName} variant="h6">
                                            Files Uploaded
                                        </Typography>
                                        <Grid container alignItems="flex-start" direction="column">
                                            {files}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="flex-end" justify="flex-end" style={{padding:"0"}}>
                                    <Navigation next={submitForm} text="Next" />
                                </Grid>
                            </FormikForm>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreateExperience;