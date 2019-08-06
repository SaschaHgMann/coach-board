import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ButtonLink from "../components/ButtonLink";

const StyledButtonLink = styled(ButtonLink)`
  position: relative;
  bottom: -220px;
  width: 90px;
  background-color: #fff8f0;
  box-shadow: 3px 2px 4px rgba(255, 248, 240, 0.5);
`;

function Landing() {
  return (
    <Layout>
      <StyledButtonLink to="/sessions">Login</StyledButtonLink>
    </Layout>
  );
}

export default Landing;
