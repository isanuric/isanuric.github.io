import { IconButton, Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";

import React from "react";
import { Box } from "@mui/system";

const style = {
  bottomLinks: {
    display: "flex",
    flexWrap: "wrap",
    // alignContent: "space-around",
    justifyContent: "center",
    // bgcolor: "gray",
  },
};

function BottomLinks() {
  return (
    <Box sx={style.bottomLinks}>
      <Link href="#/kant" underline="none">
        <MenuItem>کانت</MenuItem>
      </Link>
      <Link href="#/nietzsche" underline="none">
        <MenuItem>نیچه</MenuItem>
      </Link>
      <Link href="#/heidegger" underline="none">
        <MenuItem>هایدگر</MenuItem>
      </Link>
      <Link href="#/" underline="none">
        <MenuItem>تماس</MenuItem>
      </Link>
      <Link href="#/" underline="none">
        <MenuItem>خانه</MenuItem>
      </Link>
    </Box>
  );
}

export default BottomLinks;
