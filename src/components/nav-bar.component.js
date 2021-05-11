import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link , Switch,Route} from "react-router-dom";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import { history } from '../helpers/history';
import Login from "./login.component";
import Register from "./register.component";
import BoardUser from "./board-user.component";
import BoardAdmin from "./board-admin.component";
import Profile from "./profile.component";
import Home from "./home.component";
import CreateJobs from "./job/create-job.component";
import JobsList from "./job/view-jobs.component"

class NavBar extends Component {
    constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
  
      this.state = {
        showEmployerBoard: false,
        showAdminBoard: false,
        showUserDashBord : false,
        currentUser: undefined,
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
            showUserDashBord: user.roles.includes("ROLE_EMPLOYEE"),
            showModeratorBoard: user.roles.includes("ROLE_EMPLOYER"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
      }
    
      logOut() {
        this.props.dispatch(logout());
      }
      render() {
        const { currentUser, showEmployerBoard, showAdminBoard , showUserDashBord } = this.state;
        console.log("admin : " , showAdminBoard)
        return (
          <>
           <Router history={history}> 
            <div>
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                  Quick Jobs
                </Link>
                <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                      Home
                    </Link>
                  </li>
    
                  {showEmployerBoard && (
                    <li className="nav-item">
                      <Link to={"employer"} className="nav-link">
                        Employers
                      </Link>
                    </li>
                  )}
    
                  {showAdminBoard && (
                    <>
                    <li className="nav-item">
                      <Link to={"/admin"} className="nav-link">
                        Admin
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/jobs/create"} className="nav-link">
                      Jobs
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/jobs/all"} className="nav-link">
                      Job List
                    </Link>
                    </li>
                  </>
                  )}
    
                  {showUserDashBord && (
                    <li className="nav-item">
                      <Link to={"/user"} className="nav-link">
                        User
                      </Link>
                    </li>
                  )}
                </div>
    
                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={this.logOut}>
                        LogOut
                      </a>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Login
                      </Link>
                    </li>
    
                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                  </div>
                )}
              </nav>
               <Switch>
                  <Route exact path={["/"]} component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/profile" component={Profile} />
                  <Route path="/user" component={BoardUser} />
                  <Route path="/admin" component={BoardAdmin} />
                  <Route path = "/jobs/create" component = {CreateJobs} />
                  <Route path = "/jobs/all" component = {JobsList} />

                </Switch> 
            </div>
          </Router>
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
    
    export default connect(mapStateToProps)(NavBar);