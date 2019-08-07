import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Headline from "./Headline";
import Content from "./Content";

function MemberCard({ name, group }) {
  return (
    <Card>
      <Headline size="Sub">{name}</Headline>
      <Content>{group}</Content>
    </Card>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  age: PropTypes.string,
  group: PropTypes.string,
  rank: PropTypes.string,
  date: PropTypes.string
};

export default MemberCard;
