import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="yellotail">
        <LinkContainer to="/">
          <Navbar.Brand>
            <h1>The Daily News</h1>
          </Navbar.Brand>
        </LinkContainer>
      </Navbar>
      <Nav>
        <Nav.Item>
          <LinkContainer to="/home">
            <Navbar.Brand>
              <Nav.Link>Home</Nav.Link>
            </Navbar.Brand>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contacts">
            <Navbar.Brand>
              <Nav.Link>Contacts</Nav.Link>
            </Navbar.Brand>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
