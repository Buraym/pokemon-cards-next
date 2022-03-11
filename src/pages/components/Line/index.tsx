import { Paper, Typography, Avatar, Button } from "@mui/material/";
import { useRouter } from "next/router";

export default function PokemonLine({ pokemon }) {
  const router = useRouter();
  return (
    <Paper
      elevation={4}
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        width: "400px",
        height: "70px",
        borderRadius: "50px",
        margin: "30px",
      }}
    >
      <Button
        variant="text"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          minWidth: "280px",
          width: "55vw",
          height: "70px",
          borderRadius: "50px",
        }}
        onClick={() => router.push("/pokemon?id=" + pokemon.urlId)}
      >
        <Avatar src={pokemon.image} />
        <Typography color="initial" fontWeight="bolder" align="left">
          {pokemon.name}
        </Typography>
        <Typography color="initial" fontWeight="bolder" align="left">
          {pokemon.id + " º"}
        </Typography>
      </Button>
    </Paper>
  );
}
