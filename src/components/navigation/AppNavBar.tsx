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
        {data && (
          <div className="d-flex flex-column">
            <small>{data.me.username}</small>
            <small>{data.me.role.toUpperCase()}</small>
          </div>
        )}

        <Nav className="ml-auto flex-row">
          {!data && (
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
