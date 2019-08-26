import styled from "styled-components";

export const Input = styled.input`
  margin: 5px 10px 10px 10px;
  height: 40px;
  border: solid 2px #cecccc;
  border-radius: 3px;
  padding: 3px;
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  overflow-x: auto;
  outline: none;
`;

export const Textarea = styled.textarea`
  margin: 5px 10px 10px 10px;
  height: 100px;
  border: solid 2px #cecccc;
  border-radius: 3px;
  padding: 3px;
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  outline: none;
`;

export const SearchInput = styled(Input)`
  position: absolute;
  top: 70px;
  margin: 0;
  padding: 10px;
  width: 80%;
  border-radius: 20px;
  outline: none;
`;
