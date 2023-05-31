import { createContext, useContext,useReducer} from "react";
import reducer from "../Reducer/Reducer";

const AppContext = createContext();
   
    const AppProvider = ({children}) => {
  const initialState={
            name:"",
            image:"",
            main:"",

        }

const updateHomePage = () => {
    return dispatch(
        {
            type: "HOME_UPDATE",
            payload: {
                name:"EDIBLE FATS & OIL INDUSTRY",
                image:"./Images/Home.jpg",
                main:"Keep Your Family Safe",
             
            },       
 });
};

const updateAboutPage = () => {
    return dispatch(
        {
            type: "ABOUT_UPDATE",
            payload: {
                name:"EDIBLE OIL",
                image:"./Images/About.jpg",
                main:"No Preservative",


            },       
 });
};

//const firstName = useGlobalContext();

 const [state, dispatch] = useReducer(reducer, initialState);

 return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>;  
}

const useGlobalContext = () => { 
    return useContext(AppContext);
};

export {AppProvider, useGlobalContext} 
