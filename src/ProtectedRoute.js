import React from 'react';
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Dashboard from "./components/Dashboard";

export const ProtectedRoute = ({ components: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      Auth.isAuthenticated === true
        ? <Dashboard {...props} />
        : <Redirect to='/login' />
    )} />
  )