import { checkToken } from "helper/accessToken";
import React from "react";

import { Redirect, Route, RouteProps } from "react-router-dom";
// handles authenticated routes
const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        checkToken() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default ProtectedRoute;
