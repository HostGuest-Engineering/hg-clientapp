import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import Rating from "react-rating";
import TinySlider from "tiny-slider-react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'; 
import {HGButton} from "../components/Button";
import image1 from "../components/Assets/image1.jpg";
import dummyExperiences from "../data";

const useStyles = makeStyles(theme=>({
    main:{
        display:"grid",
        gridTemplateColumns:"50% 50%",
        gitdTemplateRow:"1fr",
        heigth:"100%",
        [theme.breakpoints.down('sm')]:{
            gridTemplateColumns:"300px",
        },
        padding:theme.spacing(5),
        gridGap:"5%",
    },
    root:{
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    },
    textSpacing:{
        margin:theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
        },
        color:"#4a4a4a"
    },
    upcoming:{
        color:"#4a4a4a",
        fontSize:"2rem"
    },
    top:{
        color:"#4a4a4a",
        fontSize:"2rem",
        marginBottom:theme.spacing(2)
    },
    homeCarousel:{
       display:"grid",
       gridTemplateColumns:"3% 90% 3%",
       gridTemplateRows:"minmax(300px,1fr)",
       placeItems:"center",
       overflowX:"hidden",
       padding:theme.spacing(5),
    },
    carouselIcon:{
        color:"#e71575",
        borderColor:"#e71575",
        backgroundColor:"#fff",
        padding:theme.spacing(1),
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        '&:hover':{
            backgroundColor:"white"
        }
    },
    mainCarouselSec:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
        [theme.breakpoints.down('sm')]:{
            alignItems:'flex-start',
            justifyContent:"space-between",
            flexDirection:"column",
            flexWrap:'nowrap',
            overflowX:"hidden"
        },
        padding:theme.spacing(3),
        overflowX:"hidden"
    },
    carouselCard:{
        margin:theme.spacing(2),
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    },
    handleTop5:{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        gap:"10%",
        marginTop:theme.spacing(2),
        padding:theme.spacing(5),
        overflowX:"hidden"
    },
    top5:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
        gridGap:"20px",
        gridTemplateRows:"minmax(300px,1fr)",
        [theme.breakpoints.down('sm')]:{
            gridTemplateColumns:"1fr",
            gridTemplateRows:"300px",
        }
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
       marginTop: theme.spacing(4),
       marginLeft:theme.spacing(2),
       textDecoration:"none",
       [theme.breakpoints.down('sm')]:{
           marginTop: theme.spacing(2),
           marginLeft: theme.spacing(1)
       }
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
        justifyContent:"space-between",
        alignItems:"flex-start",
        [theme.breakpoints.down('sm')]:{
            justifyContent:"space-between",
            alignItems:"flex-start",
            flexDirection:"column"
        },
        marginBottom:0,
        padding:"10px 40px 10px 40px",
        // backgroundColor:"#eee"
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
        // lineHeight:"1em"
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
        paddingLeft:theme.spacing(5),
        paddingRight:theme.spacing(5),
        height:"1px"
    },
    item:{
        padding:"0"
    },explore:{
        marginLeft:theme.spacing(2)
    },hrr:{
        color:"#bfbfbe",
        backgroundColor:"#bfbfbe"
    }
}));

const settings = {
  lazyload: true,
  nav: false,
  items:1,
  autoplay: false,
  mouseDrag: true,
  slideBy:'page',
  responsive: {
    411:{
      items:1,
    },
    640: {
      items: 1
    },
    1000: {
      items: 3
    },
    1400: {
      items: 3
    }
  },
  controls:false,
  rewind: true,
};

