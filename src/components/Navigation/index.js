import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { NavDropdown } from "react-bootstrap";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        SheyBrows
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/reservation" linkText="Book Now" />

          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Phibrows">Phibrows</NavDropdown.Item>
            <NavDropdown.Item href="/Phiremoval">Phiremoval</NavDropdown.Item>
            <NavDropdown.Item href="/Philashes">Philash</NavDropdown.Item>
          </NavDropdown>

          <NavbarItem path="/gallary" linkText="Gallery" />

          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

///nadropdown is wgere im proud  from reactbootstrap page :)
