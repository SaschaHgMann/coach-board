import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const StyledHeader = styled.div`
  background: #292929;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const StyledHeadline = styled(Headline)`
  color: #fff8f0;
`;

function Header({ title, ...props }) {
  return (
    <StyledHeader {...props}>
      <StyledHeadline size="Header">{title}</StyledHeadline>
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
