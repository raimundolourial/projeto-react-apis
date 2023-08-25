import { CardsContainer, Title } from "./pokedexStyle";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { useContext } from "react";

import { getColors } from "../../utils/ReturnCardColor";
import { useEffect } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";

export default function PokedexPage() {
  const context = useContext(GlobalStateContext);

  const { pklist, setPkList, addPokedex, pokedex } = context;

  console.log(context);
  const localStorageSave = () => {
    const stringPkemons = JSON.stringify(pklist);
    localStorage.setItem("pokemonList", stringPkemons);
  };

  const localStorageSavePokedex = () => {
    const stringPkemons = JSON.stringify(pokedex);
    localStorage.setItem("pokedex", stringPkemons);
  };

  const getItensLocalStorage = () => {
    const stringPkemons = localStorage.getItem("pokemonList");
    const pkemonsArray = JSON.parse(stringPkemons); //Trasforma de string para Array

    if (pkemonsArray) {
      setPkList(pkemonsArray);
      console.log(pkemonsArray);
    }
  };

  useEffect(() => {
    pokedex.length && localStorageSavePokedex();
  }, [pokedex]);

  const filterPokelist = () =>
    pklist.filter(
      (pokeListed) =>
        !pokedex.find((pokeInPokedex) => pokeListed.name === pokeInPokedex.name)
    );

  console.log(pokedex.name);

  useEffect(() => {
    pklist.length && localStorageSave();
  }, [pklist]);

  useEffect(() => {
    pokedex.length && localStorageSave();
  }, [pokedex]);

  useEffect(() => {
    getItensLocalStorage();
  }, []);

  return (
    <div>
      <Header pokedex={pokedex}></Header>
      <Title>Todos Pokémons</Title>
      <CardsContainer>
        {filterPokelist().map((pokemon) => {
          return (
            <PokemonCard
              cardColor={getColors(pokemon.type)}
              key={pokemon.name}
              pokemonUrl={pokemon.url}
              addPokedex={addPokedex}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
}
