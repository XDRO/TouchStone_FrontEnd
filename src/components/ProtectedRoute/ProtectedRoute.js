import React from "react";
import { Route, Redirect } from "react-router-dom";
// work on later
export const ProtectedRoute = ({ loggedIn, children, ...props }) => {
  return (
    <Route {...props}>{loggedIn ? children : <Redirect to="/login" />}</Route>
  );
};
