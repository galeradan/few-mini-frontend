import { notify } from "components/notifications/Toast";
import { useRegisterMutation } from "generated/graphql";
import { checkToken, removeToken } from "helper/accessToken";
import React, { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [register] = useRegisterMutation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(checkToken());
  }, []);

  const loginAccount = (e: any) => {
    e.preventDefault();
    let role = "";
    if (isAdmin) {
      role = "admin";
    } else {
      role = "member";
    }
    if (password === confirmPassword) {
      register({
        variables: {
          username,
          password,
          role,
        },
      })
        .then((res) => {
          if (res && res.data) {
            if (!res.data.register.error) {
              history.push("/login");
            } else {
              const errors = res.data.register.error;
              notify(errors[0].message);
            }
          }
        })
        .catch(() => {
          Swal.fire("Something went wrong", "Please try again", "error");
        });
    } else {
      notify("Passwords doesn't match");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-0 justify-content-center">
          <div className="col-md-5 custom-form">
            <div className="form-title">
              {!isLoggedIn ? (
                <>
                  <h3 className="m-0">Welcome</h3>
                  <small>Register your account here</small>
                </>
              ) : (
                <>
                  <h3 className="m-0">Welcome Back</h3>
                  <small>It seems you are already logged in</small>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => removeToken()}
                  >
                    Logout?
                  </Button>
                </>
              )}
            </div>
            {!isLoggedIn && (
              <Form onSubmit={loginAccount}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
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
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Admin? uncheck if member"
                    checked={isAdmin}
                    onChange={() => {
                      setIsAdmin(!isAdmin);
                    }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
