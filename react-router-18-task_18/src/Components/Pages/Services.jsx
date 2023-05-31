//import React from 'react'
//import { useGlobalContext } from "../Context/Context";  padding: 9rem 0 5rem 0;

import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Button } from "../../Style/Button";
import styled from "styled-components";
import ServiceAPI from "../../API/ServiceAPI"

const Service = () => {
  const [serviceData] = useState(ServiceAPI);
return (
      <Wrapper className="section">
        <h2 className="common-heading">Our Services</h2>
        <div className="container grid grid-three-column">
          {serviceData.map((curElem) => {
            const { id, name, url, description } = curElem;
            return (
              <div key={id} className="card">
              <figure>
                <img src={url} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>{description}</p>
                  <NavLink to="/service">
                    <Button className="btn">Read More</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  };
  
  const Wrapper = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    font-family: 'Poppins', sans-serif;

  }
.common-heading{
  margin:4rem 4rem;
  font-family: 'Poppins', sans-serif;

}
  .card {
    border: 0.1rem solid black;
    margin-bottom:4rem;
gap:2rem;
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      font-family: 'Poppins', sans-serif;

    }
    .btn {
     margin: 2rem auto;
     border:2px solid lightblue;
     justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      padding:2rem;
      font-family: 'Poppins', sans-serif;

      &:hover {
        background-color: rgb(125, 173, 240);
        color: white;
      
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Service;
