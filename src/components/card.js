import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";

const StyledCard = styled.div`
  margin: 0px;
  border: solid 2px #292929;
`;

const StyledCardHeader = styled.div`
  margin: 0px;
  background-color: #cecccc;
`;

const StyledCardBody = styled.div`
  margin: 0px;
  background-color: #fefffe;
`;

function Card() {
  return (
    <StyledCard>
      <StyledCardHeader>
        <Headline size="Main">Gruppe Kids</Headline>
      </StyledCardHeader>
      <StyledCardBody>
        <Headline size="Sub">FreeFight</Headline>
        <p>treten</p>
        <p>schlagen</p>
      </StyledCardBody>
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Card;
