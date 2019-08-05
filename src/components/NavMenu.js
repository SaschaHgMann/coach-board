import React from "react";
import styled from "styled-components";
import { fadeInNav } from "../utils/animations";
import { Link } from "react-router-dom";

const NavBackground = styled.div`
  position: relative;
  z-index: 2;
  background: lightgray;
  opacity: 0.3;
`;

const NavContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 3;
  width: 250px;

  display: ${props => (props.showNavMenu ? "block" : "none")};
  animation: ${fadeInNav} 0.8s;
`;

const NavHeader = styled.img`
  width: 100%;
  height: 60px;
  margin: 0;
  border: none;
  object-fit: cover;
`;

const NavItem = styled.button`
  text-align: left;
  margin: 0;
  width: 100%;
  padding: 5px;
  background-color: rgba(41, 41, 41, 0.9);
  color: #fff8f0;
  font-size: 28px;
  font-family: "Bahianita", "cursive";
  border: none;
`;

function NavLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <NavItem {...other}>{children}</NavItem>
    </Link>
  );
}

function NavMenu({ showNavMenu }) {
  return (
    <>
      <NavBackground />
      <NavContainer showNavMenu={showNavMenu}>
        <NavHeader src="/NavHeader.jpg" />
        <NavLink to="/sessions">Sessions</NavLink>
        <NavLink to="/createsession">New Session</NavLink>
        <NavLink to="/groups">Groups</NavLink>
        <NavLink to="/members">Members</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/">Logout</NavLink>
      </NavContainer>
    </>
  );
}

export default NavMenu;
