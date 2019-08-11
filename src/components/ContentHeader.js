import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const StyledHeader = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

function ContentHeader({ title, ...props }) {
  return (
    <StyledHeader {...props}>
      <Headline size="Main">{title}</Headline>
    </StyledHeader>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ContentHeader;
