import React from "react";
import { useParams } from "react-router-dom";

export function Product() {
  const { productId } = useParams();
  console.log(productId);
  return <h1>Product : {productId}</h1>;
}
