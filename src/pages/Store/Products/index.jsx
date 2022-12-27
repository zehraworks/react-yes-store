import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../Product/index.jsx";
import { db } from "../../../firebase.config";
import { ref, onValue } from "firebase/database";

export function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    onValue(ref(db, `/products`), (snapshot) => {
      setData(snapshot.val());
    });
  }, []);
  return (
    <CardsWrapper>
      {data?.map((product) => (
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
