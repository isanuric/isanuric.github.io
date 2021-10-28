import React from "react";
import ContentAll from "../ContentAll";
import Data from "./Data";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headTitle: {
    marginTop: "3rem",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    color: "gray",
    fontSize: "2rem",
  },
});

function Nietzsche() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.headTitle}>فردریش ویلهلم نیچه</Typography>

      <Grid container>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <ContentAll data={Data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Nietzsche;
