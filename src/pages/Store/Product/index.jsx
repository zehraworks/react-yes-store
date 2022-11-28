import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export function Product({ name, img, price }) {
  const { productId } = useParams();
  return (
    <Card>
      <img src={img} />
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 16rem;
  margin: 1rem 1.5rem;
`;
