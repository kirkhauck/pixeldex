const fetchPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      } else {
        return response.json();
      }
    });
}

export default fetchPokemon;