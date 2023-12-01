import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth-provider";

function NavigationBar() {
  const { user } = useAuth();

  const logout = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/user/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then(async (res) => res.status === 200 && (window.location.href = "/"))
      .catch((err) => console.log(err));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="justify-content-between p-2"
    >
      <Link to="/">
        <Navbar.Brand>
          <img src="sslogo.png" width={85} height={85}></img>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-between"
      >
        {user.name ? (
          <Nav className="align-items-center">
            <Nav.Link as={NavLink} to="/playlists" end>
              My Playlists
            </Nav.Link>
            <Nav.Link as={NavLink} to="/playlists/create">
              Create Playlist
            </Nav.Link>
          </Nav>
        ) : (
          <div></div>
        )}
        <Nav className="align-items-center">
          {user.name ? (
            <>
              <Nav.Item>
                <Navbar.Text className="mr-3">
                  Welcome, {user.name}!
                </Navbar.Text>
              </Nav.Item>
              <Nav.Link>
                <Button onClick={logout}>Log out</Button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/login">
                Log in
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                <Button>Sign up</Button>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;