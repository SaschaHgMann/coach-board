import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Container from "../components/Container";
import { CreateForm } from "../components/Forms";
import ContentHeader from "../components/ContentHeader";
import ContentBody from "../components/ContentBody";
import Headline from "../components/Headline";
import Devider from "../components/Devider";
import { Input } from "../components/Inputs";
import DropDown from "../components/DropDown";
import { Button } from "../components/Buttons";
import ContentFooter from "../components/ContentFooter";
import { CreateError } from "../components/StyledErrors";
import uuid from "uuid/v4";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;

const MemberAddForm = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

function Settings({ history, groups, members, match, onPasteMember }) {
  const [errors, setErrors] = React.useState({});
  const groupOptions = ["Select Group", ...groups];
  const [selectedGroup, setSelectedGroup] = React.useState("");

  const [member, setMember] = React.useState({
    _id: uuid(),
    name: "",
    birthdate: "",
    belt: ""
  });

  function renderGroupOptions(group) {
    return <option key={group}>{group}</option>;
  }

  function handleSelectGroup(event) {
    setSelectedGroup(event.target.value);
  }

  function handleChange(event) {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  function validate() {
    const errors = {};

    if (member.name === "") {
      errors.name = "Enter full name please!";
    }
    if (member.belt === "") {
      errors.belt = "Fill in color of belt please!";
    }
    if (member.age === "") {
      errors.age = "Fill in color of belt please!";
    }
    if (selectedGroup === "" || selectedGroup === "Select Group") {
      errors.group = "Select correct group please!";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    member.group = selectedGroup;

    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    onPasteMember(member);
    history.replace("/members");
  }

  return (
    <>
      <Header title="Settings" />
      <Container>
        <CreateForm onSubmit={handleSubmit}>
          <ContentHeader title="New Member" />
          <ContentBody>
            <Headline size="Sub">Create a new Member</Headline>
            <MemberAddForm>
              <Devider />
              <Input
                type="text"
                name="name"
                value={member.name}
                onChange={handleChange}
                placeholder="Firstname Lastname"
              />
              {errors.name && <CreateError>{errors.name}</CreateError>}
              <Input
                type="number"
                name="age"
                value={member.age}
                onChange={handleChange}
                placeholder="Age (e.g. 10...)"
              />

              {errors.age && <CreateError>{errors.age}</CreateError>}

              <DropDown
                name="group"
                value={member.group}
                onChange={event => handleSelectGroup(event)}
              >
                {groupOptions.map(group => renderGroupOptions(group))}
              </DropDown>
              {errors.group && <CreateError>{errors.group}</CreateError>}
              <Input
                type="text"
                name="belt"
                placeholder="Belt (e.g. white, yellow ...)"
                value={member.belt}
                onChange={handleChange}
              />
              {errors.belt && <CreateError>{errors.belt}</CreateError>}
              <Devider />
              <ButtonContainer>
                <Button>
                  <i className="fas fa-plus-circle" />
                </Button>
              </ButtonContainer>
            </MemberAddForm>
          </ContentBody>
          <ContentFooter />
        </CreateForm>
      </Container>
    </>
  );
}

Settings.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Settings;
