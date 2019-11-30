import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from './module/form';
import List from './module/list';
import Edit from './module/edit';
import CarrierEdit from './module/carrierEdit';
import CarrierForm from './module/carrierForm';
import ShipmentList from './module/shipmentList';
import DispatchList from './module/dispatchList';
import CarrierList from './module/carrierList';
import Sidebar from './components/Sidebar';
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
         <Sidebar />

            <div class="container py-4 max-width">
              <div class="row">
              <Switch>
                <Route path="/list" render={(props) => <List {...props} module={authProps} />} />
                <Route path="/form" render={(props) => <Form {...props} module={authProps} />} />
                <Route path="/edit/:id" render={(props) => <Edit {...props} module={authProps} />} />
                <Route path="/carrier-edit/:id" render={(props) => <CarrierEdit {...props} module={authProps} />} />
                <Route path="/carrier-form" render={(props) => <CarrierForm {...props} module={authProps} />} />

                <Route path="/shipment-list" render={(props) => <ShipmentList {...props} module={authProps} />} />
                <Route path="/dispatch-list" render={(props) => <DispatchList {...props} module={authProps} />} />
                <Route path="/carrier-list" render={(props) => <CarrierList {...props} module={authProps} />} />

                <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
                <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />
                <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
                <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
                <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
                <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
                <Route exact path="/changepasswordconfirm" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
                <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />} />
              
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