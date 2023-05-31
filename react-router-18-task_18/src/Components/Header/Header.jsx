import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/Images/logo.jpg" className="logo"alt="logo" />
      </NavLink>
      <NavBar/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.  header_bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:6.4rem;


  .logo {
    display: inline-block;
  width: 60px;
  border-radius: 50%;
  border: 5px solid green;
  background-color: #fff;
  }
`;
export default Header;





