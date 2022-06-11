import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { authors } from "./Home";

const style = {
  card: {
    margin: 0,

    "&:hover": {
      // cursor: "pointer",
      // backgroundColor: "primary.main",
      opacity: [0.9, 0.9, 1],
      // border: 35,
      // borderColor: "text.primary",
      // borderRadius: "5%",
    },
  },
  cardMedia: {
    // maxHeight: 300,
    // maxWidth: { xs: 300, sm: 400 },
    width: { xs: 300, sm: 400 },
    height: { xs: 400, sm: 500 },
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
          alt={props.author.alt}
        />
        <CardContent sx={style.cardContent}>{props.author.text}</CardContent>
      </CardActionArea>
    </Card>
  );
}
