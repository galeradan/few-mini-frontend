import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "assets/sass/global.scss";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import AppNavBar from "components/navigation/AppNavBar";
import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "helper/accessToken";
import ProtectedRoute from "routes/ProtectedRoute";
import RegisterPage from "pages/RegisterPage";
import Moment from "react-moment";
import "moment-timezone";

Moment.globalTimezone = "Asia/Manila";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const accessToken = getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: "include",
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <AppNavBar />
          <main className="main">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <ProtectedRoute path="/" component={HomePage} />
            </Switch>
          </main>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
