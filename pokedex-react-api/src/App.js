import React from "react";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import { createGlobalStyle } from "styled-components";
import './index.css'
import { Router } from "./Routes/Router";
import { ChakraProvider } from '@chakra-ui/react'
import GlobalState from "./Context/GlobalState";



const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Montserrat", sans-serif;
  }
`;



function App() {
  return (
    
   
      <ChakraProvider>
         
      <GlobalStyle/>
      <GlobalState>
      <Router/>
         {/* <PokedexPage/> */}
      
      </GlobalState>
      </ChakraProvider>

     
     
    
  );
}

export default App;