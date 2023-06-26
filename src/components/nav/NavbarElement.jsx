import React from 'react'
import { NavLink } from "react-router-dom";

function NavbarElement(props) {
  const { children, ...attrs } = props;
  const { link, text, ...restAttrs } = attrs;

  return (
    <NavLink to={link} className="btn btn-accent btn-outline normal-case nav-link" {...restAttrs} > {children} </NavLink>
  )
}

export default NavbarElement