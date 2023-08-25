export const goToHome = (navigate) =>{
    navigate('/')
}
export const goToList = (navigate) =>{
    navigate('/list')
}


export const goToDetail = (navigate, pokemonId) =>{
    navigate(`/details/${pokemonId}`)
}