import React from "react";
import {useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {makeStyles,useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import shortId from "shortid";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
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
        gridTemplateColumns:"55% 45%",
        gitdTemplateRows:"1fr",
        heigth:"70vh",
        [theme.breakpoints.down('sm')]:{
            gridTemplateColumns:"1fr",
        },
        gridGap:"5%",
        position:"relative",
        top:"20px",
        right:"0",
        left:"0"
    },
    peopleAllowed:{
        display:'flex',
        alignItems:'flex-start',
        gap:'2%',
        justify:"center",
        width:"100%"
    },
    nav:{
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        background:"#fff"
    },
    giveBodyPadding:{
        padding:"0 3rem 0 3rem"
    },
    carouselLeftIcon: {
        color: "#e71575",
        borderColor: "#e71575",
        position: "relative",
        top: "155px",
        left: "40px",
        zIndex: "1",
        float: "left",
        backgroundColor: "#fff",
        padding: theme.spacing(1),
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        '&:hover': {
            backgroundColor: "white"
        }
        },
    carouselRightIcon: {
        color: "#e71575",
        borderColor: "#e71575",
        position: "relative",
        float: "right",
        top: "-200px",
        zIndex: "1",
        backgroundColor: "#fff",
        padding: theme.spacing(1),
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        '&:hover': {
            backgroundColor: "white"
        }
    },
    carouselImages:{
        width:'300px',
        height:'70vh',
        borderRadius:"20px"
    },
    carouselDiv:{
        width:"100vw",
        minHeight:'90vh',
        position:'relative',
        display:'flex',
        alignSelf:"center",
        flexDirection:"column",
        justifyContent:"center",
        top:"10vh",
        textAlign:"left"
    },
    aboutAuthor:{
        display:'flex',
        gap:'3%',
        alignItems:'flex-start',
        justifyContent: "space-between",
        width:"100%"
    },
    aboutExp:{
        display:'flex',
        gap:'5%',
        alignItems:'flex-start',
        flexDirection:"column",
    }
}))

const settings = {
      dots: false,
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
    const next = () => ts.slickNext();
    const prev = () => ts.slickPrev();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const handleBack = ()=>history.goBack()
    return (
        <>
            <section>
                <Grid className={classes.nav} container alignItems="flex-start" spacing={2}>
                    <Grid container justify="space-between" alignItems="center" style={{width:"50vw"}}>
                        <Button style={{ marginRight: '20px', backgroundColor: 'white' }} onClick={handleBack} size="small" variant="outlined" className={classes.backBtn} startIcon={<ArrowBackIcon color="secondary" size="small" />}>
                            <Typography variant="body1" color="secondary">Back</Typography>
                        </Button>
                        <Typography variant="h6">
                            HostGuest
                        </Typography>
                    </Grid>
                </Grid>
            </section>
            <div className={classes.giveBodyPadding}>
                <div className={classes.carouselDiv}>
                    <Typography variant="h6">
                        Experience By Abc
                    </Typography>
                    {
                        matches ? (
                            <Slider ref={c => ts = c} {...settings}>
                        
                                {
                                    dummyExperiences.map(({img,text,index})=>(
                                        <div key={index}>
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
                                                        <img src={img} alt={text} />
                                                    </div>
                                                </div>
                                            ))
                                }
                            </div>
                        )
                    }
                    {/* {
                        !matches && (
                            <Grid item >
                                <IconButton onClick={prev} aria-label="prev" className={classes.carouselLeftIcon} size="small">
                                    <ChevronLeftIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        )
                    }
                        
                    <Slider ref={c => ts = c} {...settings}>
                        
                        {
                            dummyExperiences.map(({img,text,index})=>(
                                <div key={index}>
                                    <img className={classes.carouselImages} src={img} alt="experience photos by ..." />
                                </div>
                            ))
                        }
                        
                    </Slider>

                    {
                        !matches && (
                            <Grid item >
                                <IconButton onClick={next} aria-label="next" className={classes.carouselRightIcon} size="small">
                                    <ChevronRightIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        )
                    } */}
                </div>
            <div>
                <ExperienceDetails details={dummyExperiences[0]} classes={classes} />
            </div>
        </div>
        </>
    )
}

export default Booking;