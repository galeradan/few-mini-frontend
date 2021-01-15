import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "assets/sass/global.scss";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import AppNavBar from "components/navigation/AppNavBar";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <AppNavBar />
          <main className="main">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </main>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
