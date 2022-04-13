async function getAllPokemon() {
    let response = await fetch("pokemon.json")
    let data = await response.json()
    return data    
}

getAllPokemon().then(allPokemon => {
    console.log(allPokemon[0])
})