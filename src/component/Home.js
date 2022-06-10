import React from "react";
import { Grid } from "@mui/material";
import Footer from "./Footer";

import HomeLinks from "./HomeLinks";

function Home() {
  const style = {
    gridContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mt: "25rem",
      mb: "25rem",
      // backgroundColor: "red",
    },
    card: {
      margin: 0,

      "&:hover": {
        opacity: [0.1, 0.5, 0.5],
      },
    },
    cardMedia: {
      height: 400,
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-around",
      fontSize: 26,
    },
  };

  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Grid container xs={12} sm={12} sx={style.gridContainer}>
          <Grid container xs={12} sm={6}>
            {authors.map((author) => (
              <HomeLinks author={author} />
            ))}
          </Grid>
        </Grid>

        <Footer />
      </div>
    )
  );
}

export default Home;

export const authors = [
  {
    image: "https://ichi.pro/assets/images/max/724/0*-U9iMwWu7ze7AjHb.jpg",
    alt: "Quelle: https://ichi.pro/assets/images/max/724/0*-U9iMwWu7ze7AjHb.jpg",
    href: "#/heidegger",
    text: "هایدگر",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Nietzsche_Olde_08.JPG",
    alt: "Nietzsche",
    href: "#/nietzsche",
    text: "فردریش ویلهلم نیچه",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Immanuel_Kant_%28portrait%29.jpg",
    alt: "Kant",
    href: "#/kant",
    text: "ایمانوئل کانت",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/001/874/132/non_2x/abstract-geometric-white-background-free-vector.jpg",
    alt: "Kant",
    href: "#/notes",
    text: "گزینه‌گویه‌ها",
  },
];
