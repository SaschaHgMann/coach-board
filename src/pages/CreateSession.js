import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Headline from "../components/Headline";
import PropTypes from "prop-types";
import Devider from "../components/Devider";

const StyledForm = styled.form`
  margin: 10px;
  border: solid 2px #292929;
  border-radius: 10px;
  background-color: #cecccc;
`;

const StyledCardHeader = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #cecccc;
  border-radius: 10px;
`;

const StyledCardBody = styled.div`
  margin: 0px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  background-color: #fff8f0;
  border-radius: 10px;
`;

const Input = styled.input`
  margin: 10px;
  height: 30px;
  border: solid 2px #cecccc;
  border-radius: 3px;
`;

const DropDown = styled.select`
  margin: 10px;
  height: 30px;
  border: solid 2px #cecccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  margin: 10px;
  height: 100px;
  border: solid 2px #cecccc;
  border-radius: 3px;
`;

function CreateSession() {
  return (
    <>
      <Header title="Add Session" />
      <StyledForm>
        <StyledCardHeader>
          <Headline size="Main">Add a new Training Session</Headline>
        </StyledCardHeader>
        <StyledCardBody>
          <Headline size="Sub">Please fill in Details</Headline>
          <Devider />
          <Input name="topic" placeholder="Insert Topic" />
          <DropDown name="group" placeholder="Gr - Dropdown">
            <option value="Bonsais">Bonsais</option>
            <option value="Kids">Kids</option>
            <option value="Youth">Youth</option>
            <option value="Adults">Adults</option>
          </DropDown>
          <Input name="group" placeholder="Gr - Dropdown" />
          <Textarea name="content" placeholder="Insert Details" />
          Choose Checkboxes...
        </StyledCardBody>
      </StyledForm>
    </>
  );
}

CreateSession.propTypes = {
  group: PropTypes.string,
  topic: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.func,
  date: PropTypes.func,
  students: PropTypes.func
};

export default CreateSession;
