import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const sizes = {
  Header: "38px",
  Main: "30px",
  Sub: "26px"
};

function getSize(size) {
  return sizes[size] || sizes.Main;
}

const StyledHeadline = styled.h1`
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-family: "Bahianita", "cursive";
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
