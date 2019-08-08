import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Devider from "./Devider";
import Tag from "./Tag";
import Card from "./Card";
import Content from "./Content";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";
import ContentFooter from "./ContentFooter";
import MemberCard from "./MemberCard";

const TagList = styled.div`
  display: flex;
  margin: 5px 0;
`;

const Members = styled.div`
  margin: 0;
`;

function SessionCard({ group, topic, content, categories, attendes }) {
  function renderAttendes(member) {
    return <MemberCard key={member}>{member}</MemberCard>;
  }

  function renderTag(category) {
    return (
      <Tag key={category} active={true}>
        {category}
      </Tag>
    );
  }

  return (
    <Card>
      <ContentHeader title={group} />
      <ContentBody>
        <Headline size="Sub">{topic}</Headline>
        <Devider />
        <TagList>{categories && categories.map(renderTag)}</TagList>
        <Members>{attendes && attendes.map(renderAttendes)}</Members>
        <Content>{content}</Content>
      </ContentBody>
      <ContentFooter>author date</ContentFooter>
    </Card>
  );
}

SessionCard.propTypes = {
  group: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.func,
  date: PropTypes.func,
  students: PropTypes.func
};

export default SessionCard;
