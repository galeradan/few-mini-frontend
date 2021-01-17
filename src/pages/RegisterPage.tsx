import { notify } from "components/notifications/Toast";
import { useRegisterMutation } from "generated/graphql";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [register] = useRegisterMutation();
  const [isLoading, setIsLoading] = useState(false);

  const loginAccount = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
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
              notify("Successfully Registered, Please Login", "notify-success");
              history.push("/login");
            } else {
              const errors = res.data.register.error;
              notify(errors[0].message, "notify-error");
            }
            setIsLoading(false);
          }
        })
        .catch(() => {
          setIsLoading(false);
          Swal.fire("Something went wrong", "Please try again", "error");
        });
    } else {
      notify("Passwords doesn't match", "notify-error");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-0 justify-content-center">
          <div className="col-md-5 custom-form">
            <div className="form-title">
              <>
                <h3 className="m-0">Welcome</h3>
                <small>Register your account here</small>
              </>
            </div>
            <small className="d-inline-block mb-3 text-muted few-sub-title">
              Already have an account? <Link to="/login">Login here</Link>
            </small>
            <Form onSubmit={loginAccount} className="few-form-group">
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
              <Button type="submit" className="few-btn">
                {isLoading ? (
                  <ReactLoading
                    type="balls"
                    className="few-loader"
                    height="100%"
                    width="15px"
                  />
                ) : (
                  "Register"
                )}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
