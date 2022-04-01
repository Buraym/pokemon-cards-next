import axios from "axios";

export default async function handler(req, res) {
  try {
    const { amount } = req.query;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${amount}`
    );

    const pokemons = response.data.results.map((pokeman, index) => {
      const id = ("00" + (index + 1)).slice(-3);
      const urlId = index + 1;
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
      return { ...pokeman, image, id, urlId };
    });
    return res.status(200).json(pokemons);
  } catch (err) {
    return res.status(403).end();
  }
}
