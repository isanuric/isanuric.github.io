import React from "react";
import { Grid } from "@mui/material";
import Footer from "./Footer";

import HomeLinks from "./HomeLinks";

import BlogPicture from "./BlogPicture";

function Home() {
  const style = {
    gridContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mt: "25rem",
      mb: "25rem",
    },
  };

  return (
    window.scrollTo(0, 0),
    (
      <div>
        <BlogPicture />

        <Grid container xs={12} sm={12} sx={style.gridContainer}>
          <Grid container xs={10} sm={6}>
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
    img: require("../images/heidegger.jpg").default,
    href: "#/heidegger",
    text: "هایدگر",
  },
  {
    img: require("../images/nietzsche.jpg").default,
    alt: "Nietzsche",
    href: "#/nietzsche",
    text: "فردریش ویلهلم نیچه",
  },
  {
    img: require("../images/kant.jpg").default,
    alt: "Kant",
    href: "#/kant",
    text: "ایمانوئل کانت",
  },
  {
    img: require("../images/abstract01.jpg").default,
    alt: "",
    href: "#/notes",
    text: "گزینه‌گویه‌ها",
  },
  {
    img: require("../images/abstract02.jpg").default,
    alt: "Poems",
    href: "#/poems",
    text: "شعرها",
  },
];
