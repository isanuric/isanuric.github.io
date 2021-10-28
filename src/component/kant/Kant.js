import React from "react";
import { Grid, Typography } from "@mui/material";
import BlogPicture from "../BlogPicture";
import ContentAll from "../ContentAll";
import { makeStyles } from "@mui/styles";

import Data from "./Data";

const useStyles = makeStyles({
  headTitle: {
    marginTop: "3rem",
    height: "100px",
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-arownd",
    justifyContent: "center",
    // alignItems: "center",
    color: "gray",
    fontSize: "2rem",
  },
});
function Kant() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.headTitle}>ایمانوئل کانت</Typography>
      <Grid container>
        <Grid item xs={0} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <ContentAll data={Data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Kant;
