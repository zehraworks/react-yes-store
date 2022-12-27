import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Product({ name, img, price, id }) {
  return (
    <Link to={`product/${id}`}>
      <Card>
        <Img src={`/public/images/${img}`} />
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </Card>
    </Link>
  );
}

const Img = styled.img`
  transition: transform ease-in-out 0.3s;
  overflow: hidden;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 16rem;
  margin: 1rem 1.5rem;
  gap: 1rem;
  overflow: hidden;
  &:hover ${Img} {
    transform: scale(1.15);
  }
`;
