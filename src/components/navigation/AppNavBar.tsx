import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useMeQuery } from "generated/graphql";
import { removeToken } from "helper/accessToken";

const AppNavBar = () => {
  const { data } = useMeQuery();

  return (
    <>
      <Navbar className="custom-nav" fixed="top">
        <Navbar.Brand as={Link} to="/">
          FEW
        </Navbar.Brand>
        <Nav className="ml-auto flex-row">
          {!data ? (
            <>
              <Nav.Link
                as={Link}
                activeClassName="active"
                to="/register"
                exact
                className="mr-1"
              >
                Register
              </Nav.Link>
              <Nav.Link
                as={Link}
                activeClassName="active"
                to="/login"
                exact
                className="mr-1"
              >
                Login
              </Nav.Link>
            </>
          ) : (
            <Navbar.Text>{`${
              data.me.username
            } - ${data.me.role.toUpperCase()}`}</Navbar.Text>
          )}
          {data && (
            <Nav.Link
              as={Link}
              activeClassName="active"
              to="/logout"
              className=""
              onClick={() => removeToken()}
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
