import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Content from "./Content";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 10px;
  padding-left: 5px;
  background-image: linear-gradient(to top, #292929 -35%, #cecccc);
`;

function MemberCard({ name, group, age }) {
  return (
    <StyledCard>
      <Headline size="Sub">{name}</Headline>
      <Content>
        {group}, {age}
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
  date: PropTypes.string
};

export default MemberCard;
