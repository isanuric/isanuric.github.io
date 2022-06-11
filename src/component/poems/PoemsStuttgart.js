import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ContentAll from "../ContentAll";
import { data } from "./Data";
import BottomLinks from "../BottomLinks";
import Footer from "../Footer";
import Post from "./Post";

const style = {
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: "15rem",
    // mb: "25rem",
    backgroundColor: "#212121",
  },
  gridItem: {
    m: "3rem",
  },
  headTitle: {
    mt: "3rem",
    // height: "100px",
    display: "flex",
    justifyContent: "center",
    color: "gray",
    fontSize: "2rem",
    // backgroundColor: "blue",
  },
  subTitle: {
    pb: "15rem",
    color: "gray",
  },
};

export default function PoemsStuttgart() {
  return (
    window.scrollTo(0, 0),
    (
      <Grid container xs={12} sm={12} sx={style.gridContainer}>
        <Grid item xs={12} sm={12}>
          <Typography sx={style.headTitle}>شعرهای اشتوتگارت</Typography>
        </Grid>
        <Typography sx={style.subTitle}>به قلم احسان سلمانی</Typography>

        <Grid container>
          <Grid item xs={1} sm={2} sx={{}} />

          <Grid item xs={10} sm={8} sx={{}}>
            {data.map((data) => (
              <Post {...data} />
            ))}

            <BottomLinks />
          </Grid>
          <Grid item xs={0} sm={2} sx={{}} />
        </Grid>
      </Grid>
    )
  );
}
