import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid pt-3">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Redirect from="/" to="/login" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
