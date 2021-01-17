import { checkToken } from "helper/accessToken";
import React from "react";

import { Redirect, Route, RouteProps } from "react-router-dom";
// handles route for non authenticated user
const GuessRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        !checkToken() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default GuessRoute;
