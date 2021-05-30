import React from 'react';
import {makeStyles,useTheme } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch,useSelector} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import pink from "../../components/Assets/pink.png";
import {authAction,isAuthenticated} from "../../redux/actions/authAction";
import {LOG_OUT} from "../../graphql/mutations/auth";
import client from "../../apollo/client";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems:"center",
      justifyContent:"center"
    },
    marginLeft:"34px",
  },
  imgs:{
    height:"40px",
    width:"40px"
  },
  btn: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginRight: theme.spacing(5),
      textDecoration: "none",
      color: "white",
      borderRadius: "50px",
      height: "auto",
      width: "auto",
      padding: "1rem",
      backgroundColor: "#e71575",
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      color: "#e71575",
      textDecoration: "none",
    }
  },
  body:{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      position:"absolute",
      top:"20px",
      width:"100vw",
      backgroundColor:"transparent",
      background:"transparent",
      padding:theme.spacing(2),
      [theme.breakpoints.down('sm')]:{
        width:"100%",
        overflowX:"hidden",
        backgroundColor:"#transparent",
        position:"absolute"
      },
      overflow:'hidden',
      zIndex:"1000"
  },
  search: {
    position: 'relative',
    borderRadius: "50px",
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    color:"black",
    marginLeft: 0,
    border:"1px #f73378 solid",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:"#000"
  },
  inputRoot: {
    color: 'inherit',
    padding:".6rem",
    width:"300px",
    [theme.breakpoints.down('sm')]:{
      width:"auto",
      padding:"0"
    }
  },
  hg:{
    color:"white",
    fontWeight:"500",
    fontSize:"1.5rem"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  auth:{
    display:'none',
    [theme.breakpoints.up('sm')]:{
      display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '5%',
        justifyContent: 'center',
        marginRight:theme.spacing(5),
        width:"150px"
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '5%',
      justifyContent: 'center',
      width: "100px"
    }
  },
  authBtn:{
    display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      textDecoration: "none",
      cursor:'pointer',
      fontSize:'1rem',
      color:"#fff",
      fontWeight:"600",
      textAlign:'center',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        color: "#e71575",
      }
  },
  avatar:{
     display: 'none',
       [theme.breakpoints.up('sm')]: {
         display: 'block',
       },
       marginRight:theme.spacing(5)
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const handleOpen = (val)=>{
    // dispatch(changeIndex(parseInt(val)));
    dispatch(authAction(true));
  }
  const state = useSelector(state=>state.authReducer);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut=()=>{
    try{
      const variables = {};
      const response = client.request(LOG_OUT,variables);
      if(response){
        dispatch(authAction(true));
        dispatch(isAuthenticated(false));
      }
    }
    catch(e){
      console.log(e)
    }
  }
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link className={classes.btn} to="/become-a-host">Become a Host</Link>
        {/* <a className={classes.btn} href="/about">Host An Experience</a> */}
      </MenuItem>
      <MenuItem>
        {
              state.isAuthenticated ? (
                <div>
                   <p className={classes.authBtn} onClick={handleLogOut}>Log Out</p>
                </div>
              ):(
                <div className={classes.auth}>
                   <p className={classes.authBtn} onClick={handleOpen}>Log In</p>
                   <p className={classes.authBtn} onClick={handleOpen}>Sign Up</p>
                </div>
              )
            }
      </MenuItem>
    </Menu>
  );

  return (
    <div style={{backgroundColor:"transparent"}}>
        <div className={classes.body}>
          <div className={classes.title}>
            <img className={classes.imgs} src={pink} alt="Host Guest" />
            <Typography className={classes.hg} variant="h6">HostGuest</Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {!matches && (
            <>
            {/* <a className={classes.btn} href="/about">Host An Experience</a> */}
            <Link className={classes.btn} to="/become-a-host">Become a Host</Link>
            {
              state.isAuthenticated ? (
                <div>
                   <p className={classes.authBtn} onClick={handleLogOut}>Log Out</p>
                </div>
              ):(
                <div className={classes.auth}>
                   <p className={classes.authBtn} onClick={handleOpen}>Log In</p>
                   <p className={classes.authBtn} onClick={handleOpen}>Sign Up</p>
                </div>
              )
            }
            {
              state.isAuthenticated && (
                <Avatar className={classes.avatar} alt={state.userDetails.name}>
                  {state.userDetails.name}
                </Avatar>
              )
            }
            </>
            )
            }
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{color:'white',marginRight:'2rem',fontWeight:'600',fontSize:'1.4rem'}} />
            </IconButton>
          </div>
        </div>
      {renderMobileMenu}
    </div>
  );
}