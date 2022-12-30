import React from "react";
import { LogIn } from "../../components/LogIn";
import { Register } from "../../components/Register";
import styled from "styled-components";

export function Account() {
  return (
    <StyledAccount>
      <LogIn />
      <Register />
    </StyledAccount>
  );
}

const StyledAccount = styled.div`
  display: flex;
`;
