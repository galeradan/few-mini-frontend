import { useLoginMutation } from "generated/graphql";
import { setAccessToken } from "helper/accessToken";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const loginAccount = (e: any) => {
    e.preventDefault();
    login({
      variables: {
        username,
        password,
      },
    })
      .then((res) => {
        if (res && res.data) {
          setAccessToken(res.data.login.accessToken || "");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container pt-3">
        <div className="row m-0 justify-content-center">
          <div className="col-md-5 custom-form">
            <div className="form-title">
              <h3 className="m-0">Welcome</h3>
              <small>Login your account here</small>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
