import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { NavDropdown } from "react-bootstrap";

import "./navigation.css";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const phi = () => {
    return (
      <img
        style={{ width: "30px", height: "30px" }}
        src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643146266/Sheyla/a91e524e73508bb1d4b03fd22756e041_v3fp82.png"
        alt=""
      />
    );
  };

  const { isAdmin } = user;

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar className="bakground" bg="light" expand="lg">
      <Navbar.Brand style={{ paddingLeft: "30px" }} as={NavLink} to="/">
        {phi()} SheyBrows
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          {token && isAdmin ? (
            <NavbarItem path="/admin" linkText="Admin Page" />
          ) : null}

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
