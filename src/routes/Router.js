import React from "react";
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthenticatedRoute from "./AuthenticatedRoute";
import BecomeAHost from "../pages/BecomeAHost";
import DefaultStepperContainer from "../containers/StepContainers/DefaultStepperContainer";

export default function Router (){
    return (
    <Switch>
        <Route exact path="/experiences" component={Home} />
        <AuthenticatedRoute path="/become-a-host" Component={BecomeAHost} />
        <AuthenticatedRoute path="/create-an-experience" Component={DefaultStepperContainer} />
        <Route path='/404' component={NotFound} />
        <Redirect from="/" to="/experiences" />
    </Switch>
    )
}