import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  box: {
    backgroundImage: `url(
      "https://images.pexels.com/photos/3073700/pexels-photo-3073700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    )`,
    // height: "900px",
    minHeight: "100vh",

    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
  },
});

function BlogPicture() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.box}>
        <Box>
          در-جهان-هستن
          <Typography className={classes.subtext}>
            به قلم احسان سلمانی
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default BlogPicture;
