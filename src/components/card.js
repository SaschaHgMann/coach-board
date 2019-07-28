import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Devider from "./Devider";
import Tag from "./Tag";
import Content from "./Content";

const StyledCard = styled.div`
  margin: 0px;
  border: solid 2px #292929;
  border-radius: 10px;
  background-color: #cecccc;
`;

const StyledCardHeader = styled.div`
  margin: 0px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #cecccc;
  border-radius: 10px;
`;

const StyledCardBody = styled.div`
  margin: 0px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  background-color: #fefffe;
  border-radius: 10px;
`;

const StyledCardFooter = styled.div`
  margin: 0;
  padding-right: 5px;
  display: grid;
  justify-content: right;
  color: #fff8f0;
`;

function Card() {
  return (
    <StyledCard>
      <StyledCardHeader>
        <Headline size="Main">Gruppe Kids</Headline>
      </StyledCardHeader>
      <StyledCardBody>
        <Headline size="Sub">FreeFight</Headline>
        <Devider />
        <Content>treten</Content>
        <Content>schlagen</Content>
        <Tag>Basics</Tag>
        <Tag>Kumite</Tag>
      </StyledCardBody>
      <StyledCardFooter>author date</StyledCardFooter>
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Card;
