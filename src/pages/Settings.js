import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import { SessionForm } from "../components/Forms";
import ContentHeader from "../components/ContentHeader";
import ContentBody from "../components/ContentBody";
import Headline from "../components/Headline";
import Devider from "../components/Devider";
import { Input } from "../components/Inputs";
import InfoLine from "../components/InfoLine";
import DropDown from "../components/DropDown";
// import ButtonContainer from "../components/ButtonContainer";
import { Button } from "../components/Buttons";
import ContentFooter from "../components/ContentFooter";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

function Settings({ history, groups, members, match, onPasteMember }) {
  const groupOptions = ["Select Group", ...groups];
  const [selectedGroup, setSelectedGroup] = React.useState("");

  const editMember =
    members &&
    match.params.id &&
    members.find(member => member._id === match.params.id);

  const [member, setMember] = React.useState({
    name: (editMember && editMember.name) || "",
    birthdate: (editMember && editMember.birthdate) || "",
    belt: (editMember && editMember.belt) || ""
    // group: ""
  });
  //console.log(member);
  function renderGroupOptions(group) {
    return <option key={group}>{group}</option>;
  }

  function handleSelectGroup(event) {
    setSelectedGroup(event.target.value);
  }

  function handleChange(event) {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    member.group = selectedGroup;
    //   if (editMember) {
    //     member._id = editMember._id;
    //   }

    //   const errors = validateNewMember();

    //   if (errors) {
    //     setErrors(errors);
    //     return;
    //   }

    onPasteMember(member);
    console.log(member);
    history.replace("/members");
  }

  return (
    <>
      <Header title="Settings" />
      <Container>
        <SessionForm onSubmit={handleSubmit}>
          <ContentHeader title="New Member" />
          <ContentBody>
            <Headline size="Sub">Create a new Member</Headline>
            <Devider />
            <Input
              type="text"
              name="name"
              value={member.name}
              onChange={handleChange}
              placeholder="Firstname Lastname"
            />
            <InfoLine>Birthdate</InfoLine>
            <Input
              type="date"
              name="birthdate"
              value={member.birthdate}
              onChange={handleChange}
            />
            <DropDown
              name="group"
              value={member.group}
              onChange={event => handleSelectGroup(event)}
            >
              {groupOptions.map(group => renderGroupOptions(group))}
            </DropDown>

            <Input
              type="text"
              name="belt"
              placeholder="Belt (e.g. white, yellow ..."
              value={member.belt}
              onChange={handleChange}
            />
            <Devider />
            <ButtonContainer>
              <Button>
                <i className="fas fa-ban" />
              </Button>
              <Button>
                <i className="fas fa-plus-circle" />
              </Button>
            </ButtonContainer>
          </ContentBody>
          <ContentFooter />
        </SessionForm>
      </Container>
    </>
  );
}

export default Settings;
