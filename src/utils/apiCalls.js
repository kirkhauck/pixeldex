const fetchPokemon = (selectedPokemon) => {
  const allPokemon = 'https://pokeapi.co/api/v2/pokemon/?limit=1008';
  let url = selectedPokemon ? selectedPokemon : allPokemon;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    });
}

export default fetchPokemon;