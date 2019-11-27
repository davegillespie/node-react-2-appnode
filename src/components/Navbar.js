import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';


export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation" aria-label="main navigation">
        <a class="navbar-brand" href="/" style={{color:'orange',fontWeight:'bold'}}>OWL</a>

        <div id="navbarBasicExample" className="navbar-menu">
        
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="btn btn-info" to="/"> Order List </Link>
              </li>
              </ul>
            <Link class="btn btn-info "  to="/form">Add Order</Link>
          

          
            
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}              
              
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="btn btn-info">
                      Register
                    </a>
                    <a href="/login" className="btn btn-info">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                   <a href="/" onClick={this.handleLogOut} className="button is-light">
                      Log out
                    </a>
                  )}
             
           
          </div>
        </div>
      </nav>
    )
  }
}