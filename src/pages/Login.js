import React from "react";
import {Form as FormikForm, Formik} from "formik";
import TextField from '@material-ui/core/TextField';
import {useDispatch,useSelector} from "react-redux";
import GoogleLogin from 'react-google-login';
import * as Yup from "yup";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {CommonStyles} from "../components/Assets/CommonThemes";
import client from "../apollo/client";
import OauthGoogleResolver,{SIGN_IN,USER_DETAILS} from "../graphql/mutations/auth";
import {authAction,userDetails,isAuthenticated} from "../redux/actions/authAction";
import Error from "../components/Errors";

const useStyles = makeStyles(theme=>({
    login:{
        color: "#e71575",
        border:'1px #e71575 solid',
        width:'120px',
        margin:'16px 0 16px 16px'
    }
}))

const LoginValidation = Yup.object().shape({
    email:Yup.string().required("Please fill this field"),
    password:Yup.string().required("Please fill out this field")
});

const LoginPage = ()=>{
    const classes = CommonStyles();
    const loginStyles = useStyles();
    const dispatch = useDispatch();
    const state = useSelector(state=>state.authReducer);
    const handleFailure = (err)=>{
        console.log("could not upload",err);
    }

    const googleResponse = async (res)=>{
        try{
            console.log(res)
            const variables = {
            input :{
                token:res.accessToken
            }
            }
            const response = await client.request(OauthGoogleResolver,variables);
        }catch(e){
            console.log(e)
        }
    }
    return (
        <Grid container spacing={2} alignItems="flex-start">
        <Formik
            initialValues={{
                password:"",
                email:""
            }}

            onSubmit={async (values)=>{
                //submit this form
                try{
                    const variables = {
                        input :{
                            email:values.email,
                            password:values.password
                        }
                    }
                    const response = await client.request(SIGN_IN,variables);
                    if(response){
                        let variables = {};
                        const response = await client.request(USER_DETAILS,variables);
                        console.log(response)
                        dispatch(authAction(false));
                        dispatch(userDetails(response.userDetails[0]));
                        dispatch(isAuthenticated(true));
                    }
                }
                catch(e){
                    console.log(e)
                }
            }}

            validationSchema={LoginValidation}
        >
            {({handleChange,handleBlur,values,submitForm,errors})=>(
                <FormikForm >
                    <Grid container spacing={2} alignItems="center">
                        <Grid xl={12} sm={12} xs={12} lg={12}>
                            <>
                            <TextField
                                label="Email"
                                value={values.email}
                                autoComplete="off"
                                error={errors.email}
                                className={classes.textField}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                name="email"
                                margin="dense"
                                variant="outlined"
                                />
                                <Error error={errors.email} />
                            </>
                        </Grid>
                        <Grid xl={12} sm={12} xs={12} lg={12}>
                            <>
                            <TextField
                                label="Password"
                                error={errors.password}
                                value={values.password}
                                autoComplete="off"
                                className={classes.textField}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="password"
                                name="password"
                                margin="dense"
                                variant="outlined"
                                />
                                <Error error={errors.password} />
                            </>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end" alignItems="center">
                        <Button className={loginStyles.login} onClick={submitForm}>
                            <Typography variant="subtitle1">Login</Typography>
                        </Button>
                    </Grid>
                </FormikForm>
            )}
        </Formik>
        {/* <Grid container>
            <Grid item >
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_ID}
                    buttonText="Login"
                    onSuccess={googleResponse}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </Grid>
        </Grid> */}
        </Grid>
    )
}

export default LoginPage;