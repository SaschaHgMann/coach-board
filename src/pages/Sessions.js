import React from "react";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import Header from "../components/Header";
import SessionCard from "../components/SessionCard";
import Container from "../components/Container";
import ButtonContainer from "../components/ButtonContainer";

const FilterButton = styled.button`
  height: 28px;
  background: #fff8f0;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(255, 248, 240, 0.5);
`;

const StyledButtonLink = styled(ButtonLink)`
  margin-left: 10px;
  background-color: #fff8f0;
  box-shadow: 3px 2px 4px rgba(255, 248, 240, 0.5);
`;

function Sessions({ sessions, groups }) {
  console.log(sessions);
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
        attendes={sessionCard.attendes}
      />
    );
  }

  function renderFilterButtons(group) {
    // function showActive(Button) {
    //   setButtonActive(Button.active === true);
    // }

    return (
      <FilterButton
        key={group}
        name={group}
        // active={showActive}
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
