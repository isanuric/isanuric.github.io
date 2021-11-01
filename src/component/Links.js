import { MenuItem, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  link: {
    bgcolor: "gray",
    color: "white",
    fontSize: 14,
  },
};

function Links() {
  return (
    <Box sx={style.link}>
      <Link href="/#" underline="none">
        <MenuItem sx={style.link}>خانه</MenuItem>
      </Link>
      <Link href="#/kant" underline="none">
        <MenuItem sx={style.link}>کانت</MenuItem>
      </Link>
      <Link href="#/nietzsche" underline="none">
        <MenuItem sx={style.link}>نیچه</MenuItem>
      </Link>
      <Link href="#/heidegger" underline="none">
        <MenuItem sx={style.link}>هایدگر</MenuItem>
      </Link>
      <Link href="#/" underline="none">
        <MenuItem sx={style.link}>تماس</MenuItem>
      </Link>
    </Box>
  );
}

export default Links;
