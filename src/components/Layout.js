import React from "react";
import styled from "styled-components";

const Fullscreen = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.5) saturate(0.8) brightness(0.6);
`;

function Layout({ children }) {
  return (
    <Fullscreen>
      <BackgroundImage src="./images/Background.jpg" />
      {children}
    </Fullscreen>
  );
}

export default Layout;
