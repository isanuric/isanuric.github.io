import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { authors } from "./Home";

const style = {
  card: {
    margin: 0,

    "&:hover": {
      // cursor: "pointer",
      // backgroundColor: "primary.main",
      opacity: [0.1, 0.5, 0.5],
      // border: 35,
      // borderColor: "text.primary",
      // borderRadius: "5%",
    },
  },
  cardMedia: {
    // maxHeight: 300,
    width: 400,
    height: 500,
  },
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
          sx={style.cardMedia}
          component="img"
          image={props.author.image}
          alt="Kant"
        />
        <CardContent sx={style.cardContent}>{props.author.text}</CardContent>
      </CardActionArea>
    </Card>
  );
}
