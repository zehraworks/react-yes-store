import React, { useState } from "react";
import styled from "styled-components";
import { register } from "../../firebase.config";
import { Toaster } from "react-hot-toast";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };

  return (
    <Container>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <Title>Register</Title>
        <Paragraph>Create your account</Paragraph>
        <Input
          type="text"
          placeholder="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
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
        <Input
          type="password"
          placeholder="confirm password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Signup disabled={!email || !password} type="submit">
          Sign Up
        </Signup>
      </Form>
    </Container>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 500px;
`;

const Title = styled.h1`
  margin: 10px 0 10px 0;
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
const Signup = styled.button`
  width: 300px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-style: none;
  border-radius: 3px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
