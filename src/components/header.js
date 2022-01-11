import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="yellotail">
        <LinkContainer to="/">
          <h1>The Daily News</h1>
        </LinkContainer>
      </Navbar>
      <Nav>
        <Nav.Item>
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contacts">
            <Nav.Link>Contacts</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
