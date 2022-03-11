import axios from "axios";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material/";
import PokemonLine from "./components/Line";
import Link from "next/link";
import NextHead from "./components/Head";

export default function Home({ pokemons }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <NextHead title="Pokemon Cards Next JS " />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        style={{
          height: "100px",
          width: "80vw",
          marginTop: "20px",
          textShadow: "4px 4px #023047",
        }}
      >
        <Typography
          variant="title"
          fontSize={35}
          fontFamily={"Pacifico"}
          fontSize={60}
          color="#d62828"
        >
          Pokemon Cards Next JS
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        alignContent="center"
        style={{
          width: "80vw",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="title" fontSize={15}>
          Feito por: Brayan Wilis / Com base no repositorio:
        </Typography>
        <Typography variant="title" fontSize={15}>
          <Link
            href="https://github.com/jamesqquick/nextjs-pokedex-with-tailwind-css/blob/master/pages/index.js"
            style={{ marginLeft: "20px" }}
          >
            https://github.com/jamesqquick/nextjs-pokedex-with-tailwind-css
          </Link>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        {pokemons.map((pokemon, index) => (
          <PokemonLine pokemon={pokemon} key={index} />
        ))}
      </Grid>
    </Grid>
  );
}

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=200"
    );
    const pokemons = response.data.results.map((pokeman, index) => {
      const id = ("00" + (index + 1)).slice(-3);
      const urlId = index + 1;

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
      return { ...pokeman, image, id, urlId };
    });
    return {
      props: { pokemons },
    };
  } catch (err) {
    console.error(err);
  }
}
