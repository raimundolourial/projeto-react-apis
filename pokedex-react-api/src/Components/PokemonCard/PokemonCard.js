import React, { useEffect, useState} from "react";
import {Container,PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon, Details} from './pokemonCardStyle'
import pokeball from '../../assest/pngwing 2.png'
import axios from "axios";
import {getTypes} from '../../utils/ReturnPokemonType'
import { getColors } from "../../utils/ReturnCardColor";
import { goToDetail } from "../../Routes/Coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from "@chakra-ui/react"


/* const cardColor = (type) =>{
 return getColors(type)
} */
const cardColor = (types) => {
  return types && types.length > 0 ? getColors(types[0].type.name) : undefined;
}

const PokemonCard = (props) => {
const {addPokedex, offPokedex, pokemonUrl} = props
const { isOpen, onOpen, onClose } = useDisclosure()
  
const [get, setGet] = useState({})


const location = useLocation();



const catchPokemon = async () =>{
  try {
    const response = await axios.get(pokemonUrl)
    setGet(response.data)    
    
  } catch (error) {
    console.log('Algo errado aconteceu!')
    console.log(error)
  }
}


const navigate = useNavigate()
useEffect(()=>{
  catchPokemon()
},[])



    return (

      <Container color={cardColor(get.types)}>
        <div>

          <PokemonNumber>{get.id}</PokemonNumber>
          <PokemonName>{get.name}</PokemonName>
          <TypesContainer>
          {get.types ? (
              get.types.map((type) => {
                
                  return <PokemonType key={type.type.name} src={getTypes(type.type.name)} alt='' />
              })
            ) : (
              <div>Carregando...</div>
            )}
          </TypesContainer>
    
          <Details onClick={() => goToDetail(navigate, get.id)}>Detalhes</Details>
        </div>
        <div>
         
          <Pokemon src={get.sprites ? get.sprites.other['official-artwork'].front_default : ''} alt="" />
          {location.pathname ==='/' ?(
          <CatchButton onClick={()=>addPokedex(get)}>Capturar!</CatchButton>

          ):(
          <CatchButton onClick={()=>offPokedex(get)}>Excluir</CatchButton>)}
        </div>
        <Pokeball src={pokeball} alt="pokeball" />
        
     
      </Container>


)
}
  //   );
  // };
  
  export default PokemonCard;