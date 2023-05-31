import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const NavBar = () => {
  const Nav = styled.nav`
  .navbar-list {
    display: inline-flex;
    gap: 4.8rem;
  }
.navbar-list > li {list-style: none;}

.navbar-list > li > a {

  &:link,
  &:visited{
    display: inline-block;
    text-decoration: none;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.3s linear;}
}

.navbar-list > li > a {
  &:hover, &:active{
    color: ${({ theme }) => theme.colors.hover};}
}


  `;

  return (
    <Nav>
        <div className="menuIcon">
            <ul className="navbar-list">
            <li><NavLink className="navbar-link" to="/">Home</NavLink></li>
            <li><NavLink className="navbar-link" to="/about">About</NavLink></li>
            <li><NavLink className="navbar-link" to="/service">Services</NavLink></li>
            <li><NavLink className="navbar-link" to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </Nav>
  )
} 

export default NavBar
