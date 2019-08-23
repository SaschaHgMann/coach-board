import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import colors from "../utils/colors";

const NavContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 5;
  width: 250px;
  display: flex;
  flex-direction: column;
  transform: translate3d(${props => (props.showNavMenu ? 0 : -250)}px, 0, 0);
  transition: all 0.4s;
`;

const NavHeader = styled.img`
  width: 100%;
  height: 60px;
  margin: 0;
  border: none;
  object-fit: cover;
`;

const NavItem = styled(NavLink)`
  text-align: left;
  margin: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(41, 41, 41, 0.9);
  color: ${colors.light};
  font-size: 28px;
  font-family: "Bahianita", "cursive";
  border: none;
`;

function NavMenu({ showNavMenu, onNavClick }) {
  const navItems = [
    { to: "/sessions", label: "Sessions" },
    { to: "/createsession", label: "New Session" },
    { to: "/groups", label: "Groups" },
    { to: "/members", label: "Members" },
    { to: "/settings", label: "Settings" },
    { to: "/", label: "Logout" }
  ];

  return (
    <NavContainer showNavMenu={showNavMenu}>
      <NavHeader src="/NavHeader.jpg" />
      {navItems.map(item => (
        <NavItem key={item.label} to={item.to} onClick={onNavClick}>
          {item.label}
        </NavItem>
      ))}
    </NavContainer>
  );
}

export default NavMenu;
