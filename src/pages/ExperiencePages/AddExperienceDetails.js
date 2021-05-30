import React from "react";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import {useDispatch,useSelector} from "react-redux";
import {Formik,Form as FormikForm} from "formik";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DatePicker,{DateObject} from "react-multi-date-picker";
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
import hostguestCategories,{handleSubCategories} from "../../utils/hostguestCategories";

const AddExperienceDetailsValidation = Yup.object().shape({
    nameOfExperience: Yup.string().required("Please fill out this field"),
    descriptionOfExperience: Yup.string().required("Please fill out this field"),
    numberOfPeopleAllowed: Yup.number().max(45,"Number Of People Allowed needs to be less than or equal to 45").required("Please fill out this field"),
    price: Yup.number().required("Please fill out this field"),
    duration: Yup.string().required("Please fill out this field"),
    category: Yup.string().required("Please fill out this field"),
    subcategory:Yup.string().when('category',{
        is:val=>val !== (null || undefined || ""),
        then:Yup.string().required("Please fill this value")
    })
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
            borderColor: '#faf3f3',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 35,
        },
        '& .Mui-focused': {
            borderColor: "#faf3f3"
        },
        '& .MuiOutlinedInput-marginDense': {
            borderColor: "#faf3f3"
        },
        '&:hover':{
            borderColor: "#faf3f3"
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
        border: "1px #faf3f3 solid",
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
        borderColor: "#faf3f3"
        },
    },
    addIcon:{
        border: '1px solid #faf3f3',
        background:"#fff",
    }
}))

