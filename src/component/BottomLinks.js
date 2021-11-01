import { IconButton, Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";

import React from "react";
import { Box } from "@mui/system";
import SimpleBottomNavigation from "./BottomNavigation";

const style = {
  bottomLinks: {
    height: 100,
    display: "flex",
    flexWrap: "wrap",
    // alignContent: "center",
    justifyContent: "center",
    fontSize: 20,
    mb: 20,
    // bgcolor: "gray",
  },
  link: {
    mr: 5,
  },
};

function BottomLinks() {
  return (
    <Box sx={style.bottomLinks}>
      <Link href="#/heidegger" underline="none" sx={style.link}>
        هایدگر
      </Link>
      <Link href="#/nietzsche" underline="none" sx={style.link}>
        نیچه
      </Link>
      <Link href="#/kant" underline="none" sx={style.link}>
        کانت
      </Link>
      <Link href="#/" underline="none" sx={style.link}>
        تماس
      </Link>
      <Link href="#/" underline="none" sx={style.link}>
        خانه
      </Link>
    </Box>
  );
}

export default BottomLinks;
