import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Diamond } from "@styled-icons/ionicons-solid/Diamond";

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
          <NavbarLink to="search">Search</NavbarLink>
          <NavbarLink to="bag">Bag</NavbarLink>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
}

const StyledDiamond = styled(Diamond)`
  height: 4.5rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
`;

const Brand = styled.h1`
  font-size: 3rem;
`;

const StyledBrand = styled(Link)`
  display: flex;
`;

const StyledBrandText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dark};
`;
const BrandMini = styled.p`
  font-size: 1rem;
`;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
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
  justify-content: space-between;
  gap: 7rem;
  font-size: 1.7rem;
  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`;

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  background: linear-gradient(90deg, #000 50%, #fff 0),
    linear-gradient(-90deg, #000 50%, #fff 0),
    linear-gradient(90deg, #0000 50%, #000 0),
    linear-gradient(-90deg, #0000 50%, #000 0);
  background-repeat: no-repeat;
  background-size: 200% 51%;
  background-position: top left, bottom right;
  -webkit-background-clip: text, text, padding-box, padding-box;
  background-clip: text, text, padding-box, padding-box;
  transition: 0.8s;
  &:hover {
    background-position: top right, bottom left;
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
