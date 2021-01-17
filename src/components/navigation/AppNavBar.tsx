import React, { useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { removeToken } from "helper/accessToken";
import { UserContext } from "contexts/UserContext";

const AppNavBar = () => {
  // gets the user context which contains current user details
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar className="custom-nav" fixed="top">
        <Navbar.Brand as={Link} to="/">
          FEW
        </Navbar.Brand>
        {user.id !== "" && (
          <div className="d-flex flex-column">
            <small>{user.username}</small>
            <small>{user.role.toUpperCase()}</small>
          </div>
        )}

        <Nav className="ml-auto flex-row">
          {user.id === "" && (
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
          {user.id !== "" && (
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
