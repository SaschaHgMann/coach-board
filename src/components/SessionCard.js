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
  flex-wrap: wrap;
  margin: 5px 0;
`;

const Attendees = styled.div`
  margin: 0;
  display: ${props => (props.aktiv ? "block" : "none")};
`;

const AttendButton = styled.button`
  margin: 0;
  font-size: 24px;
  text-shadow: ${props => (props.aktiv ? "0px 0px 5px lightgreen" : "none")};
`;

function SessionCard({ group, topic, content, categories, attendees }) {
  const [showAttendees, setShowAttendees] = React.useState(false);

  function renderAttendees(member, index) {
    return (
      <MemberCard
        key={(member, index)}
        name={member.name}
        group={member.group}
        age={member.age}
        status={(member.attendet = true)}
        rank={member.rank}
        date={member.date}
      >
        {member}
      </MemberCard>
    );
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
        <Headline size="Sub">
          {topic}
          <AttendButton
            onClick={() => setShowAttendees(!showAttendees)}
            aktiv={showAttendees}
          >
            <i className="fas fa-user-check" />
          </AttendButton>
        </Headline>
        <Devider />
        <TagList>{categories && categories.map(renderTag)}</TagList>
        <Content>{content}</Content>
        <Attendees aktiv={showAttendees}>
          {attendees && attendees.map(renderAttendees)}
        </Attendees>
      </ContentBody>
      <ContentFooter>author date</ContentFooter>
    </Card>
  );
}

SessionCard.propTypes = {
  group: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  content: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  date: PropTypes.string,
  attendees: PropTypes.arrayOf(PropTypes.object)
};

export default SessionCard;
