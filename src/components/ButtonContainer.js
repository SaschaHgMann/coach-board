import styled from "styled-components";
import { fadeInBottom } from "../utils/animations";

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  background: #292929;
  padding: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  animation: ${fadeInBottom} 1.5s;
`;

export default ButtonContainer;
