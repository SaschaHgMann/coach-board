import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";

import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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

  return (
    <>
      <Header title="Sessions" />
      <CardContainer>
        {sessionCards.map((sessionCard, index) =>
          renderSessionCard(sessionCard, index)
        )}
      </CardContainer>
      <ButtonContainer>
        <Button>All</Button>
        <Button>Bonsais</Button>
        <Button>Kids</Button>
        <Button>Youth</Button>
        <Button>Seniors</Button>
        <ButtonLink to="/createsession">New</ButtonLink>
      </ButtonContainer>
    </>
  );
}

export default Sessions;
