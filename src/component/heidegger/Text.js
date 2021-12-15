import React from "react";
import { Grid } from "@mui/material";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";
import PostSingle from "../PostSingle";

function Text() {
  const variables = {
    image: "",
    title: (
      <>
        <br />
      </>
    ),
    text: <p></p>,
  };

  return (
    window.scrollTo(0, 0),
    (
      <div>
        <Grid container>
          <Grid item xs={0} sm={0} md={2}></Grid>
          <Grid item xs={12} sm={12} md={8}>
            <PostSingle props={variables} />
            <BottomLinks />
          </Grid>
        </Grid>

        <Footer />
      </div>
    )
  );
}

export default Text;
