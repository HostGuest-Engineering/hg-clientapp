import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import {useDispatch} from "react-redux";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import StarIcon from '@material-ui/icons/Star';
// import Rating from "react-rating";
import ReactStars from "react-rating-stars-component";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'; 
// import {HGButton} from "../components/Button";
import fun from "../components/Assets/fun.jpg";
import Header from "../containers/Header/AppHeader";
import dummyExperiences from "../data";
import AuthPage from "../containers/Auth/Auth";
// import {authAction} from "../../redux/action/authAction";

const useStyles = makeStyles(theme=>({
    main:{
        display:"grid",
        gridTemplateColumns:"100%",
        gitdTemplateRow:"1fr",
        heigth:"70vh",
        [theme.breakpoints.down('sm')]:{
            gridTemplateColumns:"1fr",
        },
        gridGap:"5%",
        position:"relative",
        top:"0",
        right:"0",
        left:"0"
    },
    root:{
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    },
    textSpacing:{
        margin:theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
        },
        color:"#ffffff",
        fontWeight:"500"
    },
    textSpacingLower:{
        margin:theme.spacing(1),
        width:"300px",
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
        },
        color:"#ffffff",
        fontWeight:"500",
        fontSize:"1.2rem"
    },
    upcoming:{
        color:"#4a4a4a",
        fontSize:"2rem",
        textAlign:"center",
        [theme.breakpoints.down('sm')]:{
            textAlign:"left",
            marginBottom:theme.spacing(2)
        }
    },
    top:{
        color:"#4a4a4a",
        fontSize:"2rem",
        marginBottom:theme.spacing(2),

    },
    carouselLeftIcon:{
        color:"#e71575",
        borderColor:"#e71575",
        position:"relative",
        top:"155px",
        left:"40px",
        zIndex:"1",
        float:"left",
        backgroundColor:"#fff",
        padding:theme.spacing(1),
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        '&:hover':{
            backgroundColor:"white"
        }
    },
    carouselRightIcon: {
        color: "#e71575",
        borderColor: "#e71575",
        position:"relative",
        float:"right",
        top:"-200px",
        zIndex:"1",
        backgroundColor: "#fff",
        padding: theme.spacing(1),
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        '&:hover': {
            backgroundColor: "white"
        }
    },
    mainCarouselSec:{
        padding:theme.spacing(3),
        overflowX:"hidden",
        backgroundColor:"#faf3f3"
    },
    carouselCard:{
        margin:theme.spacing(1),
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    },
    handleTop5:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:"10%",
        marginTop:theme.spacing(2),
        padding:theme.spacing(5),
        overflowX:"hidden",
        [theme.breakpoints.down('sm')]:{
            display:'block',
            padding:"0",
            marginLeft:theme.spacing(3.5)
        }
    },
    top5:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"wrap",
        alignItems:"center"
    },
    desc:{
        color:"#000",
        fontWeight:"700",
        fontSize:"1rem"
    },
    info:{
        fontSize:".6875rem",
        lineHeight:"2em"
    },
    btn:{
       textDecoration:"none",
       color:"white",
       fontWeight:"500"
    },
    img:{
        borderRadius:"20px",
        height: "300px",
        width: "600px",
        [theme.breakpoints.down('sm')]:{
            width:"300px",
            height:"200px"
        }
    },
    imgContainer:{
        marginTop:theme.spacing(4)
    },
    footer:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        [theme.breakpoints.down('sm')]:{
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        },
        marginBottom:0,
        padding:"10px 40px 10px 40px",
    },
    footerContent:{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"center",
        fontSize:".8rem"
    },
    footerText:{
        fontSize:".875rem",
        color:"#525252",
    },
    footerTextHeader:{
        fontSize:".95rem",
        color:"#000"
    },
    media:{
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"center",
        gap:"5%"
    },
    hr:{
        // paddingLeft:theme.spacing(5),
        // paddingRight:theme.spacing(5),
        // height:"1px"
    },
    item:{
        padding:"0"
    },explore:{
        marginLeft:theme.spacing(2)
    },hrr:{
       width:'100%',
       border:'0',
       backgroundImage:'linear-gradient(to right, #AA076B, #61045F)',
       height:'1px',
       margin:"0"
    },
    centerImageText:{
        flexDirection:"column",
        alignItems:"center",
        position:"absolute",
        top:"100px",
        textAlign:"center"
    },
    heroImage:{
        width:"100%",
        opacity:"1.7",
        height:"80vh",
        backgroundSize:"cover",
        backgroundPosition:"center center",
    },
    callToAction:{
        backgroundColor:"#e71575",
        borderRadius:"50px",
        width:"200px",
        height:"50px",
        fontWeight:"500",
        marginTop:theme.spacing(2)
    },
    lastCallToAction:{
        backgroundColor:"#e71575",
        borderRadius:"50px",
        width:"200px",
        height:"50px",
        fontWeight:"500",
        marginTop:theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            position:"relative",
            top:theme.spacing(3),
        }
    },
    currency:{
        position:"absolute",
        float:"right",
        right: '3px',
        top: '170px',
        color: 'white',
        border: '1px solid white',
        background: 'white',
        color: 'black',
        padding: '.2rem',
        borderRadius: '4px'
    },
    socialIcons:{
        margin:theme.spacing(1),
        '&:hover':{
            color:"#e71575"
        }
    }
}));

