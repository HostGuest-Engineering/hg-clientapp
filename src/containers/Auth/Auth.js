import React from "react";
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {useDispatch,useSelector} from "react-redux";
import { withStyles,useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {authAction} from "../../redux/actions/authAction";
import LoginPage from "../../pages/Login";
import SignUpPage from "../../pages/Signup";

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     backgroundColor: '#ffffff',
//   },
// });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// const DialogTitle = withStyles(styles)((props) => {
//   const { classes, onClose } = props;
//   return onClose ? (
//     <Fab aria-label="close" className={classes.closeButton} onClick={onClose}>
//       <CloseIcon style={{ color: '#f88d2a' }} />
//     </Fab>
//   ) : null;
// });

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#f2f2f2',
  },
}))(MuiDialogContent);

const AuthPage = ()=>{
    const dispatch = useDispatch();
    const open = useSelector(state=>state.authReducer.openAuthModal);
    // const changeIndex = useSelector(state=>state.authReducer.changeIndex);
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleChangeIndex = (index) => {
    //     setValue(index);
    // };
    const handleClose=()=>{
        dispatch(authAction(false));
    }
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogContent>
            <div>
            <AppBar position="static" color="default">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="SignUp" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <LoginPage />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <SignUpPage />
                </TabPanel>
            </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthPage;