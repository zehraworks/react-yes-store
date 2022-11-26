import React from 'react'
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <NavLink to="/">
        Home
       {/*  <img
          src=
          alt="logo"
        /> */}
      </NavLink>
      <NavLink to="store">Store</NavLink>
      <NavLink to="search">Search</NavLink>
      <NavLink to="bag">Bag</NavLink>
    </div>
  );
}
