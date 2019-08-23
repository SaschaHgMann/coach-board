import styled from "styled-components";
import colors from "../utils/colors";

const ContentFooter = styled.div`
  margin: 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  color: ${colors.light};
  border-radius: 0 0 10px 10px;
  background-image: linear-gradient(${colors.gray}, ${colors.dark} 130%);
`;

export default ContentFooter;
