import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSearchButton = styled.button`
  position: absolute;
  right: 15px;
  top: 7px;
  font-size: 22px;
  color: #fff8f0;
  opacity: 0.7;
`;

function SearchButton({ children, to, ...other }) {
  return (
    <>
      <Link to="/Search">
        <StyledSearchButton {...other}>
          <i className="fas fa-search" />
        </StyledSearchButton>
      </Link>
    </>
  );
}

export default SearchButton;
