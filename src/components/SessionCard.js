import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Devider from "./Devider";
import Tag from "./Tag";
import Content from "./Content";
//import sessions from "../pages/__mock__/sessions";

const StyledCard = styled.div`
  margin: 0px;
  border: solid 2px #292929;
  border-radius: 10px;
  background-color: #cecccc;
`;

const StyledCardHeader = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
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
  background-color: #fff8f0;
  border-radius: 10px;
`;

const StyledCardFooter = styled.div`
  margin: 0;
  padding-right: 5px;
  display: grid;
  justify-content: right;
  color: #fff8f0;
`;
const TagList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`;

function SessionCard({ group, topic, content, tags }) {
  function renderTag(tag) {
    return <Tag key={tag}>{tag}</Tag>;
  }

  return (
    <StyledCard>
      <StyledCardHeader>
        <Headline size="Main">{group}</Headline>
        <button>Teilnehmer: 12/15</button>
      </StyledCardHeader>
      <StyledCardBody>
        <Headline size="Sub">{topic}</Headline>
        <Devider />
        <Content>{content}</Content>
        {tags && tags.length && <TagList>{tags.map(renderTag)}</TagList>}
        {(!tags || !tags.length) && <TagList>-</TagList>}
      </StyledCardBody>
      <StyledCardFooter>author date</StyledCardFooter>
    </StyledCard>
  );
}

SessionCard.propTypes = {
  group: PropTypes.string,
  topic: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.func,
  date: PropTypes.func,
  students: PropTypes.func
};

export default SessionCard;