const AddExperienceDetails = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const content = useSelector(state => state.stepperReducer.content);
    const today = new Date();
    const setInitialDates = _.isEmpty(content.detailsOfExperience) ? [today] : content.detailsOfExperience.datesOfExperience;
    const setInitialGuestBrings = _.isEmpty(content.detailsOfExperience) ? [] : content.detailsOfExperience.userBrings;
    const setInitialSubCat = _.isEmpty(content.detailsOfExperience) ? "" : content.detailsOfExperience.category ;
    const [value, setValues] = React.useState(setInitialDates);
    const [guestBrings,setGuestBrings] = React.useState('');
    const [newV, setNewV] = React.useState(setInitialGuestBrings);
    console.log(new DateObject(value, 'DD-MM-YYYY').format());
    const [subCat, setSubCat] = React.useState(setInitialSubCat);
    
    const dateChange = React.useCallback((e)=>{
        setValues(new DateObject(e, 'DD-MM-YYYY').format())
    },[value])

    const handleGChange =(e)=>{
        setGuestBrings(e.target.value);
    }

    const handleGuestBrings = React.useCallback((e)=>{
        if(_.isEmpty(guestBrings)){
            dispatch(errorHandler("Please add an item",true,'warning'));
        }else{
            setNewV([...newV,guestBrings]);
        }
    },[guestBrings,newV])

    const handleRemoveItem = index=>{
        newV.splice(index,1);
        return setNewV([...newV])
    }
    const subCatArray = handleSubCategories(subCat);
    return (
        <Grid className={classes.mainDiv} container direction="column" alignItems="center" justify="center" spacing={2}>
            <Grid item>
                <Typography className={classes.headerText}>Add Experience Details</Typography>
            </Grid>
                    <Formik
                        initialValues={{
                            nameOfExperience: content.detailsOfExperience.nameOfExperience !== (null || undefined || "") ? content.detailsOfExperience.nameOfExperience : "",
                            descriptionOfExperience: content.detailsOfExperience.descriptionOfExperience !== (null || undefined || "") ? content.detailsOfExperience.descriptionOfExperience : "",
                            numberOfPeopleAllowed: content.detailsOfExperience.numberOfPeopleAllowed !== (null || undefined || "") ? content.detailsOfExperience.numberOfPeopleAllowed : "",
                            price: content.detailsOfExperience.price !== (null || undefined || "") ? content.detailsOfExperience.price : "",
                            duration:content.detailsOfExperience.duration !== (null || undefined || "") ? content.detailsOfExperience.duration:"",
                            category: content.detailsOfExperience.category !== (null || undefined || "") ? content.detailsOfExperience.category : "",
                            subcategory: content.detailsOfExperience.subcategory !== (null || undefined || "") ? content.detailsOfExperience.subcategory : ""
                        }}

                        onSubmit={(values)=>{
                            dispatch(stepperContent({
                                imagesOfExperience:content.imagesOfExperience,
                                detailsOfExperience:{
                                    nameOfExperience:values.nameOfExperience,
                                    descriptionOfExperience:values.descriptionOfExperience,
                                    numberOfPeopleAllowed:values.numberOfPeopleAllowed,
                                    price:values.price,
                                    duration:values.duration,
                                    category:values.category,
                                    userBrings: newV,
                                    datesOfExperience:value,
                                    subcategory: values.subcategory
                                }
                            }));
                            dispatch(stepperIncrement());
                        }}

                        validationSchema={AddExperienceDetailsValidation}
                    >
                        {({handleChange,handleBlur,submitForm,errors,values,setFieldValue})=>(
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
                                            type="number"
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
                                            type="number"
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
                                            onChange={(e)=>dateChange(e)}
                                            minDate={new Date()}
                                            inputClass={classes.dateField}
                                            calenderPosition="bottom"
                                            id="datepicker"
                                        />
                                        </>
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xl={12} lg={12} xs={12} sm={12}>
                                        <>
                                            <FormControl variant="outlined" className={classes.textField} error={Boolean(errors.category)}>
                                            <InputLabel style={{ marginTop: '-7px' }} id="demo-simple-select-label">Category</InputLabel>
                                            <Select
                                                id = "category"
                                                inputProps={{
                                                name: 'category',
                                                }}
                                                value={values.category}
                                                onChange={(e)=>{
                                                    setFieldValue('category',e.target.value,true);
                                                    setSubCat(e.target.value);
                                                }}
                                                label="Title"
                                                margin="dense"

                                                MenuProps={{ className: classes.menuSelectField }}
                                                className={classes.selectFieldGrey}
                                            >
                                                {
                                                    hostguestCategories.map(({category,value,key})=>(
                                                        <MenuItem value={value} key={key}>{category}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                            </FormControl>
                                            <Error error={errors.category} />
                                        </>
                                    </Grid>
                                    <Grid className={classes.gridItem} item xl={12} lg={12} xs={12} sm={12}> 
                                        {
                                        subCat !== (null || undefined || "" ) && (
                                            <Grid style={{ marginTop: '15px' }} item xl={12} lg={12} xs={12} sm={12}>
                                                <>
                                                    <FormControl variant="outlined" className={classes.textField} error={Boolean(errors.subcategory)}>
                                                    <InputLabel style={{ marginTop: '-7px' }} id="demo-simple-select-label">Select {subCat} Sub Category</InputLabel>
                                                    <Select
                                                        id = "subcategory"
                                                        inputProps={{
                                                        name: 'subcategory',
                                                        }}
                                                        value={values.subcategory}
                                                        onChange={handleChange}
                                                        label=""
                                                        margin="dense"

                                                        MenuProps={{ className: classes.menuSelectField }}
                                                        className={classes.selectFieldGrey}
                                                    >
                                                        {
                                                            subCatArray.map(({category,value,key})=>(
                                                                <MenuItem value={value} key={key}>{category}</MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                    </FormControl>
                                                    <Error error={errors.category} />
                                                </>
                                            </Grid>
                                        )}
                                        </Grid>
                                    <Grid className={classes.gridItem} item xl={11} lg={11} sm={11} xs={11}>
                                        <>
                                            <TextField
                                                label="What should the guest's bring?"
                                                value={guestBrings}
                                                autoComplete="off"
                                                className={classes.textField}
                                                onChange={handleGChange}
                                                type="text"
                                                name="userBrings"
                                                margin="dense"
                                                variant="outlined"
                                            />
                                            {newV.length === 0 ? null : (
                                                <ul style={{paddingLeft:"30px"}}>
                                                <Grid container direction="column" alignItems="flex-start" spacing={2} >
                                                    {
                                                        newV.map((item,index)=>(
                                                            <Grid key={index} style={{marginBottom:".7rem"}} container alignItems="flex-start" spacing={2}>
                                                            <li>{item}</li>
                                                            <IconButton style={{fontSize:".7rem",marginLeft:".5rem",padding:"0"}} className={classes.addIcon} onClick={()=>handleRemoveItem(index)} size="small" color="secondary" aria-label="add to list">
                                                                <DeleteOutlineIcon size="inherit" />
                                                            </IconButton>
                                                           </Grid>
                                                        ))
                                                    }
                                                </Grid>
                                                </ul>
                                            )}
                                        </>
                                    </Grid>
                                    <Grid item item xl={1} lg={1} sm={1} xs={1}>
                                        <IconButton className={classes.addIcon} onClick={(e)=>handleGuestBrings(e)} size="medium" color="secondary" aria-label="add to list">
                                            <AddIcon />
                                        </IconButton>
                                    </Grid>
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