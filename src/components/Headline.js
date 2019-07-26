import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const sizes = {
  Header: "32px",
  Main: "24px",
  Sub: "18px"
};

function getSize(size) {
  return sizes[size] || sizes.Main;
}

const StyledHeadline = styled.h1`
  margin: 0;
  font-size: ${props => getSize(props.size)};
`;

function Headline({ size, ...props }) {
  return <StyledHeadline size={size} {...props} />;
}

Headline.propTypes = {
  size: PropTypes.oneOf(["Header", "Main", "Sub"])
};

Headline.defaultProps = {
  size: "Main"
};

export default Headline;
