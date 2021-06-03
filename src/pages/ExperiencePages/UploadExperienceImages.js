import React from "react";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch,useSelector} from "react-redux";
import {Formik,Form as FormikForm} from "formik";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";
import {errorHandler} from "../../redux/actions/authAction";
import {stepperIncrement,stepperContent} from "../../redux/actions/stepperAction";
import Navigation from "../../components/StepperNavigation";
import FilesDropZone from "./FilesDropZone";

const FilesUploadValidation = Yup.object().shape({
    imagesOfExperience:Yup.array(Yup.string().required("Please upload pictures of your experience")).required()
})
const useStyles = makeStyles(theme=>({
    headerText:{
        fontWeight:"600",
        fontSize:'1.5rem',
        padding:"24px",
        [theme.breakpoints.down('sm')]:{
            color:"white"
        }
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
    errorDropZone:{
        border: '1px red dashed',
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
        color: '#c8c2bc',
        cursor:'pointer'
    },
    textFileName:{
        marginTop:theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            color: "white"
        }
    },
    addIcon: {
        border: '1px solid #faf3f3',
        background: "#fff",
    }
}))

const UploadExperienceImages = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const content = useSelector(state=>state.stepperReducer.content);
    const handleUpload = () => dispatch(errorHandler("Please upload 6 or more images to proceed",true,'warning'));
    return (
        <Grid className={classes.mainDiv} container direction="column" alignItems="center" justify="center" spacing={2}>
            <Grid item>
                <Typography className={classes.headerText}>Upload Your Images</Typography>
            </Grid>
            <Grid item className={classes.dropzoneDiv}>
                <Grid container direction="column" alignItems="flex-start" justify="center">
                    <Formik
                        initialValues={{
                            imagesOfExperience: content.imagesOfExperience !== (null || undefined || "") ? content.imagesOfExperience: []
                        }}

                        onSubmit={(values)=>{
                            console.log(values)
                            dispatch(stepperContent({
                                imagesOfExperience:values.imagesOfExperience,
                                detailsOfExperience: content.detailsOfExperience !== (null || undefined || "") ? {...content.detailsOfExperience} : {}
                            }));
                            dispatch(stepperIncrement());
                        }}

                        validationSchema={FilesUploadValidation}
                    >
                        {({setFieldValue,submitForm,errors,values})=>(
                            <FormikForm style={{width:"100%"}}>
                                <Grid container direction="column" alignItems="flex-start">
                                    <FilesDropZone errors={errors} setFieldValue={setFieldValue} classes={classes} />
                                </Grid>
                                <Grid container alignItems="flex-end" justify="flex-end" style={{padding:"0"}}>
                                    <Navigation next={values.imagesOfExperience.length < 6 ? handleUpload : submitForm} text="Next" />
                                </Grid>
                            </FormikForm>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UploadExperienceImages;