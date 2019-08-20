import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import styled from "styled-components";
import Fuse from "fuse.js";
import Container from "../components/Container";
import SessionCard from "../components/SessionCard";

const SearchInput = styled(Input)`
  position: absolute;
  top: 70px;
  margin: 0;
  padding: 10px;
  width: 80%;
  border-radius: 20px;
`;

const StyledContainer = styled(Container)`
  margin-top: 140px;
  padding: 0;
`;

function Search({ sessions, onDeleteSession, history }) {
  const [input, setInput] = React.useState("");
  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }
  const options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["group", "topic", "content", "categories"] //date??!!??
  };
  const fuse = new Fuse(sessions, options);
  const result = fuse.search(input);

  return (
    <>
      <Header title="Search" />
      <SearchInput
        type="search"
        placeholder="What are you looking for?"
        onChange={handleChange}
      />
      <StyledContainer>
        {result.map((sessionCard, index) => (
          <SessionCard
            key={index}
            id={sessionCard._id}
            group={sessionCard.group}
            topic={sessionCard.topic}
            content={sessionCard.content}
            categories={sessionCard.categories}
            attendees={sessionCard.attendees}
            date={sessionCard.date}
            author={sessionCard.author}
            onDeleteSession={() => onDeleteSession(sessionCard._id)}
            history={history}
          />
        ))}
      </StyledContainer>
    </>
  );
}

export default Search;
