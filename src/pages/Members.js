import React from "react";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

function Members({ memberCards }) {
  return (
    <Fullscreen>
      <BackgroundImage src="/Background.jpg" />
      <Header title="Members" />
    </Fullscreen>
  );
}

export default Members;
