import React from 'react'
import { NavLink } from "react-router-dom";
import "./style.css";



export default function NavLinkCustom(props) {
  return (
    <NavLink
    exact="true"
    to={props.to}
    className={(navData) =>
      navData.isActive ? "active-style" : "inactive-style"
    }
  >
    {props.text}
  </NavLink>
  )
}
