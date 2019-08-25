import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Button } from "../components/Buttons";
import ButtonLink from "../components/ButtonLink";
import Container from "../components/Container";
import ContentBody from "../components/ContentBody";
import ContentFooter from "../components/ContentFooter";
import ContentHeader from "../components/ContentHeader";
import Devider from "../components/Devider";
import DropDown from "../components/DropDown";
import { CreateForm } from "../components/Forms";
import Header from "../components/Header";
import Headline from "../components/Headline";
import InfoLine from "../components/InfoLine";
import { Input, Textarea } from "../components/Inputs";
import Tag from "../components/Tag";
import categoryData from "../pages/mock/categories";
import MemberCard from "../components/MemberCard";
import { CreateError } from "../components/StyledErrors";

const StyledContentBody = styled(ContentBody)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const MembersContainer = styled.div`
  margin: 0;
  padding: 10px;
`;

function CreateSession({
  history,
  onPasteSession,
  groups,
  members,
  activeCoach,
  match,
  sessions,
  headTitle,
  formTitle,
  subTitle
}) {
  const [errors, setErrors] = React.useState({});
  const groupOptions = ["Select Group", ...groups];
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedGroup, setSelectedGroup] = React.useState("");
  const [sessionMembers, setSessionMembers] = React.useState(
    members.map(member => ({ ...member, attendet: false }))
  );
  const [attendetSessionMembers, setAttendetSessionMembers] = React.useState(
    []
  );

  const editSession =
    sessions &&
    match.params.id &&
    sessions.find(session => session._id === match.params.id);

  const [session, setSession] = React.useState({
    date: (editSession && editSession.date) || "",
    topic: (editSession && editSession.topic) || "",
    content: (editSession && editSession.content) || "",
    attendees: (editSession && editSession.attendees) || [],
    categories: (editSession && editSession.categories) || []
  });

  function handleAttendance(member) {
    const index = sessionMembers.findIndex(item => item._id === member._id);
    const newSessionMembers = sessionMembers.slice();
    const sessionMemberAtt = newSessionMembers[index];

    newSessionMembers[index] = {
      ...sessionMemberAtt,
      attendet: !sessionMemberAtt.attendet
    };
    setSessionMembers(newSessionMembers);
    setAttendetSessionMembers([sessionMemberAtt, ...attendetSessionMembers]);
  }

  function handleChange(event) {
    setSession({ ...session, [event.target.name]: event.target.value });
  }
  function handleCategoryChange() {
    setSession({ ...session, categories: selectedCategories });
  }
  function handleMemberChange() {
    setSession({ ...session, attendees: attendetSessionMembers });
  }
  /* eslint-disable*/
  React.useEffect(() => {
    setSession({ ...session, categories: selectedCategories });
  }, [selectedCategories]);
  React.useEffect(() => {
    setSession({ ...session, attendees: attendetSessionMembers });
  }, [attendetSessionMembers]);
  /* eslint-disable*/

  function renderGroupOptions(group) {
    return <option key={group}>{group}</option>;
  }

  function handleFilterMembers(event) {
    setSelectedGroup(event.target.value);
  }

  function renderGroupMember(member, index) {
    return (
      <MemberCard
        key={index}
        {...member}
        attendet={member.attendet}
        onClick={() => handleAttendance(member)}
      />
    );
  }

  function renderCategory(category) {
    return (
      <Tag
        key={category}
        active={selectedCategories.includes(category)}
        onClick={() => handleSelectCategory(category)}
      >
        {category}
      </Tag>
    );
  }

  function handleSelectCategory(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(item => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  function validate() {
    const errors = {};

    if (session.date === "") {
      errors.date = "Enter a session date please!";
    }
    if (session.topic === "") {
      errors.topic = "Enter a session topic please!";
    }
    if (session.content === "") {
      errors.content = "Leave informations for coaches please!";
    }
    if (selectedGroup === "" || selectedGroup === "Select Group") {
      errors.group = "Select correct group please!";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    session.group = selectedGroup;
    session.author = activeCoach.username;
    if (editSession) {
      session._id = editSession._id;
    }

    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    onPasteSession(session);
    history.replace("/sessions");
  }

  return (
    <>
      <Header title={headTitle} />
      <Container>
        <CreateForm onSubmit={handleSubmit}>
          <ContentHeader title={formTitle} />
          <StyledContentBody>
            <Headline size="Sub">{subTitle}</Headline>
            <Devider />
            <InfoLine>Select date</InfoLine>
            <Input
              type="date"
              name="date"
              value={session.date}
              onChange={handleChange}
            />
            {errors.date && <CreateError>{errors.date}</CreateError>}
            <DropDown
              name="group"
              value={session.group}
              onChange={event => handleFilterMembers(event)}
            >
              {groupOptions.map(group => renderGroupOptions(group))}
            </DropDown>
            {errors.group && <CreateError>{errors.group}</CreateError>}
            <InfoLine>
              Check attendance <i className="fas fa-user-check" />
            </InfoLine>
            <MembersContainer name="attendees" onChange={handleMemberChange}>
              {selectedGroup !== "Select Group"
                ? sessionMembers
                    .filter(member => member.group === selectedGroup)
                    .map((member, index) => renderGroupMember(member, index))
                : ""}
            </MembersContainer>
            <Input
              name="topic"
              value={session.topic}
              onChange={handleChange}
              placeholder="Topic of session"
            />
            {errors.topic && <CreateError>{errors.topic}</CreateError>}
            <Textarea
              name="content"
              value={session.content}
              onChange={handleChange}
              placeholder="Exercises, incidents & general informations for other coaches"
            />
            {errors.content && <CreateError>{errors.content}</CreateError>}
            <InfoLine>Choose Cathegories</InfoLine>
            <CategoryContainer
              name="categories"
              onChange={handleCategoryChange}
            >
              {categoryData.map(category => renderCategory(category))}
            </CategoryContainer>
            <Devider />
            <ButtonContainer>
              <ButtonLink to="/Sessions">
                <i className="fas fa-ban" />
              </ButtonLink>
              <Button>
                <i className="fas fa-plus-circle" />
              </Button>
            </ButtonContainer>
          </StyledContentBody>

          <ContentFooter>
            Thanks for teaching: {activeCoach.username}
          </ContentFooter>
        </CreateForm>
      </Container>
    </>
  );
}

CreateSession.propTypes = {
  group: PropTypes.string,
  topic: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  date: PropTypes.func,
  attendees: PropTypes.array
};

export default CreateSession;
