import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NavLinkCustom from "./NavLinkCustom";

const style = {
  appBar: {
    backgroundColor: "rgba(101, 106, 109, .9)",
  },
};

export const AppBarCuston = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={style.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: { sm: "4px", md: "14px" } }}
            >
              Being-in-the-world
            </Typography>

            <Box>
              <NavLinkCustom to={"/"} text={"HOME"} />
              <NavLinkCustom to={"/nietzsche"} text={"NIETZSCHE"} />
              <NavLinkCustom to={"/kant"} text={"KANT"} />
              <NavLinkCustom to={"/heidegger"} text={"HEIDERGGER"} />
              <NavLinkCustom to={"/poems"} text={"POEMS"} />
              <NavLinkCustom to={"/notes"} text={"NOTES"} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
