import MainSection from '../MainSection/MainSection';
import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";


//const Home = () => {
 // const data = {
 //   name:"HOME",
 //   image:"./Images/image.jpg",
 // };

 // return <MainSection {...data}/>; 
  
//};

const Home = () => {
  const {updateHomePage} = useGlobalContext();

useEffect(() => updateHomePage(),[]);

return (<div>
<MainSection/>
</div>)
;

};
export default Home;
