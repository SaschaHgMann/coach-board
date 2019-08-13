import styled from "styled-components";
import colors from "../colors";

const Tag = styled.span`
  background: ${props => (props.active ? colors.grayDark : colors.grayMedium)};
  color: ${props => (props.active ? "#fff8f0" : "#292929")};
  border: 2px solid ${colors.grayDark};
  border-radius: 3px;
  padding: 3px;
  margin: 5px 5px 0 0;
`;

export default Tag;
