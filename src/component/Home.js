import React from "react";
import { Grid } from "@mui/material";

import BlogPicture from "./BlogPicture";
import HomeLinks from "./HomeLinks";
import Footer from "./Footer";

export default function Home() {
  const style = {
    gridContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mt: "5rem",
      mb: "15rem",
    },
    gridContainerInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    window.scrollTo(0, 0),
    (
      <>
        <BlogPicture />

        <Grid container xs={12} sm={12} sx={style.gridContainer}>
          {authors.map((author) => (
            <HomeLinks author={author} />
          ))}
        </Grid>

        <Footer />
      </>
    )
  );
}

export const authors = [
  {
    img: require("../images/heidegger.jpg").default,
    href: "/heidegger",
    text: "هایدگر",
  },
  {
    img: require("../images/nietzsche.jpg").default,
    alt: "Nietzsche",
    href: "/nietzsche",
    text: "فردریش ویلهلم نیچه",
  },
  {
    img: require("../images/kant.jpg").default,
    alt: "Kant",
    href: "/kant",
    text: "ایمانوئل کانت",
  },
  {
    img: require("../images/abstract01.jpg").default,
    alt: "",
    href: "/notes",
    text: "گزینه‌گویه‌ها",
  },
  {
    img: require("../images/abstract02.jpg").default,
    alt: "Poems",
    href: "/poems",
    text: "شعرها",
  },
];
