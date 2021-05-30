// import {withRouter} from "react-router-dom";
// import {useSelector,useDispatch} from "react-redux";
// import {isAuthenticated} from "../redux/actions/authAction";
// import client from "../apollo/client";
// import {USER_DETAILS} from "../graphql/mutations/auth";

// const VerifyUser = ({history}) => {
//         const state = useSelector(state=>state.authReducer)
//         const dispatch = useDispatch();
//         console.log(history)
//         history.listen(async() => { 
            
//              function checkAuth(){
//                 let data;
//                 try {
//                     let variables = {}
//                     data =  client.request(USER_DETAILS, variables);
                    
//                 } catch (e) {
//                     data = null;
//                 }
//                 return data;
//             }
//             let res = checkAuth();
//             console.log(res)
//             if(res){
//                 dispatch(isAuthenticated(true))
//             }else{
//                 dispatch(isAuthenticated(false))
//             }
//         })
//     return null;
// }

// const VerifyUserInformation = withRouter(VerifyUser);

// export default VerifyUserInformation;