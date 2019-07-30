import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Headline from "../components/Headline";
import PropTypes from "prop-types";
import Devider from "../components/Devider";
import StyledTag from "../components/Tag";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";

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
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 5px;

  background-color: #fff8f0;
  border-radius: 10px;
`;

const StyledCardFooter = styled.div`
  margin: 0;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  color: #fff8f0;
`;

const Input = styled.input`
  margin: 0 10px 10px 10px;
  height: 30px;
  border: solid 2px #cecccc;
  border-radius: 3px;
  padding: 2px;
`;

const DropDown = styled.select`
  margin: 0 10px 10px 10px;
  height: 30px;
  border: solid 2px #cecccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  margin: 0 10px 10px 10px;
  height: 100px;
  border: solid 2px #cecccc;
  border-radius: 3px;
  padding: 2px;
`;

const TagList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 10px;
  margin-bottom: 10px;
`;

const InfoLine = styled.div`
  color: #cecccc;
  margin-top: 10px;
  padding-left: 10px;
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
          <InfoLine>Choose Group</InfoLine>
          <DropDown name="group">
            <option value="Bonsais">Bonsais</option>
            <option value="Kids">Kids</option>
            <option value="Youth">Youth</option>
            <option value="Adults">Adults</option>
          </DropDown>
          <InfoLine>Set Students</InfoLine>
          <DropDown name="students">
            <option value="memberArray">Array der Gruppe</option>
          </DropDown>
          <InfoLine>Topic</InfoLine>
          <Input name="topic" placeholder="Insert Topic" />
          <InfoLine>Details</InfoLine>
          <Textarea name="content" placeholder="Insert Details" />
          <InfoLine>Choose Kathegories</InfoLine>
          <TagList name="tags">
            <StyledTag>Koordination</StyledTag>
            <StyledTag>Kondition</StyledTag>
            <StyledTag>Basics</StyledTag>
            <StyledTag>Kata</StyledTag>
            <StyledTag>Kumite</StyledTag>
          </TagList>
        </StyledCardBody>
        <StyledCardFooter>
          <ButtonLink to="/">Cancel</ButtonLink>
          <Button>Add</Button>
        </StyledCardFooter>
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
