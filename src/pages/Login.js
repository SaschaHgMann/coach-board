import React from "react";
import styled from "styled-components";
import { Input } from "../components/Inputs";
import { LoginError } from "../components/StyledErrors";
import { LoginButton } from "../components/Buttons";
import { LoginForm } from "../components/Forms";

const Logo = styled.div`
  font-family: "Bahianita", "cursive";
  font-size: 60px;
  color: #fff8f0;
  text-shadow: 1px 1px 2px black, 0 0 5px #fff8f0;
  height: 80px;
  margin-top: 20px;
  padding-right: 12%;
`;

const LogoSVG = styled.img`
  height: 60px;
  color: #fff8f0;
  text-shadow: 1px 1px 2px black, 0 0 5px #fff8f0;
`;

const StyledInput = styled(Input)`
  margin: 5px;
  padding: 10px;
  width: 80%;
  border-radius: 20px;
`;

function Login({ onLogin, history, activeCoach }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

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
      errors.username = "Please enter a valid username";
    }
    if (password.length === 0) {
      errors.password = "Please enter a valid password";
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
  }

  return (
    <>
      <Logo>
        <LogoSVG src="/Board_Logo.svg" />
        Coach Board
      </Logo>
      <LoginForm onSubmit={handleSubmit}>
        {errors.username && <LoginError>{errors.username}</LoginError>}
        {errors.password && <LoginError>{errors.password}</LoginError>}
        <StyledInput
          name="username"
          value={username}
          placeholder="Coach Login"
          type="text"
          onChange={handleUsernameChange}
        />
        <StyledInput
          name="pw"
          value={password}
          placeholder="Enter your password"
          type="password"
          onChange={handlePasswordChange}
        />
        <LoginButton type="submit" onClick={() => onLogin(username)}>
          Login
        </LoginButton>
      </LoginForm>
    </>
  );
}

export default Login;
