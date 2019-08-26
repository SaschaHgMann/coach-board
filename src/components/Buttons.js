import styled from "styled-components";
import colors from "../utils/colors";

export const Button = styled.button`
  margin: 5px;
  height: 45px;
  width: 45px;
  border: none;
  border-radius: 50%;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(
    to top,
    ${colors.dark} -45%,
    ${colors.light}
  );
  font-size: 24px;
  outline: none;
`;

export const LoginButton = styled(Button)`
  width: 90px;
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 3px 2px 4px rgba(255, 248, 240, 0.5);
  outline: none;
`;

export const MemberButton = styled.button`
  margin: 0;
  font-size: 20px;
  border: solid 1px;
  border-radius: 10px;
  background: ${colors.light};
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
  text-shadow: ${props => (props.aktiv ? "0px 0px 5px lightgreen" : "none")};
  outline: none;
`;

export const FeatureButton = styled.button`
  background-image: linear-gradient(
    to top,
    ${colors.dark} -45%,
    ${colors.light}
  );
  color: ${colors.dark};
  border-radius: 10px;
  font-size: 20px;
  outline: none;
`;

export const FilterButton = styled.button`
  height: 40px;
  padding: 0 5px;
  margin: 5px 5px 5px 0;
  background-image: linear-gradient(
    to top,
    ${colors.dark} -45%,
    ${colors.light}
  );
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  border: none;
  border-radius: 15px;
  outline: none;
  :hover {
    background-image: linear-gradient(
      to top,
      ${colors.dark} -35%,
      ${colors.signal}
    );
  }
`;
