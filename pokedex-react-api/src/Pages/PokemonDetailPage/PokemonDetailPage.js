import { BigDetail, CardDetail, PokeId, PokemonDetailStyle, SmallDetail, PokeName, PokeInfo, PokeImg, PokeMoves, FirstColumn, PokeGolpes, PokeBarra, Table, TableCell} from "./pokemonDetailsStyle"
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header"
import { Title } from "../PokedexPage/pokedexStyle"
import pokeball from '../../assest/pngwing 1.png'

import { BigPokeball } from "./pokemonDetailsStyle"
import { useContext, useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../Constants/url";
import axios from 'axios';
import { TypesContainer } from "../../Components/PokemonCard/pokemonCardStyle";
import { PokemonType } from "../../Components/PokemonCard/pokemonCardStyle";
import { getTypes } from "../../utils/ReturnPokemonType";
import GlobalStateContext from "../../Context/GlobalStateContext";

// Função para definir a largura e a classe CSS do botão com base no valor numérico

export default function PokemonDetailPage (props){
  const context = useContext(GlobalStateContext);
  const { setPokedex, offPokedex, pokedex, addPokedex} = context;
    const {pokemonId} = useParams();
    const [pokemonDetails, setPokemonDetails]= useState(null);



    useEffect(()=>{
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/${pokemonId}`)
                setPokemonDetails(response.data);
                console.log(response.data)
            } catch (error) {
                console.log('Algo errado aconteceu!')
                console.log(error)
            }
        }
        fetchPokemonDetails();
    }, [pokemonId])

    if (!pokemonDetails) {
        return null;
      }
   return (
   <div>
        <Header pokedex={pokedex} pokemonId={pokemonId} addPokedex={addPokedex} offPokedex={offPokedex} pokemonDetails={pokemonDetails} />
        <Title>Detalhes</Title>
        <PokemonDetailStyle>
            <BigPokeball src={pokeball} alt=''/>
            <CardDetail>
                <FirstColumn>
                    <SmallDetail src={pokemonDetails.sprites.front_default} alt=''/>
                    <SmallDetail src={pokemonDetails.sprites.back_default} alt=''/>
                </FirstColumn>
                <BigDetail>

    <h2>Base Stats</h2>
    <Table>
      {/* <tbody> */}
        {pokemonDetails.stats[0] ? (
          <>
            {pokemonDetails.stats.map((stats) => (
              // <tr key={stats.stat.name}>
              <TableCell>
      <div>{stats.stat.name}</div>
      <div>{stats.base_stat} </div>

      <PokeBarra valor={stats.base_stat} />
    </TableCell>
            // </tr>
            ))}
            <tr>
              <TableCell>Total</TableCell>
              <TableCell>
                <div>
                  <PokeGolpes
                    valor={pokemonDetails.stats.reduce(
                      (total, stats) => total + stats.base_stat,
                      0
                    )}
                  >
                    {pokemonDetails.stats.reduce(
                      (total, stats) => total + stats.base_stat,
                      0
                    )}
                  </PokeGolpes>
                </div>
              </TableCell>
            </tr>
          </>
        ) : (
          <tr>
            <TableCell colSpan="2">Carregando...</TableCell>
          </tr>
        )}
      {/* </tbody> */}
    </Table>

</BigDetail>


                <PokeInfo>
                    <PokeId>#{pokemonDetails.id}</PokeId>
                    <PokeName>{pokemonDetails.name}</PokeName>
                    <TypesContainer>
                        {pokemonDetails.types ? (
                        pokemonDetails.types.map((type) => {

                            return <PokemonType key={type.type.name} src={getTypes(type.type.name)} alt='' />
                        })
                        ) : (
                        <div>Carregando...</div>
                        )}
                    </TypesContainer>
                    <PokeMoves>
                        <h2>Moves:</h2>
                        {pokemonDetails.moves[0] ? (
                            pokemonDetails.moves.map((ability,key)=>{
                              if(key<6)
                            return <PokeGolpes key={ability.move.name}> {ability.move.name}</PokeGolpes>})
                              

                        ) : (
                        <div>Carregando...</div>
                        )}
                    </PokeMoves>
                </PokeInfo>
                <PokeImg src={pokemonDetails.sprites.other['official-artwork'].front_default} alt=''></PokeImg>
            </CardDetail>
        </PokemonDetailStyle>
   </div>
   )
}