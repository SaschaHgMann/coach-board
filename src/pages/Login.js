import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Input from "../components/Input";
import StyledError from "../components/StyledError";

const Logo = styled.div`
  font-family: "Bahianita", "cursive";
  font-size: 60px;
  color: #fff8f0;
  text-shadow: 1px 1px 2px black, 0 0 5px #fff8f0;
  height: 80px;
  margin-top: 50px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
  width: 90px;
  background-color: #fff8f0;
  box-shadow: 3px 2px 4px rgba(255, 248, 240, 0.5);
`;

const Form = styled.form`
  margin-top: 350px;
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

function Login({ onLogin, history, activeCoach, ...props }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  console.log(activeCoach);

  //setActiveCoach({});

  function handleUsernameChange(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function validate() {
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Please put in a valid username";
    }
    if (password.length === 0) {
      errors.password = "Please put in a valid password";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }
    try {
      if (
        activeCoach.username === username &&
        activeCoach.password === password
      ) {
        history.replace("/sessions");
      } else {
        alert("wrong password");
      }
    } catch (e) {
      console.log(e);
    }
    // onLogin(username);
  }

  return (
    <Layout>
      <Logo>Coach Board</Logo>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          name="username"
          value={username}
          placeholder="Name of coach"
          type="text"
          onChange={handleUsernameChange}
        />
        {errors.username && <StyledError>{errors.username}</StyledError>}
        <StyledInput
          name="pw"
          value={password}
          placeholder="Enter your password"
          //type="password"
          onChange={handlePasswordChange}
        />
        {errors.password && <StyledError>{errors.password}</StyledError>}
        <StyledButton
          // to="/sessions"
          type="submit"
          onClick={() => onLogin(username)}
        >
          Login
        </StyledButton>
      </Form>
    </Layout>
  );
}

export default Login;
