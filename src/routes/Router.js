import React from "react";
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthenticatedRoute from "./AuthenticatedRoute";
import BecomeAHost from "../pages/BecomeAHost"

export default function Router (){
    return (
    <Switch>
        <Route exact path="/experiences" component={Home} />
        {/* <Route path="/become-a-host" component={BecomeAHost} /> */}
        <AuthenticatedRoute exact path="/become-a-host" Component={BecomeAHost} />
        <Route path='/404' component={NotFound} />
        <Redirect from="/" to="/experiences" />
    </Switch>
    )
}