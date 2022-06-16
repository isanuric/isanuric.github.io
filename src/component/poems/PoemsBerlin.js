import React from "react";
import { Grid, Typography } from "@mui/material";
import { data } from "./DataBerlin";
import Post from "./Post";

const style = {
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: "15rem",
    backgroundColor: "#757575",
    userSelect: "none",
  },
  gridItem: {
    m: "3rem",
  },
  headTitle: {
    mt: "3rem",
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: "2rem",
  },
  subTitle: {
    pb: "15rem",
    mb: "3rem",
    color: "white",
  },
};

export default function PoemsBerlin() {
  return (
    window.scrollTo(0, 0),
    (
      <Grid container xs={12} sm={12} sx={style.gridContainer}>
        <Grid item xs={12} sm={12}>
          <Typography sx={style.headTitle}>شعرهای برلین</Typography>
        </Grid>
        <Typography sx={style.subTitle}>به قلم احسان سلمانی</Typography>

        <Grid container>
          <Grid item xs={1} sm={2} md={2} />

          <Grid item xs={10} sm={8} md={8}>
            {data.map((data) => (
              <Post {...data} />
            ))}
          </Grid>
          <Grid item xs={0} sm={2} sx={{}} />
        </Grid>
      </Grid>
    )
  );
}
