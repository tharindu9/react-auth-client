import React , { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BoardAdmin from "./board-admin.component";
import CreateJob from "./job/create-job.component"
import '../style/left-nav.css'
import { history } from '../helpers/history';


import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class LeftNav extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
      isAdmin : false,
      isUser : false
    };

  }

  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        currentUser : user,
        isUser: user.roles.includes("ROLE_EMPLOYEE"),
        isAdmin: user.roles.includes("ROLE_ADMIN"),

      });
    }
  }
  render() {
    const { currentUser,isAdmin , isUser } = this.state; 
    return (
      <Router history = {history}>
      <ProSidebar>
      <Menu>
        <MenuItem >Dashboard <Link to="/profile"></Link></MenuItem>
        <SubMenu title="Jobs">
          <MenuItem>Create Job <Link to="/createJob"></Link> </MenuItem>
          <MenuItem>View Jobs</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
    <Switch>
          <Route exact path="/createJob" component={CreateJob} />
          <Route path="/admin" component={BoardAdmin} />
   </Switch> 
    </Router>
        
    );
    }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(LeftNav);