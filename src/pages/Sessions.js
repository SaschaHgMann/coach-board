import React from "react";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";
import Container from "../components/Container";
import ButtonContainer from "../components/ButtonContainer";
import { FilterButton } from "../components/Buttons";

const StyledButtonLink = styled(ButtonLink)`
  position: fixed;
  right: 10px;
  bottom: 3px;
  margin-left: 10px;
`;

function Sessions({ sessions, groups, onDeleteSession, history }) {
  const trainingGroups = ["ALL", ...groups];
  const [selectedGroup, setSelectedGroup] = React.useState("ALL");

  function renderSessionCard(sessionCard, index) {
    return (
      <SessionCard
        key={index}
        {...sessionCard}
        onDeleteSession={() => onDeleteSession(sessionCard._id)}
        id={sessionCard._id}
        sessions={sessionCard}
        history={history}
      />
    );
  }

  function renderFilterButtons(group) {
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

  function handleFilterGroups(event) {
    setSelectedGroup(event.target.name);
  }

  return (
    <>
      <Header title="Sessions" />
      <Container>
        {selectedGroup === "ALL"
          ? sessions
              .slice()
              .sort(function(a, b) {
                if (a.dateCreated < b.dateCreated) {
                  return 1;
                } else {
                  return -1;
                }
              })
              .map((sessionCard, index) =>
                renderSessionCard(sessionCard, index)
              )
          : sessions
              .slice()
              .sort(function(a, b) {
                if (a.dateCreated < b.dateCreated) {
                  return 1;
                } else {
                  return -1;
                }
              })
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
