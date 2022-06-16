import * as React from "react";
import { CssBaseline, Tab, Tabs, AppBar, Grid } from "@mui/material";
import { Route, Switch, Link, HashRouter } from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./component/Home";
import Heidegger00 from "./component/heidegger/Text00";
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

const style = {
  gridContainer: {
    // opacity: [1, 0.95, 0],
    // opacity: 0.1,
  },
  appBar: {
    // backgroundColor: "#bdbdbd",
    backgroundColor: "rgba(81, 86, 94, 0.95)",
  },
  dropdown: {
    display: { xs: "block", sm: "none" },
  },
  tab: {
    fontSize: "18px",
  },
  leftTabs: {
    flexGrow: 1,
    color: "black",
  },
};

export default function App(location) {
  const allTabs = [
    "/",
    "/heidegger",
    "/nietzsche",
    "/kant",
    "/notes",
    "/poems",
  ];

  return (
    <>
      <CssBaseline />
      {dropdownAndAppBar(location, allTabs)}
    </>
  );
}

function dropdownAndAppBar(location, allTabs) {
  return (
    <HashRouter location={location}>
      <Route
        path="/"
        render={({ location }) => (
          <>
            <Grid container sx={style.gridContainer}>
              <Grid item xs={12} position="fixed" sx={style.dropdown}>
                <Dropdown />
              </Grid>

              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  backgroundColor: "#bdbdbd",
                }}
              >
                {AppBarCustom(location, allTabs)}
              </Box>
            </Grid>
          </>
        )}
      />

      <Switch>
        <Route path={allTabs[1]} render={() => <HeideggerIndex />} />
        <Route path={"/heidegger00"} render={() => <Heidegger00 />} />
        <Route path={"/heidegger01"} render={() => <Heidegger01 />} />
        <Route path={"/heidegger02"} render={() => <Heidegger02 />} />
        <Route path={"/heidegger03"} render={() => <Heidegger03 />} />
        <Route path={"/heidegger04"} render={() => <Heidegger04 />} />
        <Route path={allTabs[5]} render={() => <Poems />} />
        <Route path={allTabs[4]} render={() => <Notes />} />
        <Route path={allTabs[3]} render={() => <Kant />} />
        <Route path={allTabs[2]} render={() => <Nietzsche />} />
        <Route path={allTabs[0]} render={() => <Home />} />
      </Switch>
    </HashRouter>
  );
}

function AppBarCustom(location, allTabs) {
  return (
    <AppBar color="primary" position="fixed" sx={style.appBar}>
      <Tabs variant="scrollable" value={location.pathname}>
        {/* left tabs */}
        <Box sx={style.leftTabs}>
          <Tab
            sx={style.tab}
            xs={12}
            label="خانه"
            value="/"
            component={Link}
            to={allTabs[0]}
          />
          <Tab
            disabled
            sx={style.tab}
            label="تماس"
            value="/contact"
            component={Link}
            to={allTabs[0]}
          />
        </Box>

        {/* right tabs */}
        <Tab
          sx={style.tab}
          label="کانت"
          value="/kant"
          component={Link}
          to={"/kant"}
        />
        <Tab
          sx={style.tab}
          label="نیچه"
          value={allTabs[2]}
          component={Link}
          to={allTabs[2]}
        />
        <Tab
          sx={style.tab}
          label="هایدگر"
          value="/heidegger"
          component={Link}
          to={"/heidegger"}
        />
        <Tab
          sx={style.tab}
          label="گزینه‌گویه‌ها"
          value="/notes"
          component={Link}
          to={"/notes"}
        />
        <Tab
          sx={style.tab}
          label="شعرها"
          value="/poems"
          component={Link}
          to={"/poems"}
        />
      </Tabs>
    </AppBar>
  );
}
