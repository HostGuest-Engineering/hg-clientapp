// import React from "react";
// import {Route,withRouter} from "react-router-dom";
// import PropTypes from "prop-types";
// import {useDispatch,useSelector} from "react-redux";
// import CircularProgress from '@material-ui/core/CircularProgress'
// import client from "../apollo/client";
// import {USER_DETAILS} from "../graphql/mutations/auth";
// import {errorHandler} from "../redux/actions/authAction";


// function AuthenticatedRoute({component:Component,path}){
//     const dispatch = useDispatch();
//     const state = useSelector(state=>state.authReducer);
//     console.log(state)

//     return (

//         <Route path={path}>
//             {
//                 state.isAuthenticated ? (
//                     <Component />
//                 ):(
//                     <p>Please login to proceed</p>
//                 )
//             }
//         </Route>
//     )
// }

// AuthenticatedRoute.propTypes = {
//     Component:PropTypes.any,
//     path:PropTypes.string

// }
// export default withRouter(AuthenticatedRoute);