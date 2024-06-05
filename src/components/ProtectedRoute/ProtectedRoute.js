import React from "react";
import { Route } from "react-router-dom";
// work on later
export const ProtectedRoute = ({ loggedIn, children, redirect, ...props }) => {
  return <Route {...props}>{loggedIn ? children : redirect()}</Route>;
};
