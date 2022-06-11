import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ContentAll from "../ContentAll";
import { data } from "./Data";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";
import Post from "./Post";
import PoemsBerlin from "./PoemsBerlin";
import PoemsStuttgart from "./PoemsStuttgart";

const style = {
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // mt: "25rem",
    // mb: "25rem",
    backgroundColor: "blue",
  },
  gridContainerStuttgart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // mt: "25rem",
    // mb: "25rem",
    backgroundColor: "red",
  },
  gridItem: {
    m: "3rem",
  },
  headTitle: {
    mt: "3rem",
    // height: "100px",
    display: "flex",
    justifyContent: "center",
    color: "gray",
    fontSize: "2rem",
    // backgroundColor: "blue",
  },
  subTitle: {
    mb: "3rem",
  },
};

export default function Poems() {
  return (
    window.scrollTo(0, 0),
    (
      <>
        <PoemsBerlin />
        <PoemsStuttgart />
        {/* <BottomLinks /> */}
        <Footer />
      </>
    )
  );
}
