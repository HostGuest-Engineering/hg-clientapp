import React from "react";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import {useDispatch,useSelector} from "react-redux";
import {Formik,Form as FormikForm,FieldArray} from "formik";
import DatePicker from "react-multi-date-picker";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import _ from "lodash";
import {errorHandler} from "../../redux/actions/authAction";
import {stepperIncrement,stepperContent} from "../../redux/actions/stepperAction";
import Navigation from "../../components/StepperNavigation";
import Error from "../../components/Errors";

const AddExperienceDetailsValidation = Yup.object().shape({
    nameOfExperience: Yup.string().required("Please fill out this field"),
    descriptionOfExperience: Yup.string().required("Please fill out this field"),
    numberOfPeopleAllowed: Yup.number().max(45).required("Please fill out this field"),
    price: Yup.string().required("Please fill out this field"),
    duration: Yup.string().required("Please fill out this field"),
    category: Yup.string().required("Please fill out this field"),
    userBrings: Yup.array(Yup.string().required("Please fill out this field")).required(), 
    datesOfExperience:Yup.array( Yup.string().required("Please fill out this field")).required(),
})

const useStyles = makeStyles(theme=>({
    headerText:{
        fontWeight:"600",
        fontSize:'1.5rem',
        padding:"24px"
    },
    subExpDiv: {
        width:"100%",
        textAlign:"center",
        verticalAlign: 'middle'
    },
    mainDiv:{
        padding:"0 24px 0 24px",
        width: '100%'
    },
    textFileName:{
        marginTop:theme.spacing(1)
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
        '&:hover':{
            borderColor: "#e71575"
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-marginDense': {
            fontSize:".85rem"
        },
        borderRadius: 35,
        width: '100%',
    },
    dateField:{
        padding:".8rem",
        borderRadius: 35,
        outline:"none",
        border: "1px #e71575 solid",
        width: '100%',
    },
    datePickerLabel:{
        fontSize:".85rem",
        paddingLeft:"14px"
    },
    gridItem:{
        width:'100%'
    },
    menuSelectField: {
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.white,
      borderRadius: '28px !important',
    },
    '& .MuiFormLabel-root.MuiInputLabel-outlined': {
        fontSize: ".85rem"
    },
    '& MuiInputLabel-formControl':{
        fontSize:".85rem"
    }
    },
    selectField: {
        backgroundColor: theme.palette.white,
        borderRadius: '28px !important',
        '& .MuiSelect-select:focus': {
        backgroundColor: 'transparent',
        borderColor:"black"
        },
    }
}))

