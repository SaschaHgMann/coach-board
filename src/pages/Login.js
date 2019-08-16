import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import ButtonLink from "../components/ButtonLink";
import Input from "../components/Input";

const StyledButtonLink = styled(ButtonLink)`
  margin: 20px;
  width: 90px;
  background-color: #fff8f0;
  box-shadow: 3px 2px 4px rgba(255, 248, 240, 0.5);
`;

const Form = styled.form`
  margin-top: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* border: solid 2px #fff8f0; */
`;

const StyledInput = styled(Input)`
  margin: 10px;
  padding: 10px;
  width: 80%;
  border-radius: 20px;
`;

function Login(history, onLogin, coaches) {
  const [coach, setCoach] = React.useState({
    name: "",
    pw: ""
  });

  function handleChange(event) {
    setCoach({ ...coach, [event.target.name]: event.target.value });
    console.log(coach);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // if (coach.name === coaches.name) {
    //   if (coach.pw === coaches.pw) {
    //     return;
    //   }
    // }

    onLogin(coach);
    history.replace("/sessions");
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          placeholder="Name of coach"
          type="text"
          onChange={handleChange}
        />
        <StyledInput
          name="pw"
          placeholder="Enter password please"
          //type="password"
          onChange={handleChange}
        />
        <StyledButtonLink to="/sessions">Login</StyledButtonLink>
      </Form>
    </Layout>
  );
}

export default Login;
