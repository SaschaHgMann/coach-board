import React from "react";
import styled from "styled-components";
import Devider from "./Devider";

const NavContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 150px;
`;

const NavHeader = styled.img`
  width: 100%;
  height: 30px;
`;

const NavItem = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px;
  background-color: rgba(41, 41, 41, 0.8);
  color: #fff8f0;
`;

const NavBackground = styled.div`
  position: relative;
  z-index: 1;
  background: lightgray;
  opacity: 0.3;
`;

function NavMenu() {
  return (
    <NavContainer>
      <NavBackground />
      <NavHeader src="./NavHeader.jpg" />
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
  );
}

export default NavMenu;