const AddExperienceDetails = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const today = new Date();
    const [value, setValues] = React.useState([today]);
    const content = useSelector(state => state.stepperReducer.content);
    const dateChange = React.useCallback((e)=>{
        setValues()
    },[value])
    return (
        <Grid className={classes.mainDiv} container direction="column" alignItems="center" justify="center" spacing={2}>
            <Grid item>
                <Typography className={classes.headerText}>Add Experience Details</Typography>
            </Grid>
                    <Formik
                        initialValues={{
                            nameOfExperience:"",
                            descriptionOfExperience:"",
                            numberOfPeopleAllowed:"",
                            price:"",
                            duration:"",
                            category:"",
                            userBrings:[""],
                            datesOfExperience:[new Date()]                         
                        }}

                        onSubmit={(values)=>{
                            dispatch(stepperContent({
                                imagesOfExperience:values.imagesOfExperience,
                                detailsOfExperience: content.detailsOfExperience !== (null || undefined || "") ? content.detailsOfExperience : {}
                            }));
                            dispatch(stepperIncrement());
                        }}

                        validationSchema={AddExperienceDetailsValidation}
                    >
                        {({handleChange,handleBlur,submitForm,errors,values})=>(
                            <FormikForm style={{width:"100%"}}>
                                <Grid container spacing={2}>
                                    <Grid className={classes.gridItem} item xl={12} lg={12} sm={12} xs={12}>
                                        <>
                                        <TextField
                                            label="Name Of Experience"
                                            value={values.nameOfExperience}
                                            autoComplete="off"
                                            error={Boolean(errors.nameOfExperience)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="nameOfExperience"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.nameOfExperience} />
                                        </>
                                    </Grid>
                                    <Grid className={classes.gridItem} item xl={12} lg={12} sm={12} xs={12}>
                                        <>
                                        <TextField
                                            label="Describe Your Experience"
                                            value={values.descriptionOfExperience}
                                            autoComplete="off"
                                            error={Boolean(errors.descriptionOfExperience)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="descriptionOfExperience"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.descriptionOfExperience} />
                                        </>
                                    </Grid>
                                    <Grid className={classes.gridItem} item xl={4} lg={4} sm={12} xs={12}>
                                        <>
                                        <TextField
                                            label="Number Of People Expected"
                                            value={values.numberOfPeopleAllowed}
                                            autoComplete="off"
                                            error={Boolean(errors.numberOfPeopleAllowed)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="numberOfPeopleAllowed"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.numberOfPeopleAllowed} />
                                        </>
                                    </Grid>
                                    <Grid className={classes.gridItem} item xl={4} lg={4} sm={12} xs={12}>
                                        <>
                                        <TextField
                                            label="Price in KES"
                                            value={values.price}
                                            autoComplete="off"
                                            error={Boolean(errors.price)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="price"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.price} />
                                        </>
                                    </Grid>
                                    <Grid className={classes.gridItem} item xl={4} lg={4} sm={12} xs={12}>
                                        <>
                                        <TextField
                                            label="How Long Will The Experience Last?"
                                            value={values.duration}
                                            autoComplete="off"
                                            error={Boolean(errors.duration)}
                                            className={classes.textField}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="duration"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                        <Error error={errors.duration} />
                                        </>
                                    </Grid>
                                    <Grid className={classes.gridItem} item xl={6} lg={6} sm={12} xs={12}>
                                        <>
                                        <InputLabel className={classes.datePickerLabel} htmlFor="datepicker">Select Dates Of Experience</InputLabel>
                                        <DatePicker 
                                            multiple
                                            value={value} 
                                            onChange={dateChange}
                                            minDate={new Date()}
                                            inputClass={classes.dateField}
                                            calenderPosition="bottom"
                                            id="datepicker"
                                        />
                                        </>
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xl={6} lg={6} xs={12} sm={12}>
                                        <>
                                            <FormControl variant="outlined" className={classes.textField} error={Boolean(errors.category)}>
                                            <InputLabel style={{ marginTop: '-7px' }} id="demo-simple-select-label">Category</InputLabel>
                                            <Select
                                                id = "category"
                                                inputProps={{
                                                name: 'category',
                                                }}
                                                value={values.category}
                                                onChange={handleChange}
                                                label="Title"
                                                margin="dense"

                                                MenuProps={{ className: classes.menuSelectField }}
                                                className={classes.selectFieldGrey}
                                            >
                                                <MenuItem value="Mr.">Mr.</MenuItem>
                                                <MenuItem value="Ms.">Ms.</MenuItem>
                                            </Select>
                                            </FormControl>
                                            <Error error={errors.category} />
                                        </>
                                    </Grid>
                                    {/* <Grid className={classes.gridItem} item xl={12} lg={12} sm={12} xs={12}>
                                        <>
                                        <InputLabel className={classes.datePickerLabel} htmlFor="datepicker">Select Dates Of Experience</InputLabel>
                                        <DatePicker 
                                            multiple
                                            value={value} 
                                            onChange={dateChange}
                                            minDate={new Date()}
                                            inputClass={classes.dateField}
                                            calenderPosition="bottom"
                                            id="datepicker"
                                        />
                                        </>
                                    </Grid> */}
                                </Grid>
                                <Grid container alignItems="flex-end" justify="flex-end" style={{padding:"0"}}>
                                    <Navigation start back text="Back" />
                                    <Navigation next={submitForm} text="Next" />
                                </Grid>
                            </FormikForm>
                        )}
                    </Formik>
                </Grid>
            
    )
}

export default AddExperienceDetails;