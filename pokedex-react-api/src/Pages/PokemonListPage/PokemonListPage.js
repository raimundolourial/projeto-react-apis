import { BASE_URL } from "../../Constants/url";
import { CardsContainer, Title } from "../PokedexPage/pokedexStyle"
import Header from "../../Components/Header/Header"


;
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { getColors } from "../../utils/ReturnCardColor";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";

export default function PokemonsListPage (props){
  const context = useContext(GlobalStateContext);
  const { setPokedex, offPokedex, pokedex } = context;
  //  const {pokedex, offPokedex, setPokedex} = props

   const localStorageSave= ()=>{
      const stringPkemons = JSON.stringify(pokedex)
      localStorage.setItem("pokedex", stringPkemons);
    }
     
    
    const getItensPokedexLocalStorage = () => {
      const stringPkemons = localStorage.getItem('pokedex')
      const pkemonsArray = JSON.parse(stringPkemons)//Trasforma de string para Array
    if(pkemonsArray){
      setPokedex(pkemonsArray)
    }
     }
  
  
    useEffect(()=>{pokedex.length && localStorageSave()},[pokedex])
    
    useEffect(()=>{getItensPokedexLocalStorage()},[])
   return (
   <div>

        <Header pokedex={pokedex}></Header>
           <Title>Meus Pokémons</Title>
            <CardsContainer>
             {pokedex.map((pokemon) => {
             return <PokemonCard
             cardColor={getColors(pokemon.type)}
               key={pokemon.name}
               pokemonUrl={`${BASE_URL}/${pokemon.name}`}
               pokemon={pokemon}
               offPokedex={offPokedex}
             />
             })}
            </CardsContainer>

   </div>
   )
}