import React from "react";
import styled from "styled-components";

const NavButton = styled.button`
  position: absolute;
  left: 15px;
  font-size: 22px;
  color: #fff8f0;
  opacity: 0.7;
`;

function NavMenuButton({ showNavMenu, setShowNavMenu }) {
  return (
    <>
      <NavButton onClick={() => setShowNavMenu(!showNavMenu)}>
        <i className="fas fa-bars" />
      </NavButton>
    </>
  );
}

export default NavMenuButton;
