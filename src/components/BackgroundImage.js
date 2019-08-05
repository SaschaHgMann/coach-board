import styled from "styled-components";

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.5) saturate(0.8) brightness(0.6);
`;

export default BackgroundImage;
