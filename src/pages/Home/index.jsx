import React from "react";
import myImage from "../../../public/bg-home2.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <StyledHome>
      <Link to="store">
        <Btn>yes store</Btn>
      </Link>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${myImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Btn = styled.button`
  padding: 1rem 2rem;
  font-size: 2.25rem;
  position: absolute;
  top: 40%;
  right: 45%;
  border: 2px solid black;
  text-align: center;
  cursor: pointer;
  color: black /* ${({ theme }) => theme.colors.black} */;
  background-color: transparent;
  text-transform: uppercase;

  &::after,
  &::before {
    content: "";
    position: absolute;
    border: 2px solid black;
    width: calc(100% + 15px);
    height: 60px;
    transition: 0.3s ease;
  }

  &::after {
    top: -15px;
    left: -15px;
    border-right: none;
    border-bottom: none;
  }

  &::before {
    bottom: -15px;
    right: -15px;
    border-left: none;
    border-top: none;
  }

  &:hover:after,
  &:hover:before {
    width: calc(100% - 30px);
    height: 80px;
  }
`;
