import React from "react";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/BackgroundImage";
import ButtonLink from "../components/ButtonLink";

function Landing() {
  return (
    <>
      <Fullscreen>
        <BackgroundImage src="/Background.jpg" />
        <ButtonLink to="/sessions">Login</ButtonLink>
      </Fullscreen>
    </>
  );
}

export default Landing;
