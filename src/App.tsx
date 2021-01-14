import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "assets/sass/global.scss";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import AppNavBar from "components/navigation/AppNavBar";

function App() {
  return (
    <>
      <Router>
        <AppNavBar />
        <main className="main">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
