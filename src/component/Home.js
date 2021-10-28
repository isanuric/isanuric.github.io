import React from "react";
import BlogPicture from "./BlogPicture";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  ButtonBase,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Link from "@mui/material/Link";
import Kant from "./kant/Kant";

const useStyles = makeStyles({
  card: {
    margin: 45,
    height: 260,
  },
});

function Home(props) {
  const classes = useStyles();

  return (
    <div>
      <BlogPicture />
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Link href={"#/tab2"}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                // height="140"
                image="https://kant-online.ru/en/wp-content/uploads/2014/07/kant1.jpg"
                alt="Kant"
              />
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link href={"#/tab3"}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                // height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/5/53/Nietzsche_Olde_08.JPG"
                alt="Nietzsche"
              />
            </Card>
          </Link>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Link href={"#/heidegger"}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                // height="140"
                image="https://static.dw.com/image/17615415_303.jpg"
                alt="Nietzsche"
              />
            </Card>
          </Link>
        </Grid>

        {/* row 2 */}
        {/* <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <Card component={Link} to="/tab2">
              Go..
            </Card>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>2</Card>
        </Grid>
        <Grid item xs={12} sm={2}></Grid> */}
      </Grid>
    </div>
  );
}

export default Home;
