import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Style/Button";
import { useGlobalContext } from "../Context/Context";

//import { useContext } from "../Context/Context";
//import { useGlobalContext } from "../Context/Context";

//const MainSection = (props) => {}
 // const firstName = useContext{AppContext}
 // const firstName = useGlobalContext();

const MainSection = () =>{
  const {name, image, main} = useGlobalContext();

  return(
  <Wrapper>
<div className="container grid grid-two-column">

<div className="section-main-data">
<p className="main-top-data">top para</p>
<h1 className="main-heading">{name}</h1>
<p className="main-para">{main}</p>
<Button className="btn">
   <NavLink to="/contact">Hire</NavLink>
 </Button>
 </div>


<div className="section-main-image">
  <picture>
    < img src={image}
    alt="img" 
     className="main-img"/>
  </picture>
</div>
</div>
  </Wrapper>
)};

const Wrapper = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

padding: 9rem 0;
  .section-main-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  }

  .btn {
    max-width: 80px;
    height:50px;
    color:black;
    border:2px solid lightblue;
    &:hover {
      background-color: rgb(125, 173, 240);
      color: white;}


 }
  .main-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.hover};
    font-family: 'Poppins', sans-serif;

  }
  .main-heading {
    text-transform: uppercase;
    font-size: 5.4rem;
    font-family: 'Poppins', sans-serif;

  }
  .main-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color:black;
    font-family: 'Poppins', sans-serif;
    font-weight:800;

  }
  .section-main-image {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:100%;

  }
  picture {
    text-align: center;
  }
  .main-img {
    width:100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {gap: 7.2rem;

    }
  }
`;

export default MainSection;

 


