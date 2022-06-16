import React from "react";
import ContentAll from "../ContentAll";
import Data from "./Data";
import { Grid, Typography } from "@mui/material";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";

const style = {
  headTitle: {
    mt: "10rem",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    color: "gray",
    fontSize: "2rem",
  },
  subHeadTitle: {
    display: "flex",
    justifyContent: "center",
    typography: "subtitle2",
    fontWeight: "light",
    fontStyle: "italic",
  },
};

function Nietzsche() {
  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Typography sx={style.headTitle}>فردریش ویلهلم نیچه</Typography>
        <Typography sx={style.subHeadTitle}>
          Der Mensch ist etwas, das überwunden werden muß.
        </Typography>
        <Typography sx={style.subHeadTitle}>Friedrich Nietzsche</Typography>
        <Grid container>
          <Grid item xs={0} sm={0} md={1}></Grid>
          <Grid item xs={12} sm={12} md={10}>
            <ContentAll data={Data} />
            <BottomLinks />
          </Grid>
        </Grid>
        <Footer />
      </div>
    )
  );
}

export default Nietzsche;
