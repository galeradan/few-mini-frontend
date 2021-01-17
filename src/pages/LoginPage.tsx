import { notify } from "components/notifications/Toast";
import { initialState, UserContext } from "contexts/UserContext";
import { useLoginMutation } from "generated/graphql";
import { checkToken, setAccessToken } from "helper/accessToken";
import React, { useState, useEffect, useContext } from "react";

import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);

  // handles user context based on availability of token
  useEffect(() => {
    if (!checkToken()) {
      setUser(initialState.user);
    }
  }, [setUser]);

  // function that handles login mutation
  const loginAccount = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    login({
      variables: {
        username,
        password,
      },
      refetchQueries: ["Blogs", "Me"],
    })
      .then((res) => {
        if (res && res.data) {
          setIsLoading(false);
          if (!res.data.login.error) {
            setAccessToken(res.data.login.accessToken || "");
            setUser(res.data.login.user || initialState.user);
            notify("Login Successful", "notify-success");
            history.push("/");
          } else {
            const errors = res.data.login.error;
            notify(errors[0].message, "notify-error");
          }
        }
      })
      .catch(() => {
        setIsLoading(false);
        Swal.fire("Something went wrong", "Please try again", "error");
      });
  };

  return (
    <>
      <div className="container">
        <div className="row m-0 justify-content-center">
          <div className="col-md-5 custom-form">
            <div className="form-title">
              <>
                <h3 className="m-0">Welcome</h3>
                <small>Login your account here</small>
              </>
            </div>
            <small className="d-inline-block mb-3 text-muted few-sub-title">
              Don&apos;t have an account?{" "}
              <Link to="/register">Register here</Link>
            </small>
            <Form onSubmit={loginAccount} className="few-form-group">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button type="submit" className="few-btn">
                {isLoading ? (
                  <ReactLoading
                    type="balls"
                    className="few-loader"
                    height="100%"
                    width="15px"
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
