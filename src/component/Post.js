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
    margin: 45,
    minWidth: 250,
  },
  typography: {
    direction: "rtl",
    align: "right",
    fontSize: "1.5rem",
  },
  subtitle: {
    direction: "rtl",
    fontSize: ".9rem",
    marginBottom: "2rem",
    color: "text.secondary",
  },
});

function Post(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="260"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom align="right" component="div">
            <h1>{props.title}</h1>
          </Typography>
          <Typography className={classes.subtitle}>احسان سلمانی</Typography>

          {/* <Typography sx={{ fontSize: "1.2rem" }}>{props.text}</Typography> */}
          <Typography className={classes.typography}>{props.text}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
