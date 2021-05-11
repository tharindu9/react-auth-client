import React, { Component } from "react";
import { connect } from "react-redux";

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/nav-bar.component";
import Sidebar from "./components/left-nav.component";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import Profile from "./components/profile.component";
import Home from "./components/home.component";
import routs from "./route"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser : user,
      });
    }
  }

  render() {
    const {currentUser} = this.state;
    return (
      <>
        <NavBar />
        {/* {currentUser ? ( 
          <Sidebar /> 
        ) : (
          <></>
        )} */}
    </>

    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(App);