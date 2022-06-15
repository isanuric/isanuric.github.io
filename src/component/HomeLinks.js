import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { authors } from "./Home";

const style = {
  card: {
    margin: 1,
    width: { xs: "auto", sm: "400px" },

    "&:hover": {
      backgroundColor: "#9e9e9e",
      opacity: [0.4, 0.9, 0.8],
    },
  },
  cardMedia: {},
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: 26,
  },
};

export default function HomeLinks(props) {
  return (
    <Card sx={style.card}>
      <CardActionArea href={props.author.href}>
        <CardMedia
          component="img"
          sx={style.cardMedia}
          image={props.author.img}
          alt={props.author.alt}
        />
        <CardContent sx={style.cardContent}>{props.author.text}</CardContent>
      </CardActionArea>
    </Card>
  );
}
