import axios from "axios";

export default async function handler(req, res) {
  const { queryId } = req.query;
  const response = await axios(`https://pokeapi.co/api/v2/pokemon/${queryId}`);
  const pokemon = response.data;

  const response2 = await axios(pokemon.species.url);
  const pokemonSpecies = response2.data;

  const response3 = await axios(pokemon.location_area_encounters);
  const pokemonEncounters = response3.data;

  const id = ("00" + queryId).slice(-3);
  pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  pokemon.id = id;
  const data = {
    ...pokemon,
    pokemonSpecies,
    pokemonEncounters,
  };
  res.status(200).json({
    ...pokemon,
    pokemonSpecies,
    pokemonEncounters,
  });
}
