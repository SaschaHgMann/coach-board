import styled from "styled-components";
import colors from "../utils/colors";

const Tag = styled.span`
  background: ${props => (props.active ? colors.dark : colors.light)};
  color: ${props => (props.active ? colors.light : colors.dark)};
  border: 2px solid ${colors.dark};
  border-radius: 3px;
  padding: 3px;
  margin: 5px 5px 0 0;
`;

export default Tag;
