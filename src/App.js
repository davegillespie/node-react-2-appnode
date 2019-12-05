import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';

import { Auth } from 'aws-amplify';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Dashboard from "./components/Dashboard";

class App extends Component  {

  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

async componentDidMount() {
  try {
    const session = await Auth.currentSession();
    this.setAuthStatus(true);
    console.log(session);
    const user = await Auth.currentAuthenticatedUser();
    this.setUser(user);
  }catch(error) {
    console.log(error);
  }
  this.setState({ isAuthenticating: false});
}

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

  return (
    !this.state.isAuthenticating &&
    <Router>
      <div className="App">
        
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/" style={{color:'orange',fontWeight:'bold'}}>OWL</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/"> Order List </Link>
              </li>
            </ul>
            <Link class="btn btn-info "  to="/form">Add Order</Link>
          </div>
        </nav> */}
        <Navbar auth={authProps}/>
        <div className="app-side">
          
        <Route path="/app" render={(props) => (this.state.isAuthenticated === true ? <Dashboard {...props} /> : <Redirect to='/login' />)} />
            <div class="container py-4 max-width">
              <div class="row">
              
              <Switch>
               
                <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
                <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />
                <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
                <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
                <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
                <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
                <Route exact path="/changepasswordconfirm" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
                <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />} />
              
                {/* <Route exact path="*" component={() => "404 NOT FOUND"} /> */}
              </Switch>
              </div>
            </div>

        </div>

      </div>
    </Router>
    );
  }
}

export default App;