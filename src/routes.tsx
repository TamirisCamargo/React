import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./private.routes";

import Home from "./views/Home";
import Courses from "./views/Courses";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Dashbord from "./views/Dash";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoutes path="/dashboard" exact component={Dashbord} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;
