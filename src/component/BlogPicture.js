import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const style = {
  box: {
    backgroundImage: `url(
      "https://images.pexels.com/photos/3073700/pexels-photo-3073700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    )`,
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundPosition: "center",
    // position: "relative",

    // font
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  subtext: {
    color: "#ffe",
    fontSize: "1.5rem",
    mt: 2,
  },
  citate: {
    color: "#ffe",
    fontSize: ".9rem",
    fontStyle: "italic",
    // textAlign: "center",
    // fontFamily: "Monospace",
    // m: 50,
  },
};

function BlogPicture() {
  return (
    <div>
      <Box sx={style.box}>
        <Box>
          در-جهان-هستن
          <Typography sx={style.citate}>
            Taking up relationships towards the world is possible only
            <br />
            because Dasein, as <b>Being-in-the-world</b>, is as it is.
            <br />
            (Martin Heidegger, Being and Time 12: 84)
          </Typography>
          <Typography sx={style.subtext}>به قلم احسان سلمانی</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default BlogPicture;
