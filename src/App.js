import * as React from "react";
import { CssBaseline, Tab, Tabs, AppBar, Grid } from "@mui/material";
import {
  Route,
  Link,
  HashRouter,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./component/Home";
import Heidegger00 from "./component/heidegger/Heidegger00";
import Heidegger01 from "./component/heidegger/Heidegger01";
import Heidegger02 from "./component/heidegger/Heidegger02";
import Heidegger03 from "./component/heidegger/Heidegger03";
import Heidegger04 from "./component/heidegger/Text04";
import Nietzsche from "./component/nietzsche/Nietzsche";
import Kant from "./component/kant/Kant";
import Notes from "./component/notes/Notes";
import Dropdown from "./component/Dropdown";
import HeideggerIndex from "./component/heidegger/HeideggerIndex";
import Poems from "./component/poems/Poems";
import { AppBarCuston } from "./component/navigation/AppBarCuston";

const style = {
  dropdown: {
    display: { xs: "block", sm: "none" },
  },
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} position="fixed" sx={style.dropdown}>
            <Dropdown />
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <AppBarCuston />
            </Box>
          </Grid>
        </Grid>

        {routes}
      </BrowserRouter>
    </>
  );
}

const routes = (
  <Routes>
    <Route exact="true" path="/" element={<Home />} />
    <Route exact="true" path="/kant" element={<Kant />} />
    <Route exact="true" path="/poems" element={<Poems />} />
    <Route exact="true" path="/notes" element={<Notes />} />
    <Route exact="true" path="/nietzsche" element={<Nietzsche />} />
    <Route exact="true" path="/heidegger00" element={<Heidegger00 />} />
    <Route exact="true" path="/heidegger01" element={<Heidegger01 />} />
    <Route exact="true" path="/heidegger02" element={<Heidegger02 />} />
    <Route exact="true" path="/heidegger03" element={<Heidegger03 />} />
    <Route exact="true" path="/heidegger04" element={<Heidegger04 />} />
    <Route exact="true" path="/heidegger" element={<HeideggerIndex />} />
  </Routes>
);
