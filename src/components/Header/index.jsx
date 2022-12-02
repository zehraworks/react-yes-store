import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Diamond } from "@styled-icons/ionicons-solid/Diamond";
import { Bag } from "@styled-icons/bootstrap/Bag";
import { Search } from "styled-icons/bootstrap";

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <StyledBrand to="/">
          <StyledDiamond />
          <StyledBrandText>
            <BrandMini>She said</BrandMini>
            <Brand>YES</Brand>
          </StyledBrandText>
        </StyledBrand>
        <Navbar>
          <NavbarLink to="store">Store</NavbarLink>
          <NavbarLink to="search"><StyledSearch/></NavbarLink>
          <NavbarLink to="bag"><StyledBag/></NavbarLink>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
}

const StyledDiamond = styled(Diamond)`
  height: 4.5rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
`;
const StyledSearch = styled(Search)`
  height: 2rem;
`;

const Brand = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledBrand = styled(Link)`
  display: flex;
`;

const StyledBrandText = styled.div`
  display: flex;
  flex-direction: column;
`;
const BrandMini = styled.p`
  font-size: 1rem;
  margin-bottom: -0.3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledBag = styled(Bag)`
    height: 2rem;
`

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 9px 8px -7px rgba(0, 0, 0, 0.75);
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 1rem 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;


const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.7rem;
  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`;

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background: linear-gradient(currentColor 0 0) 0 0,
    linear-gradient(currentColor 0 0) 0 0,
    linear-gradient(currentColor 0 0) 100% 100%,
    linear-gradient(currentColor 0 0) 100% 100%;
  background-size: var(--d, 0) 3px, 3px var(--d, 0);
  background-repeat: no-repeat;
  transition: 0.5s;
  &:hover {
    --d: 100%;
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
