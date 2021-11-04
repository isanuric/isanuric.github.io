import React from "react";
import ContentAll from "../ContentAll";
import Data from "./Data";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";

const style = {
  headTitle: {
    marginTop: "3rem",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    color: "gray",
    fontSize: "2rem",
  },
};

function Heidegger() {
  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Typography sx={style.headTitle}>مارتین هایدگر</Typography>
        <Grid container>
          <Grid item xs={0} sm={0} md={2}></Grid>
          <Grid item xs={12} sm={12} md={8}>
            <ContentAll data={Data} />
            <BottomLinks />
          </Grid>
        </Grid>
        <Footer />
      </div>
    )
  );
}

export default Heidegger;
