import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../../firebase.config";
import { useNavigate } from "react-router";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/store", {
        replace: true,
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Welcome Back</Title>
        <Paragraph>Login your account</Paragraph>
        <Input
          type="text"
          placeholder="email adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Login disabled={!email || !password} type="submit">
          Login
        </Login>
      </Form>
    </Container>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 500px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 35px;
  font-weight: 500;
`;
const Paragraph = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 5px;
  &:hover {
    border-style: solid;
    border-radius: 3px;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    outline: none;
    border-radius: 3px;
    border-color: ${({ theme }) => theme.colors.primary};
    border-style: solid;
  }
`;
const Login = styled.button`
  width: 300px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }
  color: white;
  border-style: none;
  border-radius: 3px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
