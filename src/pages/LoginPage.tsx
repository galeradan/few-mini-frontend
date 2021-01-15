import { useLoginMutation } from "generated/graphql";
import { checkToken, setAccessToken } from "helper/accessToken";
import React, { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(checkToken());
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  const loginAccount = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        username,
        password,
      },
      refetchQueries: ["Blogs", "Me"],
    })
      .then((res) => {
        if (res && res.data) {
          if (!res.data.login.error) {
            setAccessToken(res.data.login.accessToken || "");
            history.push("/");
          } else {
            const errors = res.data.login.error;
            Swal.fire({
              text: errors[0].message,
              toast: true,
              position: "top-right",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                container: "swal-container-error",
              },
            });
          }
        }
      })
      .catch(() => {
        Swal.fire("Something went wrong", "Please try again", "error");
      });
  };

  return (
    <>
      <div className="container pt-3">
        <div className="row m-0 justify-content-center">
          <div className="col-md-5 custom-form">
            <div className="form-title">
              {!isLoggedIn ? (
                <>
                  <h3 className="m-0">Welcome</h3>
                  <small>Login your account here</small>
                </>
              ) : (
                <>
                  <h3 className="m-0">Welcome Back</h3>
                  <small>It seems you are already logged in</small>
                  <Button variant="primary" type="submit" onClick={onLogout}>
                    Logout?
                  </Button>
                </>
              )}
            </div>
            {!isLoggedIn && (
              <Form onSubmit={loginAccount}>
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
export default LoginPage;
