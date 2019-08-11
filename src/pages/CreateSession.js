import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Container from "../components/Container";
import ContentBody from "../components/ContentBody";
import ContentFooter from "../components/ContentFooter";
import ContentHeader from "../components/ContentHeader";
import Devider from "../components/Devider";
import DropDown from "../components/DropDown";
import Form from "../components/Form";
import Header from "../components/Header";
import Headline from "../components/Headline";
import InfoLine from "../components/InfoLine";
import Input from "../components/Input";
import Tag from "../components/Tag";
import Textarea from "../components/Textarea";
import categories from "./category-data";
import MemberCard from "../components/MemberCard";
import StyledError from "../components/StyledError";

const StyledContentBody = styled(ContentBody)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TagList = styled.div`
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

const Members = styled.div`
  margin: 0;
  padding: 10px;
`;

function CreateSession({ history, onCreateSession, groups, members }) {
  const [session, setSession] = React.useState({
    attendees: [],
    topic: "",
    content: "",
    categories: []
  });

  const groupOptions = ["Select Group", ...groups];
  const [selectedGroup, setSelectedGroup] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [sessionMembers, setSessionMembers] = React.useState(
    members.map(member => ({ ...member, attendet: false }))
  );
  const [attendetSessionMember, setAttendetSessionMember] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  function handleAttendance(member) {
    const indexSelected = sessionMembers.findIndex(
      item => item._id === member._id
    );
    const newSessionMembers = sessionMembers.slice();
    const sessionMember = newSessionMembers[indexSelected];

    newSessionMembers[indexSelected] = {
      ...sessionMember,
      attendet: !sessionMember.attendet
    };
    setSessionMembers(newSessionMembers);
    setAttendetSessionMember([sessionMember, ...attendetSessionMember]);
  }

  function handleChange(event) {
    setSession({ ...session, [event.target.name]: event.target.value });
  }

  function handleCategoryChange() {
    setSession({ ...session, categories: selectedCategories });
  }

  function handleMemberChange() {
    setSession({ ...session, attendees: attendetSessionMember });
  }

  React.useEffect(() => {
    setSession({ ...session, categories: selectedCategories });
  }, [selectedCategories]);

  React.useEffect(() => {
    setSession({ ...session, attendees: attendetSessionMember });
  }, [attendetSessionMember]);

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
        name={member.name}
        group={member.group}
        age={member.age}
        rank={member.rank}
        status={member.attendet}
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

    if (session.topic === "") {
      errors.topic = "Enter a session topic plase!";
    }

    if (session.content === "") {
      errors.content = "Leave informations for coaches please!";
    }

    if (session.group === "") {
      errors.group = "Select correct group please!";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    session.group = selectedGroup;

    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    onCreateSession(session);
    history.replace("/sessions");
  }

  return (
    <>
      <Header title="New Session" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <ContentHeader title="Add a new Training Session" />
          <StyledContentBody>
            <Headline size="Sub">Please fill in Details</Headline>
            <Devider />
            <DropDown
              name="group"
              onChange={event => handleFilterMembers(event)}
            >
              {groupOptions.map(group => renderGroupOptions(group))}
            </DropDown>
            {errors.group && <StyledError>{errors.group}</StyledError>}
            <InfoLine>
              Check attendance <i className="fas fa-user-check" />
            </InfoLine>
            <Members name="attendees" onChange={handleMemberChange}>
              {selectedGroup !== "Select Group" && selectedGroup !== "---"
                ? sessionMembers
                    .filter(member => member.group === selectedGroup)
                    .map((member, index) => renderGroupMember(member, index))
                : ""}
            </Members>
            {/* <InfoLine>Topic</InfoLine> */}
            <Input
              name="topic"
              onChange={handleChange}
              placeholder="Topic of session"
            />
            {errors.topic && <StyledError>{errors.topic}</StyledError>}
            {/* <InfoLine>Details</InfoLine> */}
            <Textarea
              name="content"
              onChange={handleChange}
              placeholder="Exercises, incidents & general informations for other coaches"
            />
            {errors.content && <StyledError>{errors.content}</StyledError>}
            <InfoLine>Choose Cathegories</InfoLine>
            <TagList name="categories" onChange={handleCategoryChange}>
              {categories.map(category => renderCategory(category))}
            </TagList>
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

          <ContentFooter>author, date</ContentFooter>
        </Form>
      </Container>
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
  attendees: PropTypes.array
};

export default CreateSession;
