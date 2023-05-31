import React from "react";
//import ReactDOM from "react-dom/client";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Services from "./Components/Pages/Services";
import NotFound from "./Components/Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
//          


    const App = () => {
        const theme = {
          colors: {
            heading: "rgb(24 24 29)",
            text: "rgb(24 24 29)",
            white: "#fff",
            black: " #212529",
            hover: "#40a2f7",
            bg: "",
            header_bg: "rgb(13, 33, 51)",
            footer_bg: "rgb(13, 33, 51)",
            btn: "rgb(125, 173, 240)",
            border: "rgba(98, 84, 243, 0.5)",
            hr: "#ffffff",
            gradient:
              "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
            shadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
          },
          media: { mobile: "768px", tab: "998px" },
        };
      
    return (
    <ThemeProvider theme={theme}>
            <GlobalStyle />
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          </BrowserRouter>
          </ThemeProvider>
    );
    };
  
  export default App;