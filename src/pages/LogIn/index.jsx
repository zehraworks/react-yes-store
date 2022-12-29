import React, { useState } from "react";
import styled from "styled-components";
import { register } from "../../firebase.config";
import { Toaster } from "react-hot-toast";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };

  return (
    <Container>
      <Toaster/>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-red-400"
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button disabled={!email || !password} type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  height: 50vh;
  width: 500px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
