import React from "react";
import { Outlet } from "react-router-dom";

export function ProductsLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
