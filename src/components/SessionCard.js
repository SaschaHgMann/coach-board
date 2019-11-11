import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Devider from "./Devider";
import Tag from "./Tag";
import Card from "./Card";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";
import ContentFooter from "./ContentFooter";
import MemberCard from "./MemberCard";
import moment from "moment";
import { getFromLocal } from "../services/localStorage";
import { MemberButton, FeatureButton } from "./Buttons";

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
  padding: 5px;
`;

const Content = styled.p`
  margin: 10px 0;
  padding: 5px;
`;

const AttendeeContainer = styled.div`
  margin: 0;
  padding: 5px;
  display: ${props => (props.active ? "block" : "none")};
`;

const CoachContainer = styled.div`
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
            <MemberButton
              onClick={() => setShowAttendees(!showAttendees)}
              active={showAttendees}
            >
              <i className="fas fa-user-check" /> {attendees.length}
            </MemberButton>
          </div>
        </Headline>
        <Devider />
        <CategoryContainer>
          {categories && categories.map(renderCategory)}
        </CategoryContainer>
        <Content>{content}</Content>
        <AttendeeContainer active={showAttendees}>
          {attendees && attendees.map(renderAttendees)}
        </AttendeeContainer>
      </ContentBody>
      <ContentFooter>
        {activeCoach.username === author ? (
          <FeatureButton onClick={onDeleteSession}>
            <i className="fas fa-trash" />
          </FeatureButton>
        ) : null}
        <CoachContainer>Coach: {author}</CoachContainer>
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
