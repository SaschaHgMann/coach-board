import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Devider from "./Devider";
//import Tag from "./Tag";
import Card from "./Card";
import Content from "./Content";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";
import ContentFooter from "./ContentFooter";

const StyledContentFooter = styled(ContentFooter)`
  justify-content: flex-end;
`;

// const TagList = styled.div`
//   display: flex;
//   width: 100%;
//   flex-wrap: wrap;
// `;

function SessionCard({ group, topic, content, tags }) {
  // function renderTag(tag) {
  //   return <Tag key={tag}>{tag}</Tag>;
  // }

  return (
    <Card>
      <ContentHeader title={group} />
      <ContentBody>
        <Headline size="Sub">{topic}</Headline>
        <Devider />
        <button>Teilnehmer: 12/15</button>
        <Content>{content}</Content>
        {/* <TagList>{tags.map(renderTag)}</TagList> */}
      </ContentBody>
      <StyledContentFooter>author date</StyledContentFooter>
    </Card>
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
