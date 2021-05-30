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
        <Route exact path="/" component={Home} />
        <Route path='/become-a-host' component={BecomeAHost} />
        <Route path="/create-an-experience" component={DefaultStepperContainer} />
        <Route path='/404' component={NotFound} />
        <Redirect from="*" to="/404" />
    </Switch>
    )
}