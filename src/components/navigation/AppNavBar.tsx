import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const AppNavBar = () => {
  return (
    <>
      <Navbar className="custom-nav">
        <Navbar.Brand as={Link} to="/">
          FEW: Mini Project
        </Navbar.Brand>
        <Nav className="ml-auto flex-row">
          <Nav.Link
            as={Link}
            activeClassName="active"
            to="/login"
            exact
            className="mr-1"
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            activeClassName="active"
            to="/logout"
            className=""
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default AppNavBar;
