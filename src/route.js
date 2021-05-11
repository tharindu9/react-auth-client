import React from 'react';
import { BrowserRouter as Router, Link , Switch,Route} from "react-router-dom";

import Login from "./components/login.component";
import Register from "./components/register.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import Profile from "./components/profile.component";
import Home from "./components/home.component";


const routes = (
      <Router>
          <Switch>
                <Route exact path={["/"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/admin" component={BoardAdmin} />
          </Switch>
      </Router>
  )

export default routes;
