import React from "react";
import Header from "../components/Header";
import MemberCard from "../components/MemberCard";
import Container from "../components/Container";

function Members({ members }) {
  function renderMemberCard(memberCard, index) {
    return (
      <MemberCard key={index} name={memberCard.name} group={memberCard.group} />
    );
  }

  return (
    <>
      <Header title="Members" />
      <Container>
        {members.map((memberCard, index) =>
          renderMemberCard(memberCard, index)
        )}
      </Container>
    </>
  );
}
export default Members;
