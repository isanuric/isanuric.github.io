import React from "react";
import { Grid } from "@mui/material";
import BlogPicture from "../BlogPicture";
import ContentAll from "../ContentAll";
import Data from "./Data";

function Nietzsche() {
  return (
    <div>
      {/* <BlogPicture /> */}
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
