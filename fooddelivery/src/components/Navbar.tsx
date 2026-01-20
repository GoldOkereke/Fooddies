// comments explaining evrything that needs to happen
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//typescript
type NavItem = {
  label: string;
  href: string;
};
const navItems: NavItem[]=[
  {label: "Home", href:"/"},
]

//navbar component
function Navbar(){
  return(
    <nav>
      <div className= "flex">
        My app
      </div>
      <ul className="flex gap-6">
        <li className= "cursor-pointer">Home</li>
        <li className= "cursor-pointer">Browse Menu</li>
        <li className= "cursor-pointer">Special offers</li>
        <li className= "cursor-pointer">Restaurants</li>
        <li className= "cursor-pointer">Track Order</li>
        <li className= "cursor-pointer">Login/Signup</li>
      </ul>
    </nav>
  )
}

export default Navbar;