import * as React from "react";
import { CssBaseline, Tab, Tabs } from "@mui/material";
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

const style = {
  tab: {
    fontSize: 20,
  },
};

function App(location) {
  const allTabs = ["/", "/heidegger", "/nietzsche", "/kant", "/notes"];
  return (
    <>
      <CssBaseline />
      <HashRouter location={location}>
        <Route
          path="/"
          render={({ location }) => (
            <>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Dropdown />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  backgroundColor: "#bdbdbd",
                }}
              >
                <Tabs variant="scrollable" value={location.pathname}>
                  {/* left tabs */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Dropdown />
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
                    value="/nietzsche"
                    component={Link}
                    to={"/nietzsche"}
                  />
                  <Tab
                    sx={style.tab}
                    label="هایدگر"
                    value="/heidegger"
                    component={Link}
                    to={"/heidegger"}
                  />
                  <Tab
                    // disabled
                    sx={style.tab}
                    label="گزینه‌گویه‌ها"
                    value="/notes"
                    component={Link}
                    to={"/notes"}
                  />
                </Tabs>
              </Box>
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
          <Route path={allTabs[4]} render={() => <Notes />} />
          <Route path={allTabs[3]} render={() => <Kant />} />
          <Route path={allTabs[2]} render={() => <Nietzsche />} />
          <Route path={allTabs[0]} render={() => <Home />} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
