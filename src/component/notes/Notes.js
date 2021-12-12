import React from "react";
import { Grid, Typography } from "@mui/material";
import BlogPicture from "../BlogPicture";
import ContentAll from "../ContentAll";
import { makeStyles } from "@mui/styles";
import Data from "./Data";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";

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

// React.useEffect(() => {
//   window.scrollTo(0, 0)
// }

function Kant() {
  const classes = useStyles();

  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Typography className={classes.headTitle}>ایمانوئل کانت</Typography>
        <Grid container>
          <Grid item xs={0} sm={0} md={2}></Grid>
          <Grid item xs={12} sm={12} md={8}>
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
