import pokemon from "../../pokemon";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Collapse,
  Button,
} from "@mui/material/";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";

import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import { useState } from "react";

export default function PokemonCard({ data }) {
  const [showStats, setShowStats] = useState(false);
  const pokemon = data.pokemon;
  const specie = data.pokemonSpecies;
  const encounter = data.pokemonEncounters;
  console.log(data);

  function FormatHabitat(habitat) {
    if (habitat === "cave") {
      return "Caverna";
    } else if (habitat === "forest") {
      return "Floresta";
    } else if (habitat === "grassland") {
      return "Gramado";
    } else if (habitat === "mountain") {
      return "Montanha";
    } else if (habitat === "rare") {
      return "Raro";
    } else if (habitat === "rough-terrain") {
      return "Campo";
    } else if (habitat === "sea") {
      return "Mar";
    } else if (habitat === "urban") {
      return "Urbano";
    } else if (habitat === "waters-edge") {
      return "Agua salgada";
    }
  }

  function FormatCity(city) {
    const formatedCity = city
      .replace(/-/g, " ")
      .replace(/city/g, "cidade")
      .replace(/town/g, "cidade")
      .replace(/route/g, "rota")
      .replace(/forest/g, "floresta")
      .replace(/area/g, "")
      .split(" ");
    formatedCity.pop();
    if (formatedCity.length > 3) {
      var a = formatedCity.length - 3;

      while (formatedCity.length > 3) {
        formatedCity.pop();
        a - 1;
      }
    }
    return formatedCity.join(" - ");
  }

  function FormatStat(stat) {
    if (stat === "hp") {
      return "HP";
    } else if (stat === "attack") {
      return "ATK";
    } else if (stat === "defense") {
      return "DEF";
    } else if (stat === "special-attack") {
      return "ATK ESP";
    } else if (stat === "special-defense") {
      return "DEF ESP";
    } else if (stat === "speed") {
      return "VEL";
    }
  }

  const listStats = pokemon.stats.map((item) => ({
    subject: FormatStat(item.stat.name),
    A: item.base_stat,
    fullMark: 150,
  }));

  return (
    <Card
      style={{ width: "350px", height: "550px", borderRadius: "10px" }}
      elevation={3}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        padding={1}
      >
        <Typography
          color="initial"
          fontWeight="bolder"
          style={{
            color:
              specie.color.name === "yellow" ? "#ffb703" : specie.color.name,
            padding: "10px",
          }}
        >
          {pokemon.id}
        </Typography>
        <Typography
          color="initial"
          fontWeight="bolder"
          style={{
            color:
              specie.color.name === "yellow" ? "#ffb703" : specie.color.name,
            padding: "10px",
          }}
        >
          {pokemon.name + " | "}
          {encounter.length > 0 ? (
            FormatCity(encounter[0].location_area.name)
          ) : (
            <QuestionMarkRoundedIcon
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginBottom: "-6px",
              }}
            />
          )}
        </Typography>
      </Grid>

      <CardActionArea onClick={() => setShowStats(!showStats)}>
        <CardMedia
          component="img"
          src={pokemon.image}
          style={{ height: "250px", objectFit: "cover" }}
        />
      </CardActionArea>

      <Collapse in={!showStats} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            display: "flex",
            width: "95%",
            justifyContent: "center",
            marginLeft: "2.5%",
            flexWrap: "wrap",
            overflowY: "scroll",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            wrap="wrap"
            style={{
              width: "100%",
            }}
          >
            <Typography
              color="initial"
              fontWeight="bolder"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
              }}
            >
              Inicial:
            </Typography>
            <Typography
              color="initial"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              {pokemon.is_default ? " Sim | " : " Não | "}
            </Typography>
            <Typography
              color="initial"
              fontWeight="bolder"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              Peso:
            </Typography>
            <Typography
              color="initial"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              {pokemon.weight / 10 + " Kg | "}
            </Typography>
            <Typography
              color="initial"
              fontWeight="bolder"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              Alt:
            </Typography>
            <Typography
              color="initial"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              {pokemon.height / 10 + " M"}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            wrap="wrap"
            style={{
              width: "100%",
            }}
          >
            <Typography
              color="initial"
              fontWeight="bolder"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
              }}
            >
              Captura:
            </Typography>
            <Typography
              color="initial"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              {specie.capture_rate + " | "}
            </Typography>
            <Typography
              color="initial"
              fontWeight="bolder"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              Habitat:
            </Typography>
            <Typography
              color="initial"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
                marginLeft: "5px",
              }}
            >
              {specie.habitat
                ? FormatHabitat(specie.habitat.name)
                : "Desconhecido"}
            </Typography>
          </Grid>
          <Grid
            justifyContent="flex-start"
            alignContent="flex-start"
            alignItems="flex-start"
            style={{
              width: "45%",
              height: "66px",
              marginRight: "5%",
              overflowY: "scroll",
              overflowX: "hidden",
              flexWrap: "wrap",
            }}
          >
            <Typography
              color="initial"
              fontWeight="bolder"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
              }}
            >
              Habilidades
            </Typography>
            {pokemon.abilities.map((item, index) => (
              <li key={index} style={{ display: "flex" }}>
                <Typography
                  style={{
                    color:
                      specie.color.name === "yellow"
                        ? "#ffb703"
                        : specie.color.name,
                  }}
                  fontSize={14}
                >
                  {item.ability.name}
                </Typography>
              </li>
            ))}
          </Grid>
          <Grid
            justifyContent="flex-start"
            style={{
              width: "45%",
              height: "66px",
              marginRight: "5%",
              overflowY: "scroll",
              overflowX: "hidden",
              flexWrap: "wrap",
            }}
          >
            <Typography
              color="initial"
              fontWeight="bolder"
              style={{
                color:
                  specie.color.name === "yellow"
                    ? "#ffb703"
                    : specie.color.name,
              }}
            >
              Movimentos
            </Typography>
            {pokemon.moves.map((item, index) =>
              index < 4 ? (
                <li key={index} style={{ display: "flex" }}>
                  <Typography
                    style={{
                      color:
                        specie.color.name === "yellow"
                          ? "#ffb703"
                          : specie.color.name,
                    }}
                    fontSize={14}
                  >
                    {item.move.name}
                  </Typography>
                </li>
              ) : index === 4 ? (
                <Typography
                  style={{
                    color:
                      specie.color.name === "yellow"
                        ? "#ffb703"
                        : specie.color.name,
                  }}
                  fontSize={14}
                >
                  ...
                </Typography>
              ) : (
                <></>
              )
            )}
          </Grid>
        </CardContent>
      </Collapse>
      <ResponsiveContainer
        width={"100%"}
        height={showStats ? "44%" : 0}
        style={{ marginTop: "10px" }}
      >
        <RadarChart outerRadius={90} data={listStats}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 150]} />
          <Radar
            name={pokemon.name}
            dataKey="A"
            stroke={
              specie.color.name === "yellow" ? "#ffb703" : specie.color.name
            }
            fill={
              specie.color.name === "yellow" ? "#ffb703" : specie.color.name
            }
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
}
