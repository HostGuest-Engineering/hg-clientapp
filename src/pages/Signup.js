import React from "react";
import {Form as FormikForm, Formik} from "formik";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {CommonStyles} from "../components/Assets/CommonThemes";
import client from "../apollo/client";
import {SIGN_UP} from "../graphql/mutations/auth";
import Error from "../components/Errors";

const useStyles = makeStyles(theme=>({
    login:{
        color: "#e71575",
        border:'1px #e71575 solid',
        width:'120px',
        margin:'16px 0 16px 16px'
    }
}))

const SignUpValidation = Yup.object().shape({
    password: Yup.string().min(8,"Password has to be longer than 8 characters").required("Please fill out this field"),
    email: Yup.string().required("Please fill out this field"),
    confirmPassword: Yup.string().required("Please fill out this field"),
    mobile: Yup.string().required("Please fill out this field"),
    firstName: Yup.string().required("Please fill out this field"),
    lastName: Yup.string().required("Please fill out this field"),
});

const SignUpPage = ()=>{
    const classes = CommonStyles();
    const loginStyles = useStyles();
    return (
        <Formik
            initialValues={{
                password:"",
                email:"",
                confirmPassword:"",
                mobile:"",
                firstName:"",
                lastName:""
            }}

            onSubmit={(values)=>{
                //submit this form
                try {
                    const variables = {
                        input: {
                            email: values.email,
                            password: values.password,
                            confirmPassword: values.confirmPassword,
                            mobile: values.mobile,
                            firstName: values.firstName,
                            lastName: values.lastName
                        }
                    }
                    const response = client.request(SIGN_UP, variables);
                } catch (e) {
                    console.log(e)
                }
            }}

            validationSchema={SignUpValidation}
        >
            {({handleChange,handleBlur,values,submitForm,errors})=>(
                <FormikForm >
                    <Grid container spacing={2} alignItems="center">
                        <Grid xl={12} sm={12} xs={12} lg={12}>
                            <>
                            <TextField
                                error={errors.firstName}
                                label="First Name"
                                value={values.firstName}
                                autoComplete="off"
                                className={classes.textField}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                name="firstName"
                                margin="dense"
                                variant="outlined"
                                />
                                <Error error={errors.firstName} />
                            </>
                        </Grid>
                        <Grid xl={12} sm={12} xs={12} lg={12}>
                            <>
                            <TextField
                                label="LastName"
                                error={errors.lastName}
                                value={values.lastName}
                                autoComplete="off"
                                className={classes.textField}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                name="lastName"
                                margin="dense"
                                variant="outlined"
                                />
                                 <Error error={errors.lastName} />
                            </>
                        </Grid>
                        <Grid xl={12} sm={12} xs={12} lg={12}>
                            <>
                            <TextField
                                label="Email"
                                error={errors.email}
                                value={values.email}
                                autoComplete="off"
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
                        <Grid xl={12} sm={12} xs={12} lg={12}>
                            <>
                            <TextField
                                label="Confirm Password"
                                error={errors.confirmPassword}
                                value={values.confirmPassword}
                                autoComplete="off"
                                className={classes.textField}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="password"
                                name="confrimPassword"
                                margin="dense"
                                variant="outlined"
                                />
                                 <Error error={errors.confirmPassword} />
                            </>
                        </Grid>
                        <Grid xl={12} sm={12} xs={12} lg={12}>
                            <>
                            <TextField
                                label="Phone Number"
                                error={errors.mobile}
                                value={values.mobile}
                                autoComplete="off"
                                className={classes.textField}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                name="mobile"
                                margin="dense"
                                variant="outlined"
                                />
                                 <Error error={errors.mobile} />
                            </>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end" alignItems="center">
                        <Button className={loginStyles.login} onClick={submitForm}>
                            <Typography variant="subtitle1">SignUp</Typography>
                        </Button>
                    </Grid>
                </FormikForm>
            )}
        </Formik>
    )
}

export default SignUpPage;