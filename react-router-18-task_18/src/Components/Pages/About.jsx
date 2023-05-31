//import React from "react";
import MainSection from "../MainSection/MainSection"
import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";

//const About = (props) => {
//const data = {
//  name:"ABOUT CHIPS",
//  image:"./Images/About.jpg",
//};
//  return (
//<MainSection {...data}/>  
//  );
//};

const About = () => {
  const {updateAboutPage} = useGlobalContext()

useEffect(() => updateAboutPage(),[]);
  return <MainSection/>; 
 

};
export default About;









