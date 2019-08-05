import React from "react";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

function Groups({ groupCards }) {
  return (
    <Fullscreen>
      <BackgroundImage src="/Background.jpg" />
      <Header title="Groups" />
    </Fullscreen>
  );
}

export default Groups;
