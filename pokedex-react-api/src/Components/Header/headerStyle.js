import styled from 'styled-components'
import logo from 'c:/Users/Usuario/Desktop/Labenu/Projetos/Pkedex/projeto-react-apis/pokedex-react-api/src/assest/logo.png'

export const Container = styled.section`
    display: flex;

    justify-content:center;
    align-items: center; 
    margin-bottom: 3em; 
    width: 100%;
    
`
export const ButtonPokedex = styled.button`
    display: flex;
    position: absolute;
    right: 3em; 
    
    
    background-color: #33A4F5;
    color: #FFFFFF;
    padding: 0.5em 4em; 
    border-radius: 8px;
    border-color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    z-index : 3 ;
    /* height: 50px;
    width:120px;
    align-items:center;
    justify-content:center; */
    
`
export const Logo = styled.img`
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 340px;
    height: 20vh;
    border-color: transparent;
    position: relative;
    margin-top: 2em;
    z-index:3;
    
`
export const ButtonExcluir = styled.button`
    display: flex;
    position: absolute;
    right: 3em;
    background-color: #FF6262;
    color: #FFFFFF;
    padding: 0.5em 2em;
    border-radius: 8px;
    border-color: #FF6262;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
    z-index:3;
`

export const ButtonVoltar = styled.button`
    display: flex;
    text-decoration: underline;
    position:absolute;
    left:3em;
    color: #1A1A1A;
    padding: 2em;
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    border-style: none;
    font-weight: 700;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    z-index:3;
    
`