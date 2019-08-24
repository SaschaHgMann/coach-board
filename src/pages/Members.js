import React from "react";
import Header from "../components/Header";
import MemberCard from "../components/MemberCard";
import Container from "../components/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding: 60px 20px 10px 20px;
`;

function Members({ members, history }) {
  function renderMemberCard(member, index) {
    return (
      <MemberCard
        key={index}
        name={member.name}
        group={member.group}
        age={member.age}
        belt={member.belt}
        date={member.date}
        history={history}
        members={member}
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
