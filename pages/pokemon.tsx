import React from "react";
import axios from "axios";
import PokemonCard from "../src/components/Card/index";
import { Grid, Typography } from "@mui/material/";
import NextHead from "../src/components/Head";

export default function pokemon({ data }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <NextHead title={`Pokemon ${data.pokemon.name}`} />

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
          marginBottom: "50px",
          textShadow: "4px 4px #ffb703",
        }}
      >
        <Typography
          fontFamily={"Pacifico"}
          fontSize={60}
          color={
            data.pokemonSpecies.color.name === "yellow"
              ? "#ffb703"
              : data.pokemonSpecies.color.name
          }
          textAlign={"center"}
        >
          {data.pokemon.name}
        </Typography>
      </Grid>
      <PokemonCard data={data} />
    </Grid>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query.id);
  const queryId = query.id;
  try {
    const response = await axios(
      `https://pokeapi.co/api/v2/pokemon/${queryId}`
    );
    const pokemon = response.data;

    const response2 = await axios(pokemon.species.url);
    const pokemonSpecies = response2.data;

    const response3 = await axios(pokemon.location_area_encounters);
    const pokemonEncounters = response3.data;

    const id = ("00" + queryId).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    pokemon.id = id;
    const data = {
      pokemon,
      pokemonSpecies,
      pokemonEncounters,
    };
    return {
      props: { data },
    };
  } catch (err) {
    console.error(err);
  }
}
