import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";
import groups from "./group-data";

const CardContainer = styled.div`
  position: relative;
  display: grid;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  bottom: 0px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

function Sessions({ sessionCards }) {
  const [trainingGroups, setTrainingGroups] = React.useState([
    "All",
    ...groups
  ]);
  const [selectedGroup, setSelectedGroup] = React.useState("All");
  function renderSessionCard(sessionCard, index) {
    return (
      <SessionCard
        key={index}
        group={sessionCard.group}
        topic={sessionCard.topic}
        content={sessionCard.content}
        categories={sessionCard.categories}
      />
    );
  }

  function renderFilterButtons(group) {
    return (
      <Button
        key={group}
        name={group}
        onClick={event => handleFilterGroups(event)}
      >
        {group}
      </Button>
    );
  }

  function handleFilterGroups(event) {
    setSelectedGroup(event.target.name);
  }
  return (
    <>
      <Header title="Sessions" />
      <CardContainer>
        {selectedGroup === "All"
          ? sessionCards.map((sessionCard, index) =>
              renderSessionCard(sessionCard, index)
            )
          : sessionCards
              .filter(sessionCard => sessionCard.group === selectedGroup)
              .map((sessionCard, index) =>
                renderSessionCard(sessionCard, index)
              )}
        <ButtonContainer>
          {trainingGroups.map(group => renderFilterButtons(group))}
          <ButtonLink to="/createsession">New</ButtonLink>
        </ButtonContainer>
      </CardContainer>
    </>
  );
}

export default Sessions;
