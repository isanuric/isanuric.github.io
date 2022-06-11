import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { authors } from "./Home";

const style = {
  card: {
    margin: 1,
    width: { xs: "auto", sm: "400px" },

    // width: "90%",
    // height: 470,
    // minWidth: 370,

    // maxWidth: 370,
    // maxHeight: 470,

    "&:hover": {
      // cursor: "pointer",
      backgroundColor: "#9e9e9e",
      opacity: [0.9, 0.9, 1],
      // border: 35,
      // borderColor: "#9e9e9e",
      // borderRadius: "5%",
      // width: { xs: "360px", sm: "400px" },
      // height: { xs: "360", sm: "500px" },
    },
  },
  cardMedia: {
    // width: "90%",
    // height: 370,
    // maxHeight: 300,
    // maxWidth: { xs: 300, sm: 400 },
    // height: { xs: "400px", sm: "500px" },
    // width: { xs: "150px", sm: "400px" },
    // width: { xs: "360px", sm: "400px" },
    // height: { xs: "360", sm: "500px" },
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
