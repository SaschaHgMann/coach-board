import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Headline from "./Headline";
import styled from "styled-components";

const getColor = props => {
  return props.attendet ? "lightgreen" : "#cecccc";
};

const StyledCard = styled(Card)`
  margin: 10px 0;
  border: solid 2px #292929;
  padding-left: 5px;
  box-shadow: none;
  background-image: linear-gradient(to top, #292929 -35%, ${getColor});
`;

const MemberDetails = styled.div`
  margin: 5px 0;
`;

function MemberCard({ name, group, age, attendet, belt, onClick }) {
  return (
    <StyledCard attendet={attendet} onClick={onClick}>
      <Headline size="Sub">{name}</Headline>
      <MemberDetails>
        {group}, {age}, {belt}
      </MemberDetails>
    </StyledCard>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  age: PropTypes.number.isRequired,
  group: PropTypes.string.isRequired,
  rank: PropTypes.string,
  date: PropTypes.string,
  onClick: PropTypes.func
};

export default MemberCard;
