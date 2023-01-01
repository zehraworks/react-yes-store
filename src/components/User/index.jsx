import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../firebase.config";
import { logout as logoutHandle } from "../../redux/auth/auth";
import { useNavigate } from "react-router";

export function User() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/account", {
      replace: true,
    });
  };

  if (user) {
    return (
      <StyledContainer>
        <Text>You are logged in: {user.email}</Text>
        <Btn onClick={handleLogout}>Logout</Btn>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
    display: flex;
    margin: 30px;
`
const Text = styled.h1`
    font-size: 30px;
    font-weight: 400;
    margin-right: 20px;
`
const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 10px;
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  border-style: none;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }
`;