export default function Home(){
    const classes = useStyles();
    let ts = React.useRef();
    const onGoTo = dir => ts.slider.goTo(dir);
    return (
        <>
        <div className={classes.main}>
        <Grid container spacing={2} alignItems="flex-start">
            <Grid item lg={12} xl={12} sm={12} xs={12}>
                <Grid container direction="column" alignItems="flex-start">
                    <Typography style={{marginTop:"3rem"}} className={classes.textSpacing} variant="h3">
                        HostGuest Experiences
                    </Typography>
                    <Typography className={classes.textSpacing} variant="subtitle1">
                        Lorem Ipsum is a dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a 
                        sheets containing Lorem Ipsum passages, 
                    </Typography>
                    <Link className={classes.btn} to="/about">
                        <HGButton text="About HostGuest" />
                    </Link>
                </Grid>
            </Grid>
        </Grid>
        <Grid className={classes.imgContainer} container spacing={2} alignItems="flex-start">
            <Grid item lg={12} xl={12} sm={12} xs={12}>
                <img className={classes.img} src={image1} alt="people having fun" />
            </Grid>
        </Grid>
        </div>
         {/* Beginining of experiences section */}
        <Grid container className={classes.mainCarouselSec} spacing={2}>
            <Grid item>
                <Typography className={classes.upcoming} variant="h3">
                    All Upcoming Experiences
                </Typography>
            </Grid>
            <Grid container className={classes.homeCarousel}>
                <Grid item >
                <IconButton onClick={() =>onGoTo('prev')} style={{zIndex:"1"}} aria-label="prev" className={classes.carouselIcon} size="small">
                    <ChevronLeftIcon fontSize="inherit" />
                </IconButton>
                </Grid>
                <TinySlider settings={settings} ref={tsi => ts = tsi}>
                    {
                        dummyExperiences.map(({img,text,title})=>(
                            <Card style={{maxWidth:"340px"}} className={classes.carouselCard} key={img}>
                            <CardHeader
                                title={title}
                            />
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={img}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography variant="body2" className={classes.desc} component="p">
                                        {text}
                                    </Typography>
                                    <Typography variant="body2" className={classes.info} component="p">
                                        From KES 1500 / person | 3 hours | Kenya
                                    </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <div><HGButton text="Explore" /></div>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        ))
                    }
                </TinySlider>
                <Grid item >
                <IconButton onClick={() => onGoTo('next')} style={{zIndex:"1"}} aria-label="next" className={classes.carouselIcon} size="small">
                    <ChevronRightIcon fontSize="inherit" />
                </IconButton>
                </Grid>
                </Grid>
        </Grid>

        {/* Top 5 Experiences */}
        <div className={classes.handleTop5}>
            <Grid item>
                <Typography className={classes.top} variant="h3">
                    Top Experiences
                </Typography>
            </Grid>
        <div className={classes.top5}>
            {
                dummyExperiences.map(({img,text,title})=>(
                    <Card key={img} className={classes.root}>
                    <CardHeader
                        title={title}
                    />
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={img}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography variant="body2" className={classes.desc} component="p">
                                {text}
                            </Typography>
                            <Typography variant="body2" className={classes.info} component="p">
                                From KES 1500 / person | 3 hours | Kenya
                            </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Rating emptySymbol={
                                <IconButton className={classes.margin} size="small">
                                    <StarOutlineIcon style={{color:"#e71575"}} fontSize="small" />
                                </IconButton>
                                } fullSymbol={
                                <IconButton className={classes.margin} size="small">
                                    <StarIcon fontSize="small" style={{color:"#e71575"}} />
                                </IconButton>
                                } initialRating={3}/>
                                |30
                                <div className={classes.explore}><HGButton text="Explore" /></div>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                ))
            }
        </div>
        </div>
        <Grid item className={classes.hr}>
            <hr className={classes.hrr} />
        </Grid>
        <footer>
            <Grid container className={classes.footer}>
                <Grid item style={{padding:"0"}} className={classes.item}>
                    <Grid container spacing={2} className={classes.footerContent}>
                        <Grid  item className={classes.item}>
                            <Typography className={classes.footerTextHeader} variant="subtitle1">Contact Us</Typography>
                        </Grid>
                        <Grid  item className={classes.item}>
                            <Typography className={classes.footerText} variant="subtitle1">Phone : +254719509732</Typography>
                        </Grid>
                        <Grid  item className={classes.item}>
                            <Typography className={classes.footerText} variant="subtitle1">Email : briankyole10@gmail.com</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.item}>
                    <Grid container spacing={2} className={classes.footerContent}>
                        <Grid item className={classes.item}>
                            <Typography className={classes.footerTextHeader} variant="subtitle1">About HostGuest</Typography>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link style={{textDecoration:"none"}} to="/about">
                                <Typography className={classes.footerText} variant="subtitle1">Our Story</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.item}>
                    <Grid container spacing={2} className={classes.footerContent}>
                        <Grid item className={classes.item}>
                            <Typography className={classes.footerTextHeader} variant="subtitle1">Host</Typography>
                        </Grid>
                        <Grid item className={classes.item}>
                            <Link style={{textDecoration:"none"}} to="/about">
                                <Typography className={classes.footerText} variant="subtitle1">Host an Online Experience</Typography>
                            </Link>
                            <Link style={{textDecoration:"none"}} to="/about">
                                <Typography className={classes.footerText} variant="subtitle1">Host an Experience</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={2} className={classes.footerContent}>
                        <Grid item className={classes.item}>
                            <Typography className={classes.footerTextHeader} variant="subtitle1">Social Media</Typography>
                        </Grid>
                        <Grid container className={classes.media}>
                            <Grid item  className={classes.item}>
                                <IconButton className={classes.margin} size="small">
                                    <FacebookIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                            <Grid item  className={classes.item}>
                                <IconButton className={classes.margin} size="small">
                                    <TwitterIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                            <Grid item  className={classes.item}>
                                <IconButton className={classes.margin} size="small">
                                    <InstagramIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>

        <Grid item className={classes.hr}>
            <hr className={classes.hrr}  />
        </Grid>

        <Grid className={classes.last} container alignItems="center" justify="center">
            <Grid item>
                <Typography style={{color:"#000",fontSize:".95rem"}} variant="subtitle2">© HostGuest {new Date().getFullYear()}</Typography>
            </Grid>
        </Grid>
        </>
    )
}