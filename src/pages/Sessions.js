import React from "react";
//import styled from "styled-components";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";
import groups from "./group-data";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/BackgroundImage";
import Container from "../components/Container";
import ButtonContainer from "../components/ButtonContainer";

function Sessions({ sessionCards }) {
  const trainingGroups = ["All", ...groups];
  const [selectedGroup, setSelectedGroup] = React.useState("All");
  // const [buttonActive, setButtonActive] = React.useState({});

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
    // function showActive(Button) {
    //   setButtonActive(Button.active === true);
    // }

    return (
      <Button
        key={group}
        name={group}
        // active={showActive}
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
      <Fullscreen>
        <BackgroundImage src="/Background.jpg" />
        <Header title="Sessions" />
        <Container>
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
        </Container>
      </Fullscreen>
    </>
  );
}

export default Sessions;
