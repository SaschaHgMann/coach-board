import React from "react";
import styled from "styled-components";
import Devider from "./Devider";
import { fadeInNav } from "../utils/animations";

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
`;

const NavItem = styled.div`
  margin: 0;
  width: 100%;
  padding: 5px;
  background-color: rgba(41, 41, 41, 0.9);
  color: #fff8f0;
  font-size: 28px;
`;

const NavBackground = styled.div`
  position: relative;
  z-index: 2;
  background: lightgray;
  opacity: 0.3;
`;

function NavMenu({ showNavMenu }) {
  return (
    <>
      <NavBackground />
      <NavContainer showNavMenu={showNavMenu}>
        <NavHeader src="/NavHeader.jpg" />
        <NavItem>Sessions</NavItem>
        <NavItem>New Session</NavItem>
        <Devider />
        <NavItem>Groups</NavItem>
        <NavItem>Members</NavItem>
        <Devider />
        <NavItem>Settings</NavItem>
        <Devider />
        <NavItem>Logout</NavItem>
      </NavContainer>
    </>
  );
}

export default NavMenu;
