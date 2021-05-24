import {Route,withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import client from "../apollo/client";
import {USER_DETAILS} from "../graphql/mutations/auth";
import {errorHandler} from "../redux/actions/authAction";


const AuthenticatedRoute =(props)=>{
    // const dispatch = useDispatch();
    // let variables = {};
    // let data;
    // try{
    //     data = await client.request(USER_DETAILS, variables);
    // } catch (e) {
    //     dispatch(errorHandler("You need to be logged in", true, "warning"))
    // }

    // const redirectToLoginPage = ()=>{
    //     dispatch(errorHandler("You need to be logged in",true,"warning"))
    //     //return <Redirect to="/experiences"/>
    // }
    return (

        <Route 
            path={props.path}
            component={props.Component}
            // render={() =>{
            //      data ?
            //         (<props.Component 
            //             data={data}
                        
            //         />)
            //         :(redirectToLoginPage())
            // }}
        />
    )
}

AuthenticatedRoute.propTypes = {
    Component:PropTypes.any.isRequired,

}
export default withRouter(AuthenticatedRoute);