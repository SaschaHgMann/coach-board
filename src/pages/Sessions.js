import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";
import SessionsData from "./__mock__/sessions.json";

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  overflow-y: auto;
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
      <Header size="Header" title="Sessions" />
      <CardContainer>
        {SessionsData.map(sessionCard => renderSessionCard(sessionCard))}
      </CardContainer>
    </>
  );
}

export default Sessions;
