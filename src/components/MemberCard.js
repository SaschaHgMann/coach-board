import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Content from "./Content";
import styled from "styled-components";

const getColor = props => {
  return props.status ? "lightgreen" : "#cecccc";
};

const StyledCard = styled(Card)`
  margin: 10px 0;

  padding-left: 5px;
  background-image: linear-gradient(to top, #292929 -35%, ${getColor});
`;

function MemberCard({ name, group, age, status, rank, date, onClick }) {
  return (
    <StyledCard status={status} onClick={onClick}>
      <Headline size="Sub">{name}</Headline>
      <Content>
        {group}, {age}, {rank}, {date}
      </Content>
    </StyledCard>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  age: PropTypes.number,
  group: PropTypes.string,
  rank: PropTypes.string,
  date: PropTypes.string,
  onClick: PropTypes.func
};

export default MemberCard;