const settings = {
      dots: false,
      infinite: false,
      speed: 0,
      slidesToShow: 5,
      arrows:false,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
            swipeToSlide: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
const bigSc = {
    maxWidth:"260px"
}
const smSc = {
    maxWidth:"300px"
}
export default function Home(){
    const classes = useStyles();
    let ts = React.useRef();
    const next = () => ts.slickNext();
    const prev = () => ts.slickPrev();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    // const dispatch = useDispatch();
    // const handleOpen = ()=>dispatch(authAction(true));
    return (
        <>
        <div className={classes.main}>
        <Grid container alignItems="flex-start">
            <Header />
            <AuthPage />
            <Grid item xl={12} lg={12} sm={12} xs={12}>
                <img className={classes.heroImage} src='https://res.cloudinary.com/liveservers/image/upload/v1622625003/qmod7neczc4yhst4p4zh.jpg' alt="people having fun" />
            </Grid>
            <Grid item lg={12} xl={12} sm={12} xs={12}>
                <Grid className={classes.centerImageText} container>
                    <Typography style={{marginTop:"3rem"}} className={classes.textSpacing} variant="h3">
                        HostGuest Experiences
                    </Typography>
                    <Typography className={classes.textSpacingLower} variant="subtitle1">
                        Lorem Ipsum is a dummy text of the printing and typesetting industry.
                    </Typography>
                    <Grid container alignItems="center" spacing={2} justify="center" className={classes.callToAction}>
                        <PlayArrowIcon style={{color:"#fff",marginRight:"10px"}} />
                        <Link className={classes.btn} to="/create-an-experience">Host Experience</Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
         {/* Beginining of experiences section */}
        <div className={classes.mainCarouselSec}>
        <>
                <Typography className={classes.upcoming} variant="h3">
                    All Upcoming Experiences
                </Typography>
            <div style={{display:"block"}}>
            {
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
                            <Card style={!matches ? bigSc : smSc} className={classes.carouselCard}>
                                <CardActionArea>
                                    <CardMedia
                                    component="div"
                                    alt="Contemplative Reptile"
                                    height="210"
                                    title="Contemplative Reptile"
                                    children={
                                        <>
                                        <div>
                                            <img height="210" width="300" src={img} alt="people having fun" />
                                        </div>
                                        <Typography className={classes.currency} variant="subtitle1">KES 1500</Typography>
                                        </>
                                    }
                                    />
                                    <CardContent style={{padding:"0 16px 0 16px"}}>
                                    <Typography variant="body2" className={classes.desc} component="p">
                                        {text}
                                    </Typography>
                                    <Grid style={{margin:"2px 5px 2px 0"}} container spacing={2} justify="space-between" alignItems="center">
                                    <Typography variant="body2" className={classes.info} component="p">
                                     3 hours | Kenya
                                    </Typography>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:"nowrap",gap:"5px"}}>
                                        <span className={classes.info}>4/</span>
                                        <span className={classes.info}>5</span>
                                        <span className={classes.info}>
                                            <ReactStars
                                                count={5}
                                                size={10}
                                                activeColor="#e71575"
                                            />
                                        </span>
                                        <span className={classes.info}>(202)</span>
                                    </div>
                                    </Grid>
                                    </CardContent>
                                    <CardActions style={{padding:"8px 8px 8px 16px"}}>
                                    <Grid style={{padding:"10px 12px"}} container spacing={3} alignItems="flex-start" wrap="nowrap" justifyContent="flex-start" direction="row">
                                       <Avatar style={{marginRight:"5px"}} alt="host name" src={img} />
                                       <Grid container alignItems="flex-start" direction="column" >
                                            <Typography style={{color:"rgb(143, 142, 135)",fontSize:".7rem"}}>Hosted by</Typography>
                                            <Typography style={{fontSize:".7rem"}}>Lorgan</Typography>
                                       </Grid>
                                    </Grid>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
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
                }
                </div>
        </>
    </div>
        {/* Top 5 Experiences */}
        <div className={classes.handleTop5}>
            <Grid item>
                <Typography className={classes.top} variant="h3">
                    Top Experiences
                </Typography>
            </Grid>{
                matches ? (
                    <Slider ref={c => ts = c} {...settings}>
                    
                    {
                        dummyExperiences.map(({img,text,index})=>(
                            <div key={index}>
                            <Card style={{maxWidth:"300px"}} >
                                <CardActionArea>
                                    <CardMedia
                                    component="div"
                                    alt="Contemplative Reptile"
                                    height="210"
                                    title="Contemplative Reptile"
                                    children={
                                        <>
                                        <div>
                                            <img height="210" width="300" src={img} alt="people having fun" />
                                        </div>
                                        <Typography className={classes.currency} variant="subtitle1">KES 1500</Typography>
                                        </>
                                    }
                                    />
                                    <CardContent style={{padding:"0 16px 0 16px"}}>
                                    <Typography variant="body2" className={classes.desc} component="p">
                                        {text}
                                    </Typography>
                                    <Grid style={{margin:"2px 5px 2px 0"}} container spacing={2} justify="space-between" alignItems="center">
                                    <Typography variant="body2" className={classes.info} component="p">
                                     3 hours | Kenya
                                    </Typography>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:"nowrap",gap:"5px"}}>
                                        <span className={classes.info}>4/</span>
                                        <span className={classes.info}>5</span>
                                        <span className={classes.info}>
                                            <ReactStars
                                                count={5}
                                                size={10}
                                                activeColor="#e71575"
                                            />
                                        </span>
                                        <span className={classes.info}>(202)</span>
                                    </div>
                                    </Grid>
                                    </CardContent>
                                    <CardActions style={{padding:"8px 8px 8px 16px"}}>
                                    <Grid style={{padding:"10px 12px"}} container spacing={3} alignItems="flex-start" wrap="nowrap" justifyContent="flex-start" direction="row">
                                       <Avatar style={{marginRight:"5px"}} alt="host name" src={img} />
                                       <Grid container alignItems="flex-start" direction="column" >
                                            <Typography style={{color:"rgb(143, 142, 135)",fontSize:".7rem"}}>Hosted by</Typography>
                                            <Typography style={{fontSize:".7rem"}}>Lorgan</Typography>
                                       </Grid>
                                    </Grid>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                            </div>
                        ))
                    }
                    
                </Slider>
                ):(
            <div className={classes.top5}>
            {
                dummyExperiences.map(({img,text,index})=>(
                    <div key={index}>
                    <Card style={!matches ? bigSc : smSc} className={classes.carouselCard}>
                        <CardActionArea>
                            <CardMedia
                            component="div"
                            alt="Contemplative Reptile"
                            height="210"
                            title="Contemplative Reptile"
                            children={
                                <>
                                <div>
                                    <img height="210" width="300" src={img} alt="people having fun" />
                                </div>
                                <Typography className={classes.currency} variant="subtitle1">KES 1500</Typography>
                                </>
                            }
                            />
                            <CardContent style={{padding:"0 16px 0 16px"}}>
                            <Typography variant="body2" className={classes.desc} component="p">
                                {text}
                            </Typography>
                            <Grid style={{margin:"2px 5px 2px 0"}} container spacing={2} justify="space-between" alignItems="center">
                            <Typography variant="body2" className={classes.info} component="p">
                                3 hours | Kenya
                            </Typography>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:"nowrap",gap:"5px"}}>
                                <span className={classes.info}>4/</span>
                                <span className={classes.info}>5</span>
                                <span className={classes.info}>
                                    <ReactStars
                                        count={5}
                                        size={10}
                                        activeColor="#e71575"
                                    />
                                </span>
                                <span className={classes.info}>(202)</span>
                            </div>
                            </Grid>
                            </CardContent>
                            <CardActions style={{padding:"8px 8px 8px 16px"}}>
                            <Grid style={{padding:"10px 12px"}} container spacing={3} alignItems="flex-start" wrap="nowrap" justifyContent="flex-start" direction="row">
                                <Avatar style={{marginRight:"5px"}} alt="host name" src={img} />
                                <Grid container alignItems="flex-start" direction="column" >
                                    <Typography style={{color:"rgb(143, 142, 135)",fontSize:".7rem"}}>Hosted by</Typography>
                                    <Typography style={{fontSize:".7rem"}}>Lorgan</Typography>
                                </Grid>
                            </Grid>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                    </div>
                ))
            }
        </div>
                )
            }
        </div>
        <Grid item className={classes.hr}>
            <hr className={classes.hrr} />
        </Grid>
        <footer style={{background:"#faf3f3",padding:"3rem"}}>
            <Grid container className={classes.footer}>
                        <Grid item >
                            <Link style={{textDecoration:"none",textAlign:"center"}} to="/about">
                            <Typography className={classes.footerTextHeader} variant="subtitle1">About us</Typography>
                            </Link>
                        </Grid>
                        <Grid item >
                            <a style={{color:"black",textDecoration:"none",textAlign:"center"}} href="mailto:briankyole10@gmail.com">
                                <Typography className={classes.footerText} variant="subtitle1">Reach us</Typography>
                            </a>
                        </Grid>
                        <Grid style={{marginTop:"2rem",marginBottom:"2rem"}} container alignItems="center" gap={2} spacing={2} justify="center" direction="row" wrap="wrap">
                            <Grid item>
                                <a className={classes.callToAction} style={{textDecoration:"none",color:"white",textAlign:"center",padding:"1rem"}} href="/experience">Book Experience</a>
                            </Grid>
                            <Grid item>
                                <a className={classes.lastCallToAction} style={{textDecoration:"none",color:"white",textAlign:"center",padding:"1rem"}} href="/book">Host An Experience</a>
                            </Grid>
                        </Grid>
            </Grid>
                <hr style={{width:'50%',border:'0',backgroundImage:'linear-gradient(to right, #AA076B, #61045F)',height:'1px'}} />
            <Grid container alignItems="center" direction="column" >
                <Grid container direction="row" alignItems="center" justify="center">
                    <Grid item>
                        <FacebookIcon className={classes.socialIcons} size="medium" />
                    </Grid>
                    <Grid item>
                        <TwitterIcon className={classes.socialIcons} size="medium" />
                    </Grid>
                    <Grid item>
                        <InstagramIcon className={classes.socialIcons} size="medium" />
                    </Grid>
                </Grid>
                <Grid item>
                <Typography style={{color:"#000",fontSize:".95rem"}} variant="subtitle2">© HostGuest {new Date().getFullYear()}</Typography>
            </Grid>
            </Grid>
        </footer>
        </>
    )
}