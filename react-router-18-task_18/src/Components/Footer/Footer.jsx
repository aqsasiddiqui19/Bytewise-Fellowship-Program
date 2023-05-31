import React from "react";
//import { Button } from "../../Style/Button";
//import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Food Industry</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input className="input"
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" 
              className="submit-button"
              value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">

              <div>
              <a href="https://www.facebook.com/">
                <FaFacebook className="icons" />     
                </a>

              </div>

              <div>
              <a href="https://www.instagram.com/">
                <FaInstagram className="icons" />     </a>

              </div>

              <div>
                <a href="https://twitter.com/">
                  <FaTwitter className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <h3>+92-2668782689</h3>

          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Food Industry. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
      </Wrapper>
  );
};

const Wrapper = styled.section`

  footer {
    padding: 15rem 0 15rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
 
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

 .footer-subscribe{

  .input{
    margin-right:5px;
   }   
  .submit-button {
    width: 150px;
    color:black;
    border:2px solid lightblue;
    &:hover {
      background-color: rgb(125, 173, 240);
      color: white;}
  }
 }   
 
 .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer
