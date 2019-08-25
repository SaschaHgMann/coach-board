import React from "react";
import styled from "styled-components";
import { fadeInLogo } from "../utils/animations";

const Banner = styled.div`
  font-family: "Bahianita", "cursive";
  font-size: 70px;
  color: #fff8f0;
  text-shadow: 1px 1px 2px black, 0 0 5px #fff8f0;
  height: 80px;
  top: 60px;
  animation: ${fadeInLogo} 2s ease-out 1 both;
  position: fixed;
`;

const LogoSVG = styled.img`
  height: 60px;
  color: #fff8f0;
  text-shadow: 1px 1px 2px black, 0 0 5px #fff8f0;
  animation: ${fadeInLogo} 2s ease-out 1 both;
  position: absolute;
  left: -40px;
  z-index: -1;
`;

function Logo() {
  return (
    <>
      <Banner>
        <LogoSVG src="./images/Board_Logo.svg" />
        Coach Board
      </Banner>
    </>
  );
}

export default Logo;
