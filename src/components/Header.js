import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import NavMenuButton from "./NavMenuButton";
import NavMenu from "./NavMenu";
import SearchButton from "./SearchButton";

const StyledHeader = styled.div`
  position: fixed;
  top: 0px;
  background: #292929;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  z-index: 1;
`;

const StyledHeadline = styled(Headline)`
  color: #fff8f0;
  text-shadow: 1px 1px 2px black, 0 0 5px #fff8f0;
`;

function Header({ title, ...props }) {
  const [showNavMenu, setShowNavMenu] = React.useState(false);

  return (
    <StyledHeader {...props}>
      <NavMenuButton
        showNavMenu={showNavMenu}
        setShowNavMenu={setShowNavMenu}
      />
      <NavMenu
        showNavMenu={showNavMenu}
        onNavClick={() => setShowNavMenu(false)}
        // handleClick={handleLogOut}
      />
      <StyledHeadline size="Header">{title}</StyledHeadline>
      <SearchButton />
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
