import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const StyledHeader = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 10px 10px 0 0;
  background-image: linear-gradient(#cecccc, #292929 130%);
`;

function ContentHeader({ title, date, ...props }) {
  return (
    <StyledHeader {...props}>
      <Headline size="Main">{title}</Headline>
      {date}
    </StyledHeader>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string
};

export default ContentHeader;
