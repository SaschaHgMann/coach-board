import React from "react";
import Fullscreen from "./Fullscreen";
import BackgroundImage from "./BackgroundImage";

function Layout({ children }) {
  return (
    <Fullscreen>
      <BackgroundImage src="/Background.jpg" />
      {children}
    </Fullscreen>
  );
}

export default Layout;
