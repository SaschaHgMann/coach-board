import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Headline from "../components/Headline";
import PropTypes from "prop-types";
import Devider from "../components/Devider";
import Tag from "../components/Tag";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import ContentHeader from "../components/ContentHeader";
import ContentBody from "../components/ContentBody";
import ContentFooter from "../components/ContentFooter";
import Form from "../components/Form";
import Input from "../components/Input";
import DropDown from "../components/DropDown";
import Textarea from "../components/Textarea";
import InfoLine from "../components/InfoLine";
import categories from "./category-data";

const StyledContentBody = styled(ContentBody)`
  display: flex;
  flex-direction: column;
`;

const StyledContentFooter = styled(ContentFooter)`
  justify-content: space-between;
`;

const TagList = styled.div`
  display: flex;
  padding-left: 10px;
  margin-bottom: 10px;
`;

function CreateSession({ history, onCreateSession }) {
  const [selectedCategories, setSelectedCategories] = React.useState([]);

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

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const sessionCard = {
      group: form.group.value,
      topic: form.topic.value,
      content: form.content.value,
      categories: selectedCategories
    };

    onCreateSession(sessionCard);
    history.replace("/");
  }

  return (
    <>
      <Header title="Add Session" />
      <Form onSubmit={handleSubmit}>
        <ContentHeader title="Add a new Training Session" />
        <StyledContentBody>
          <Headline size="Sub">Please fill in Details</Headline>
          <Devider />
          <InfoLine>Choose Group</InfoLine>
          <DropDown name="group">
            <option value="">select</option>
            <option value="">---</option>
            <option value="Bonsais">Bonsais</option>
            <option value="Kids">Kids</option>
            <option value="Youth">Youth</option>
            <option value="Seniors">Seniors</option>
          </DropDown>
          <InfoLine>Set Students</InfoLine>
          <DropDown name="students">
            {" "}
            {/* placeholder*/}
            <option value="memberArray">Array der Gruppe</option>
          </DropDown>
          <InfoLine>Topic</InfoLine>
          <Input name="topic" placeholder="Insert Topic" />
          <InfoLine>Details</InfoLine>
          <Textarea name="content" placeholder="Insert Details" />
          <InfoLine>Choose Kathegories</InfoLine>
          <TagList name="categories">
            {categories.map(category => renderCategory(category))}
          </TagList>
        </StyledContentBody>
        <StyledContentFooter>
          <ButtonLink to="/Sessions">Cancel</ButtonLink>
          <Button>Add</Button>
        </StyledContentFooter>
      </Form>
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
