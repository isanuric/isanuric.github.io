import React from "react";
import { Grid, Typography } from "@mui/material";
import BlogPicture from "../BlogPicture";
import ContentAll from "../ContentAll";
import { makeStyles } from "@mui/styles";

import Data from "./Data";

const useStyles = makeStyles({
  typography: {
    marginTop: "3rem",
    height: "100px",
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-arownd",
    justifyContent: "center",
    alignItems: "center",
    color: "gray",
    fontSize: "2rem",
  },
});
function Kant() {
  const classes = useStyles();

  return (
    <div>
      {/* <BlogPicture /> */}
      <Typography className={classes.typography}>
        ایمانوئل کانت
        {/* <h6 align="center"> Immanuel Kant</h6> */}
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <ContentAll data={Data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Kant;
