import styled from "styled-components";
import { fadeInBottom } from "../utils/animations";
import colors from "../utils/colors";

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  background: ${colors.dark};
  padding: 5px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  animation: ${fadeInBottom} 1.5s;
`;

export default ButtonContainer;
