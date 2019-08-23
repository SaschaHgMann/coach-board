import React from "react";
import Header from "../components/Header";
import MemberCard from "../components/MemberCard";
import Container from "../components/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding: 60px 20px 10px 20px;
`;

function Members({ members }) {
  function renderMemberCard(memberCard, index) {
    return (
      <MemberCard
        key={index}
        name={memberCard.name}
        group={memberCard.group}
        age={memberCard.age}
        belt={memberCard.belt}
        date={memberCard.date}
      />
    );
  }

  return (
    <>
      <Header title="Members" />
      <StyledContainer>
        {members.map((memberCard, index) =>
          renderMemberCard(memberCard, index)
        )}
      </StyledContainer>
    </>
  );
}
export default Members;
