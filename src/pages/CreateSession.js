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

const StyledContentBody = styled(ContentBody)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TagList = styled.div`
  display: flex;
  padding-left: 10px;
  margin-bottom: 10px;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
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
            <InfoLine>Choose Group</InfoLine>
            <DropDown name="group">
              <option value="">Select Group</option>
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
              <option value="memberArray">Students</option>
            </DropDown>
            <InfoLine>Topic</InfoLine>
            <Input name="topic" placeholder="Insert Topic" />
            <InfoLine>Details</InfoLine>
            <Textarea name="content" placeholder="Insert Details" />
            <InfoLine>Choose Kathegories</InfoLine>
            <TagList name="categories">
              {categories.map(category => renderCategory(category))}
            </TagList>
            <Devider />
            <FormButtons>
              <ButtonLink to="/Sessions">
                <i className="fas fa-ban" />
              </ButtonLink>
              <Button>
                <i className="fas fa-plus-circle" />
              </Button>
            </FormButtons>
          </StyledContentBody>

          <ContentFooter>author date</ContentFooter>
        </Form>
        <></>
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
  students: PropTypes.func
};

export default CreateSession;
