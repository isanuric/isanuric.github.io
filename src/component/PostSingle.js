import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    // margin: 45,
    marginTop: "10rem",
    minWidth: 250,
    userSelect: "none",
  },
  typography: {
    direction: "rtl",
    align: "right",
    fontSize: "1.2rem",
  },
  subtitle: {
    direction: "rtl",
    fontSize: ".9rem",
    marginBottom: "2rem",
    color: "text.secondary",
  },
});

function PostSingle(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia component="img" height="260" image={props.props.image} />
        <CardContent>
          <Typography gutterBottom align="right" component="div">
            <h1>{props.props.title}</h1>
          </Typography>
          <Typography className={classes.subtitle}>احسان سلمانی</Typography>
          <Typography className={classes.typography}>
            {props.props.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="#/heidegger" size="small">
            <h3>بازگشت</h3>
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default PostSingle;
