
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ButtonExcluir, ButtonPokedex, ButtonVoltar, Container, Logo } from "./headerStyle"

import {goToHome, goToList} from '../../Routes/Coordinator'
import { useState } from "react"
import axios from "axios"
export default function Header (props){
  //URL atual
  const {pokedex,pokemonId} = props
  const location = useLocation()
  const navigate = useNavigate()
 
  console.log(pokedex,'essa é a pokedex do header')
  console.log(props.pokemonDetails,'pokemonDetails')
  
 
  // let onPokedex = alunos.find(function(aluno) {
  //   return aluno.nome === 'joão';
  // });
// const onPokedex = pokedex.find((pkdex)=>
//  parseInt(pkdex.id)===parseInt(pokemonId));
const clickM = ()=>{
  console.log('botão funcionou')
}
  const isPkdex = (pkId) =>{
        const isOnPokedex = pokedex.find((pokeInPokedex) => 
        pokeInPokedex.id == pkId)
            if (!isOnPokedex){
               return undefined
            }else{
              return 1
            }

    }
    const onPokedex=isPkdex(pokemonId)
  

  
  console.log(onPokedex)
  

  switch (location.pathname){
    case '/':
   return (
   <div>

        <Container>
           <Logo/>
            <ButtonPokedex onClick={()=> goToList(navigate)}>Pokédex</ButtonPokedex>

        </Container>
   </div>
   )

   case '/list':
     return (
       <div>
        <Container>
        <ButtonVoltar onClick={()=>goToHome(navigate)}>{String.fromCharCode(60)} Todos Pokémons</ButtonVoltar>
         <Logo/>

        </Container>
      </div>
    )
    case '/details':
      return (
        <div>
          <Container>
          <ButtonPokedex onClick={()=> goToList(navigate)}>Pokédex</ButtonPokedex>

          <ButtonVoltar onClick={()=>goToHome(navigate)}>{String.fromCharCode(60)} Todos Pokémons</ButtonVoltar>
         <Logo/>
         {/* <>
        
                      
                       {pokedexOn?( <ButtonPokedex onClick={()=> goToList(navigate)}>Pokédex</ButtonPokedex>)
                      : (
                        <ButtonExcluir>Excluir da Pokédex</ButtonExcluir>
                        )}
         </>
         */}
          </Container>
        </div>
      )
    default:
      return (
        <div>
      <Container>
      
      <ButtonVoltar onClick={()=>goToHome(navigate)}>{String.fromCharCode(60)} Todos Pokémons</ButtonVoltar> 
    
       <Logo />
      
      {<div>{
       onPokedex?(<ButtonExcluir onClick={function(){props.offPokedex(props.pokemonDetails)}}>Excluir da Pokédex</ButtonExcluir>):(<ButtonPokedex onClick={()=>props.addPokedex(props.pokemonDetails)}>Capturar</ButtonPokedex>)}
      </div> }
      </Container>
      
    </div>
      )
}}
