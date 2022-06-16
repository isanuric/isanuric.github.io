import React from "react";
import { Grid, Typography } from "@mui/material";
import BlogPicture from "../BlogPicture";
import ContentAll from "../ContentAll";
import { makeStyles } from "@mui/styles";
import Data from "./Data";
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
};

function Kant() {
  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Typography sx={style.headTitle}>ایمانوئل کانت</Typography>
        <Grid container>
          <Grid item xs={0} sm={0} md={1}></Grid>
          <Grid item xs={12} sm={12} md={10}>
            <ContentAll data={Data} />
            <BottomLinks />
          </Grid>
          <Footer />
        </Grid>
      </div>
    )
  );
}

export default Kant;
