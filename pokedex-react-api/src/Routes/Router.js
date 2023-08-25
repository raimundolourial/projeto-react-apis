import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetailPage from 'C:/Users/Usuario/Desktop/Labenu/Projetos/Pkedex/projeto-react-apis/pokedex-react-api/src/Pages/PokemonDetailPage/PokemonDetailPage.js';
import PokemonsListPage from "../Pages/PokemonListPage/PokemonListPage";
import { BASE_URL } from "../Constants/url";
import { useEffect, useState } from "react";
import axios from 'axios';

import VerticallyCenter from "../Constants/Modal";
import { useDisclosure } from "@chakra-ui/react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from "@chakra-ui/react"
import styled from "styled-components";

const P = styled.p`
text-align:center;
font-size: 75px;

>p{
    text-align:center;
    font-style:normal;
}
` 



export const Router = () =>{
  


    return(
<BrowserRouter>
<Routes>
    {/* <Route index element={<PokedexPage/>}></Route> */}
    <Route index element={<PokedexPage />}></Route>
    <Route path="/details/:pokemonId" element={<PokemonDetailPage />} />
    <Route path="/list" element={<PokemonsListPage />}>

    </Route>
</Routes>
</BrowserRouter>
    )
}