import React from "react";
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export default function Router (){
    return (
    <Switch>
        <Route exact path="/experiences" component={Home} />
        <Route path='/404' component={NotFound} />
        <Redirect from="/" to="/experiences" />
    </Switch>
    )
}