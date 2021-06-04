import React from "react";
import {useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {makeStyles,useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import shortId from "shortid";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExperienceDetails from "./ExperienceDetails";
import dummyExperiences,{sixImagesWeWant} from "../../data";
import "../../index.css";

const useStyles = makeStyles(theme=>({
    backBtn:{
        border: 'none',
        width: '100px',
        margin: '16px 0 16px 16px',
        color:"#e71575"
    },
    hr:{
        borderTop: '.1px solid #e4efe7',
        width:'100%'
    },
    expDetails:{
        display:"grid",
        gridTemplateColumns:"55% 30%",
        gridTemplateRows:"minmax(auto,auto)",
        heigth:"70vh",
        [theme.breakpoints.down('sm')]:{
            gridTemplateColumns:"1fr",
            top:"0",
            position:"static"
        },
        gridGap:"5%",
        position:"relative",
        top:"20px",
        right:"0",
        left:"0"
    },
    expDesc:{
        padding:'2rem 2rem 2rem 0',
    },
    peopleAllowed:{
        display:'flex',
        alignItems:'flex-start',
        gap:'2%',
        justify:"center",
        width:"100%",
        padding:'2rem 2rem 2rem 0',
        fontSize:".85rem"
    },
    nav:{
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        background:"#fff",
        width:"100%",
        display:"flex",
        flexWrap:"nowrap",
        alignItems:"center",
        width:"100vw"
    },
    giveBodyPadding:{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        padding:"0 3rem 0 3rem",
    },
    carouselImages:{
        width:'300px',
        height:'70vh',
        borderRadius:"20px",
        objectFit:"cover",
        objectPosition:"top",
        [theme.breakpoints.down('sm')]:{
            minWidth:"100%",
            borderRadius:"0",
            height:"64vh"
        }
    },
    textDetails:{
        fontSize:"1.5rem",
        fontWeight:"600"
    },
    textDetailsDuration:{
        fontSize:"1rem",
        color: "#353839",
        fontWeight:"300"
    },
    carouselDiv:{
        width:"100vw",
        minHeight:'90vh',
        display:'flex',
        alignItems:"center",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"left",
        [theme.breakpoints.down('sm')]: {
            alignItems:"initial",
            padding:"1rem",
            width:"90%",
            minHeight:"75vh",
            justifyContent:"initial"
        }
    },
    sliderText:{
        alignSelf:"start",
        marginLeft:"4.9rem",
        marginBottom:".4rem",
        [theme.breakpoints.down("sm")]:{
            marginLeft:"0"
        },
        [theme.breakpoints.down("1024px")]: {
            marginLeft: "3.1rem"
        },
        [theme.breakpoints.up("xl")]: {
            marginLeft: "7.9rem"
        }
    },
    aboutAuthor:{
        display:'flex',
        gap:'3%',
        alignItems:'flex-start',
        justifyContent: "space-between",
        width:"100%",
        paddingBottom:"1.2rem"
    },
    aboutExp:{
        display:'flex',
        gap:'5%',
        alignItems:'flex-start',
        flexDirection:"column",
    },
    bigScImg:{
        objectFit:"cover",
        objectPosition:"top",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        maxWidth:"100%"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    navText:{
        margin:"16px"
    },
    bookingDiv:{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        flexWrap:"nowrap",
        gap:"1%",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        border:".2px solid #e4efe7",
        padding:".6rem",
        height:"120px"
    },
    bookingDetails:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        flexWrap:"nowrap",
        padding:"0",
        margin:"0"
    },
    selectDate:{
        background: "#e71575",
        width:"100px",
        border:"0",
        color:"white",
        '&:hover':{
            background: "#e71575",
        }
    },
    selectMobiletDate: {
        background: "#e71575",
        width: "250px",
        border: "0",
        color: "white",
        '&:hover': {
            background: "#e71575",
        }
    },
    mobileView:{
        bottom:"0",
        position:"fixed",
        width:"100%",
        background:"white",
        left:"0",
        alignSelf:"center",
        textAlign:"center"
    }
}))

const settings = {
      dots: true,
      infinite: false,
      speed: 0,
      arrows:false,
      draggable:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      className:'center-content',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            swipeToSlide: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            
          }
        }
      ]
    };

const Booking = ()=>{
    const classes = useStyles();
    let ts = React.useRef();
    const history = useHistory();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const handleBack = ()=>history.goBack()
    return (
        <>
        <div className={classes.nav}>
            <Grid container justify="space-between" alignItems="center" style={matches ? {width:"100vw"}:{width:"50vw"}}>
                <Button style={{ marginRight: '20px', backgroundColor: 'white' }} onClick={handleBack} size="small" variant="outlined" className={classes.backBtn} startIcon={<ArrowBackIcon color="secondary" size="small" />}>
                    <Typography variant="body1" color="secondary">Back</Typography>
                </Button>
                <Typography className={classes.navText} variant="h6">
                    HostGuest
                </Typography>
            </Grid>
        </div>
        <div className={classes.carouselDiv}>
            <Typography className={classes.sliderText} variant="h6">
                Experience By Steve Lorgan
            </Typography>
            {
                matches ? (
                    <Slider ref={c => ts = c} {...settings}>
                
                        {
                            dummyExperiences.map(({img,index})=>(
                                <div style={matches ? {maxWidth:"100%"}:{maxWidth:"300px"}}  key={index}>
                                    <img className={classes.carouselImages} src={img} alt="experience photos by ..." />
                                </div>
                            ))
                        }
                
                    </Slider>
                ):(
                    <div className="container">
                        {
                            sixImagesWeWant.length > 0 &&
                                
                                    sixImagesWeWant.map(({img,text})=>(
                                        <div key={shortId.generate()} className="box">
                                            <div className="content">
                                                <img className={classes.bigScImg} src={img} alt={text} />
                                            </div>
                                        </div>
                                    ))
                        }
                    </div>
                )
            }
        </div>
        <div className={classes.giveBodyPadding}> 
            <div>
                <ExperienceDetails details={dummyExperiences[0]} classes={classes} />
            </div>
        </div>
        </>
    )
}

export default Booking;