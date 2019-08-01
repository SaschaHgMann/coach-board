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

  function renderFilterButtons(groups) {
    return (
      <Button
        key={groups}
        // onClick={() => handleFilterGroups}
      >
        {groups}
      </Button>
    );
  }

  // function handleFilterGroups(group) {
  //   const [selectedGroup, setSelectedGroup] = React.useState(sessionCards);

  //   setSelectedGroup(!selectedGroup);

  // return  === "all"
  //   ? sessionCards
  //   : sessionCards.filter(entry => entry.group === selectedGroup);}

  return (
    <>
      <Header title="Sessions" />
      <CardContainer>
        {sessionCards.map((sessionCard, index) =>
          renderSessionCard(sessionCard, index)
        )}
        <ButtonContainer>
          <Button
            group="all"
            // onClick={handleFilterGroups}
          >
            All
          </Button>
          {groups.map(group => renderFilterButtons(group))}
          <ButtonLink to="/createsession">New</ButtonLink>
        </ButtonContainer>
      </CardContainer>
    </>
  );
}

export default Sessions;
