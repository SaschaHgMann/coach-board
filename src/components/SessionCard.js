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
import moment from "moment";

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
  padding: 5px;
`;

const Attendees = styled.div`
  margin: 0;
  padding: 5px;
  display: ${props => (props.aktiv ? "block" : "none")};
`;

const AttendButton = styled.button`
  margin: 0;
  font-size: 20px;
  border: solid 1px;
  border-radius: 10px;
  background: #fff8f0;
  text-shadow: ${props => (props.aktiv ? "0px 0px 5px lightgreen" : "none")};
`;

const FeatureButton = styled.button`
  background: darkgray;
  color: #fff8f0;
  border-radius: 10px;
  font-size: 20px;
`;

function SessionCard({
  group,
  topic,
  content,
  categories,
  attendees,
  date,
  author,
  onDeleteSession,
  history,
  id
}) {
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

  function handleEditSession() {
    history.push(`/createsession/edit/${id}`);
  }

  return (
    <Card>
      <ContentHeader
        title={group}
        date={moment(date).format("dddd, DD. MMMM YYYY")}
      />
      <ContentBody>
        <Headline size="Sub">
          {topic}
          <div>
            <AttendButton
              onClick={() => setShowAttendees(!showAttendees)}
              aktiv={showAttendees}
            >
              <i className="fas fa-user-check" /> {attendees.length}
            </AttendButton>
          </div>
        </Headline>
        <Devider />
        <TagList>{categories && categories.map(renderTag)}</TagList>
        <Content>{content}</Content>
        <Attendees aktiv={showAttendees}>
          {attendees && attendees.map(renderAttendees)}
        </Attendees>
      </ContentBody>
      <ContentFooter>
        <FeatureButton onClick={onDeleteSession}>
          <i className="fas fa-trash" />
        </FeatureButton>
        Coach: {author}
        <FeatureButton onClick={handleEditSession}>
          <i className="fas fa-edit" />
        </FeatureButton>
      </ContentFooter>
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
