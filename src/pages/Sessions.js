import React from "react";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";
import Container from "../components/Container";
import ButtonContainer from "../components/ButtonContainer";

const FilterButton = styled.button`
  height: 28px;
  padding: 2px 5px;
  background-image: linear-gradient(to top, #292929 -45%, #fff8f0);
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  :hover {
    background-image: linear-gradient(to top, #292929 -35%, lightgreen);
  }
`;

const StyledButtonLink = styled(ButtonLink)`
  margin-left: 10px;
  background-image: linear-gradient(to top, #292929 -45%, #fff8f0);
`;

function Sessions({ sessions, groups, onDeleteSession, onEditSession }) {
  const trainingGroups = ["All", ...groups];
  const [selectedGroup, setSelectedGroup] = React.useState("All");

  function renderSessionCard(sessionCard, index) {
    return (
      <SessionCard
        key={index}
        group={sessionCard.group}
        topic={sessionCard.topic}
        content={sessionCard.content}
        categories={sessionCard.categories}
        attendees={sessionCard.attendees}
        date={sessionCard.date}
        onDeleteSession={() => onDeleteSession(sessionCard.index)}
        onEditSession={() => onEditSession(sessionCard.index)}
      />
    );
  }

  function renderFilterButtons(group, index) {
    return (
      <FilterButton
        key={group}
        name={group}
        onClick={event => handleFilterGroups(event)}
      >
        {group}
      </FilterButton>
    );
  }

  function handleFilterGroups(event, index) {
    setSelectedGroup(event.target.name);
  }

  return (
    <>
      <Header title="Sessions" />
      <Container>
        {selectedGroup === "All"
          ? sessions.map((sessionCard, index) =>
              renderSessionCard(sessionCard, index)
            )
          : sessions
              .filter(sessionCard => sessionCard.group === selectedGroup)
              .map((sessionCard, index) =>
                renderSessionCard(sessionCard, index)
              )}
        <ButtonContainer>
          {trainingGroups.map(group => renderFilterButtons(group))}
          <StyledButtonLink to="/createsession">
            <i className="fas fa-plus-circle" />
          </StyledButtonLink>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Sessions;
