import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ShoppingBag } from "../../components/ShoppingBag";
import { User } from "../../components/User";

export function Bag() {
  const bagValue = useSelector((state) => state.bag.value);
  return (
    <StyledContainer>
      <User />
      <Products>Products</Products>
      <ShoppingBag/>
      {bagValue}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`

const Products = styled.h2`
  font-size: 25px;
  font-weight: 600;
`