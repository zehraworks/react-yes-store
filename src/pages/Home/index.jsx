import React from "react";
import myImage from "../../../public/bg-home2.jpg";
import styled from "styled-components";

export function Home() {
  return (
    <StyledHome>
      <Btn>yes store</Btn>
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
  background-position: 15% 75%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Btn = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  position: absolute;
  top:50%;
  border: 2px solid black;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  background-color: transparent;
  text-transform: uppercase;

  &::after,
  &::before {
    content: "";
    position: absolute;
    border: 2px solid black;
    width: calc(100% + 15px);
    height: 60px;
    transition: 0.5s ease;
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

/* const Photo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  background-image: url(${myImage});
  background-repeat: no-repeat;
  position: fixed;
  top: -200px;
  left: 0;

  min-height: 100%;
  min-width: 320px;

  width: 100%;
  height: auto;

`;
 */
