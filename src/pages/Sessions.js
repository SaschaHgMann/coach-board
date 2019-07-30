import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";
import SessionsData from "./__mock__/sessions.json";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  overflow-y: auto;
`;

const ActionLine = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function Sessions() {
  function renderSessionCard(sessionCard) {
    return (
      <SessionCard
        key={sessionCard._id}
        group={sessionCard.group}
        topic={sessionCard.topic}
        content={sessionCard.content}
        tags={sessionCard.tags}
      />
    );
  }

  return (
    <>
      <Header title="Sessions" />
      <CardContainer>
        {SessionsData.map(sessionCard => renderSessionCard(sessionCard))}
      </CardContainer>
      <ActionLine>
        <Button>All</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <ButtonLink to="/createsession">New</ButtonLink>
      </ActionLine>
    </>
  );
}

export default Sessions;
