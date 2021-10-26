import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabsCentered from "./TabsCenterd";

export default function NavBar() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div">
          Blog
        </Typography>
        <TabsCentered />
      </Toolbar>
    </AppBar>
  );
}
