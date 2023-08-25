import { BASE_URL } from "../Constants/url";

import axios from "axios";

import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import styled from "styled-components";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";
import { useEffect } from "react";

const P = styled.p`
  text-align: center;
  font-size: 45px;

  > p {
    text-align: center;
    font-style: normal;
  }
`;

export default function GlobalState({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Renderização da lista de Pokemons através da API
  const [pklist, setPkList] = useState([]);

  const pokemonFullList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/?offset=0&limit=50`);
      setPkList(response.data.results);
      console.log("deu certo");
    } catch (error) {
      alert("A operação falhou");
      console.log(error.response);
    }
  };

  useEffect(() => {
    pokemonFullList();
    console.log("use efect lista");
  }, []);

  //Criação da Pokedex, adição e remoção de Pokemons
  const [pokedex, setPokedex] = useState([]);

  const addPokedex = (pokeAdd) => {
    console.log(pokeAdd);
    const isOnPokedex = pokedex.find(
      (pokeInPokedex) => pokeInPokedex.name === pokeAdd.name
    );
    if (!isOnPokedex) {
      const newPokedex = [...pokedex, pokeAdd];
      setPokedex(newPokedex);
      onOpen();
    }
  };
  const offPokedex = (pokeOff) => {
    const newPokedex = pokedex.filter(
      (pokeInPokedex) => pokeInPokedex.name !== pokeOff.name
    );
    setPokedex(newPokedex);
    if (!newPokedex.length) {
      localStorage.removeItem("pokedex");
    }
  };

  const getItensLocalStorage = () => {
    const stringPkemons = localStorage.getItem("pokedex");
    const pkemonsArray = JSON.parse(stringPkemons); //Trasforma de string para Array
    if (pkemonsArray) {
      setPokedex(pkemonsArray);
    }
  };

  useEffect(() => {
    getItensLocalStorage();
  }, []);

  const data = {
    pklist,
    setPkList,
    pokedex,
    addPokedex,
    offPokedex,
    setPokedex,
    pokemonFullList,
  };

  return (
    <div>
      <GlobalStateContext.Provider value={data}>
        {" "}
        {children}{" "}
      </GlobalStateContext.Provider>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <P>Pokemon Capturado</P>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
