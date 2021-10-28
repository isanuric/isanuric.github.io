import React from "react";
import BlogPicture from "./BlogPicture";
import { Card, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    margin: 45,
    height: 260,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div>
      <BlogPicture />
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>Kant</Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>2</Card>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
        {/* row 2 */}
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>Kant</Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>2</Card>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
