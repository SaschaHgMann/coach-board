import React from "react";
import Fullscreen from "../components/Fullscreen";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

function Settings() {
  return (
    <Fullscreen>
      <BackgroundImage src="/Background.jpg" />
      <Header title="Settings" />
    </Fullscreen>
  );
}

export default Settings;
