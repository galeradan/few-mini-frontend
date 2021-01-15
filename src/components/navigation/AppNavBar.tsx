import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useMeQuery } from "generated/graphql";

const AppNavBar = () => {
  const { data } = useMeQuery();

  const onLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <>
      <Navbar className="custom-nav">
        <Navbar.Brand as={Link} to="/">
          FEW: Mini Project
        </Navbar.Brand>
        <Nav className="ml-auto flex-row">
          {!data ? (
            <Nav.Link
              as={Link}
              activeClassName="active"
              to="/login"
              exact
              className="mr-1"
            >
              {" "}
              Login
            </Nav.Link>
          ) : (
            <Navbar.Text>{data.me.username}</Navbar.Text>
          )}
          {data && (
            <Nav.Link
              as={Link}
              activeClassName="active"
              to="/logout"
              className=""
              onClick={() => onLogout()}
            >
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default AppNavBar;
