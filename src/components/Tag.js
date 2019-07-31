import React from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  background: #292929;
  color: #fff8f0;
  border-radius: 3px;
  padding: 3px;

  margin-right: 5px;
`;

function Tag(props) {
  return <StyledTag {...props} />;
}

export default Tag;
