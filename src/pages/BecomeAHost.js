import React from "react";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {Formik,Form as FormikForm} from "formik";
import {useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import PublishIcon from '@material-ui/icons/Publish';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import GridContainer from "../containers/GridContainer/GridContainer";
import {checkFileSize} from "../utils/checkFileSize";
import Error from "../components/Errors";
import {errorHandler} from "../redux/actions/authAction";
import {BecomeHost} from "../graphql/mutations/becomeHost";
import client from "../apollo/client";

const BecomeHostValidation = Yup.object().shape({
    picture: Yup.string().required("Please pass this value"),
    hostBrand: Yup.string().required("Please pass this value"),
    location: Yup.string().required("Please pass this value"),
    aboutSelf: Yup.string().min(200, "Please describe yourself in not less than 200 words").required("Please pass this value")
});

const useStyles = makeStyles(theme=>({
    root: {
        padding: '2px 4px 2px 8px',
        marginTop: '6.9px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.8rem',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'white',
        '& .MuiButton-root.Mui-disabled': {
            color: 'white',
        },
    },
      iconButton: {
          padding: 5,
          backgroundColor: '#ffffff',
          border: '3px solid whitesmoke',
      },
      textField: {
          backgroundColor: 'white',
          '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#e71575',
          },
          '& .MuiOutlinedInput-root': {
              borderRadius: 35,
          },
          '& .Mui-focused': {
              borderColor: "#e71575"
          },
          '& .MuiOutlinedInput-marginDense': {
              borderColor: "#e71575"
          },
          borderRadius: 35,
          width: '100%',
      },
      uploaded:{
          color:'black'
      },
      submit:{
          color: "#e71575",
          border: '1px #e71575 solid',
          width: '120px',
          margin: '16px 0 16px 16px'
      },leftPanel:{
          background: "#e71575"
      },
      topic:{
          color:"#fff",
          marginLeft:theme.spacing(2),
          [theme.breakpoints.down('sm')]:{
              fontSize:'1rem',
          }
      }
}))

function BecomeAHost(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <GridContainer>
            <Grid className={classes.leftPanel} container spacing={2} alignItems="center" justify="center">
                <Typography className={classes.topic} variant="h3">
                    Tell Us A Little More About Yourself
                </Typography>
            </Grid>
            <Grid container alignItems="center" justify="center">
                <Formik 
                    initialValues={{
                        picture:"",
                        hostBrand:"",
                        location:"",
                        aboutSelf:""
                    }}

                    onSubmit={async(values)=>{
                        try{
                            const variables = {
                                input:{
                                    picture:values.picture,
                                    hostBrand:values.hostBrand,
                                    location:values.location,
                                    aboutSelf:values.aboutSelf
                                }
                            }
                            const response = await client.request(BecomeHost,variables);
                            if(response){
                                console.log(response)
                                history.push('/create-an-experience');
                            }
                        }catch(e){
                            console.log(e)
                            dispatch(errorHandler("Could not upload your information",true,'error'));
                        }
                    }}

                    validationSchema={BecomeHostValidation}
                    >
                        {({submitForm,handleChange,setFieldValue,handleBlur,values,errors})=>(
                            <FormikForm>
                                <Grid container spacing={2} justify="center" alignItems="flex-start" >
                                    <Grid item xs={values.picture !== '' ? 9:10} sm={values.picture !== '' ? 9:10} lg={values.picture !== '' ? 9:10} xl={values.picture !== '' ? 9:10}>
                                        <>
                                        <div style={{border:"1px #e71575 solid"}} className={classes.root}>
                                            <input
                                                className={classes.textField}
                                                type="file"
                                                name="picture"
                                                margin="dense"
                                                variant="outlined"
                                                id="picture"
                                                hidden
                                                onChange={(e) => {
                                                if (checkFileSize(e.target.files[0].size) > 2){
                                                    dispatch(errorHandler('upload a file less than 2mb',true,'warning'));
                                                }else{
                                                    setFieldValue('picture', e.target.files[0]);
                                                }
                                                }}
                                             />
                                            <Typography style={{ color: 'rgba(0, 0, 0, 0.54)' }} variant="body2">Upload A High Quality Image Of Yourself</Typography>
                                            <label htmlFor="picture">
                                                <IconButton
                                                    type="button"
                                                    className={classes.iconButton}
                                                    aria-label="picture"
                                                    component="span"
                                                >
                                                    <PublishIcon style={{ color: '#f88d2a' }} fontSize="small" />
                                                </IconButton>
                                            </label>
                                        </div>
                                        <Error error={errors.picture} />
                                        </>
                                    </Grid>
                                    {
                                        values.picture !== '' && (
                                            <Grid style={{ marginTop: '14px' }} item xl={1} lg={1} xs={1} sm={1}>
                                                <CheckIcon size="small" className={classes.uploaded} />
                                            </Grid>
                                        )
                                    }
                                    <Grid item xl={10} lg={10} sm={10} xs={10}>
                                        <>
                                        <TextField
                                            label="Brand Name / Host Brand"
                                            value={values.hostBrand}
                                            autoComplete="off"
                                            error={Boolean(errors.hostBrand)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="hostBrand"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.hostBrand} />
                                        </>
                                    </Grid>
                                    <Grid item xl={10} lg={10} sm={10} xs={10}>
                                        <>
                                        <TextField
                                            label="Where Are You Located?"
                                            value={values.location}
                                            autoComplete="off"
                                            error={Boolean(errors.location)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="location"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.location} />
                                        </>
                                    </Grid>
                                    <Grid item xl={10} lg={10} sm={10} xs={10}>
                                        <>
                                        <TextField
                                            label="Describe Yourself"
                                            value={values.aboutSelf}
                                            autoComplete="off"
                                            error={Boolean(errors.aboutSelf)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            multiline
                                            rows = {
                                                7
                                            }
                                            type="text"
                                            name="aboutSelf"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.aboutSelf} />
                                        </>
                                    </Grid>
                                    <Grid item xl={10} lg={10} sm={10} xs={10}>
                                        <Grid container justify="flex-end" alignItems="center">
                                            <Button className={classes.submit} onClick={submitForm}>
                                                <Typography variant="subtitle1">Submit</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                            </FormikForm>
                        )}
                    </Formik>
            </Grid>
        </GridContainer>
    )
}
export default React.memo(BecomeAHost);