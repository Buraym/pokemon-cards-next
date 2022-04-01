import axios from "axios";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material/";
import PokemonLine from "../src/components/Line";
import Link from "next/link";
import NextHead from "../src/components/Head";

export default function Home({ pokemons }) {
  console.log(pokemons);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <NextHead title="Pokemon Cards" />

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
        wrap="wrap"
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
    var pokemons = await axios.get(
      `${
        process.env.PRODBASEURL || "http://www.localhost:3000"
      }/api/getPokemons`,
      {
        params: { amount: 100 },
      }
    );
    pokemons = pokemons.data;

    return {
      props: { pokemons },
    };
  } catch (err) {
    console.error(err);
  }
}
