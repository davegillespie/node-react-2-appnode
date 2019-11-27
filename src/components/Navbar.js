import React, { Component, Fragment } from 'react'
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
        <a className="navbar-brand" href="/" style={{color:'orange',fontWeight:'bold'}}>OWL</a>

        <div id="navbarBasicExample" className="navbar-menu">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            {this.props.auth.isAuthenticated && this.props.auth.user && (
                <li>
                  Hello {this.props.auth.user.username}
                </li>
              )} 
                 
                {!this.props.auth.isAuthenticated && (
                  <Fragment>
                    <li>
                      <Link className="btn btn-info" to="/register">Register</Link>
                    </li>
                    <li>
                      <Link className="btn btn-info" to="/login" className="btn btn-info">Log in</Link>
                    </li>
                  </Fragment>
                )}
                {this.props.auth.isAuthenticated && (
                  <li>
                    <Link className="btn btn-info" to="/" onClick={this.handleLogOut}>Log out</Link> 
                  </li>
                  )}
             
             </ul>
          </div>
        </div>
      </nav>
    )
  }
}