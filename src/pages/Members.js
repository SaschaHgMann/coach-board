import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import MemberCard from "../components/MemberCard";
import Container from "../components/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding: 60px 20px 10px 20px;
`;

function Members({ members, history }) {
  function renderMemberCard(memberCard, index) {
    console.log(members)
    return (
      <MemberCard
        key={index}
        name={memberCard.name}
        group={memberCard.group}
        age={memberCard.age}
        belt={memberCard.belt}
        date={memberCard.date}
        history={history}
        members={memberCard}
      />
    );
  }

  return (
    <>
      <Header title="Members" />
      <StyledContainer>
        {members &&
          members.map((member, index) => renderMemberCard(member, index))}
      </StyledContainer>
    </>
  );
}

Members.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Members;
