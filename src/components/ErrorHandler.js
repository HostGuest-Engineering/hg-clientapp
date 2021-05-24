import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useSelector,useDispatch} from "react-redux";
import {errorHandler} from "../redux/actions/authAction";


export default function ErrorHandler(){
    const error = useSelector(state=>state.authReducer);
    const dispatch = useDispatch();
    const handleAlertClose = () => {
        dispatch(errorHandler("",false,""));
    };
    return (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={error.open}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <MuiAlert onClose={handleAlertClose} elevation={6} severity={error.severity} variant="filled">
              {error.message}
          </MuiAlert>
        </Snackbar>
    )
}