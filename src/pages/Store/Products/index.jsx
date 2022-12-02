import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../Product/index.jsx";
import data from "../../../data/data.js";

export function Products() {
  return (
    <CardsWrapper>
      {data.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
        />
      ))}
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
