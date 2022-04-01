import { Paper, Typography, Avatar, Button, Grid } from "@mui/material/";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import { useRouter } from "next/router";

export default function PokemonLine({ pokemon }) {
  const router = useRouter();
  return (
    <Paper
      elevation={4}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        width: "150px",
        height: "200px",
        borderRadius: "50px",
        margin: "30px",
      }}
    >
      <Button
        variant="text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          minWidth: "150px",
          height: "200px",
          borderRadius: "50px",
        }}
        onClick={() => router.push("/pokemon?id=" + pokemon.urlId)}
        endIcon={
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <CatchingPokemonTwoToneIcon
              fontSize="large"
              style={{}}
              sx={{ width: 50, height: 50, color: "#f77f00" }}
            />
            <Typography
              color="initial"
              fontWeight="bold"
              align="left"
              fontSize={25}
              style={{
                position: "absolute",
                color: "#ffb703 ",
                textShadow:
                  "3px 0 0 #fff, -3px 0 0 #fff, 0 3px 0 #fff, 0 -3px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
              }}
            >
              {pokemon.id}
            </Typography>
          </Grid>
        }
      >
        <Avatar src={pokemon.image} sx={{ width: 80, height: 80 }} />
        <Typography color="initial" fontWeight="bolder" align="left">
          {pokemon.name}
        </Typography>
      </Button>
    </Paper>
  );
}
