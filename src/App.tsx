import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "assets/sass/global.scss";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import AppNavBar from "components/navigation/AppNavBar";
import ProtectedRoute from "routes/ProtectedRoute";
import RegisterPage from "pages/RegisterPage";
import Moment from "react-moment";
import "moment-timezone";
import { initialState, UserContext } from "contexts/UserContext";
import { useMeLazyQuery, User } from "generated/graphql";
import { checkToken } from "helper/accessToken";

Moment.globalTimezone = "Asia/Manila";

function App() {
  const [user, setUser] = useState<User>({
    id: "",
    username: "",
    role: "",
  });

  const [getUser, { data }] = useMeLazyQuery();

  useEffect(() => {
    if (checkToken()) {
      getUser();
    }
  }, [user, getUser]);

  useEffect(() => {
    setUser(data?.me || initialState.user);
  }, [data?.me]);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <AppNavBar />
          <main className="main">
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <ProtectedRoute path="/" component={HomePage} />
            </Switch>
          </main>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
