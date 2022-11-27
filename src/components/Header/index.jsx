import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Diamond } from "@styled-icons/ionicons-solid/Diamond";

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Link to="/">
          <StyledDiamond />
          <Brand>YES</Brand>
        </Link>
        <Navbar>
          <NavbarLink to="store">Store</NavbarLink>
          <NavbarLink to="search">Search</NavbarLink>
          <NavbarLink to="bag">Bag</NavbarLink>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
}

const StyledDiamond = styled(Diamond)`
    height: 4rem;
    color: ${({ theme }) => theme.colors.light};
`;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`; 

 const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const Brand = styled.h1`
    font-size: 5rem;
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  font-size: 2.4rem;
  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`;

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

/* const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.02);
  }
`;

const Quantity = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 2rem;
  font-weight: bold;
`;
 */