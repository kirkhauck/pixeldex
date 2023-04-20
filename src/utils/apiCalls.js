const fetchPokemon = (dexNum = '') => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${dexNum}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      } else {
        return response.json();
      }
    });
}

export default fetchPokemon