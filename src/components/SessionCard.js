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
import { getFromLocal } from "../services/localStorage";

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
  padding: 5px;
`;

const AttendeeContainer = styled.div`
  margin: 0;
  padding: 5px;
  display: ${props => (props.aktiv ? "block" : "none")};
`;

const AttendeeButton = styled.button`
  margin: 0;
  font-size: 20px;
  border: solid 1px;
  border-radius: 10px;
  background: #fff8f0;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
  text-shadow: ${props => (props.aktiv ? "0px 0px 5px lightgreen" : "none")};
`;

const FeatureButton = styled.button`
  background: darkgray;
  color: #fff8f0;
  border-radius: 10px;
  font-size: 20px;
`;

const Coach = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
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
  const [activeCoach] = React.useState(getFromLocal("activeCoach") || {});

  const [showAttendees, setShowAttendees] = React.useState(false);

  function renderAttendees(member, index) {
    return (
      <MemberCard
        key={(member, index)}
        {...member}
        attendet={(member.attendet = true)}
      >
        {member}
      </MemberCard>
    );
  }

  function renderCategory(category) {
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
        date={moment(date).format("dddd, DD. MMM YYYY")}
      />
      <ContentBody>
        <Headline size="Sub">
          {topic}
          <div>
            <AttendeeButton
              onClick={() => setShowAttendees(!showAttendees)}
              aktiv={showAttendees}
            >
              <i className="fas fa-user-check" /> {attendees.length}
            </AttendeeButton>
          </div>
        </Headline>
        <Devider />
        <CategoryContainer>
          {categories && categories.map(renderCategory)}
        </CategoryContainer>
        <Content>{content}</Content>
        <AttendeeContainer aktiv={showAttendees}>
          {attendees && attendees.map(renderAttendees)}
        </AttendeeContainer>
      </ContentBody>
      <ContentFooter>
        {activeCoach.username === author ? (
          <FeatureButton onClick={onDeleteSession}>
            <i className="fas fa-trash" />
          </FeatureButton>
        ) : null}
        <Coach>Coach: {author}</Coach>
        {activeCoach.username === author ? (
          <FeatureButton onClick={handleEditSession}>
            <i className="fas fa-edit" />
          </FeatureButton>
        ) : null}
      </ContentFooter>
    </Card>
  );
}

SessionCard.propTypes = {
  group: PropTypes.string,
  topic: PropTypes.string,
  content: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  date: PropTypes.string,
  attendees: PropTypes.arrayOf(PropTypes.object)
};

export default SessionCard;
