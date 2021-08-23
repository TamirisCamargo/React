import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;

//export default function 