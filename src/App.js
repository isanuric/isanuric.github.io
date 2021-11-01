import * as React from "react";
import { CssBaseline, Tab, Tabs } from "@mui/material";
import { Route, Switch, Link, HashRouter } from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./component/Home";
import Heidegger from "./component/heidegger/Heidegger";
import Nietzsche from "./component/nietzsche/Nietzsche";
import Kant from "./component/kant/Kant";
import Dropdown from "./component/Dropdown";

const style = {
  tab: {
    fontSize: 20,
  },
};

function App(location) {
  const allTabs = ["/", "/kant", "/nietzsche", "/heidegger"];
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
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
                    to={allTabs[1]}
                  />
                  <Tab
                    sx={style.tab}
                    label="نیچه"
                    value="/nietzsche"
                    component={Link}
                    to={allTabs[2]}
                  />
                  <Tab
                    sx={style.tab}
                    label="هایدگر"
                    value="/heidegger"
                    component={Link}
                    to={allTabs[3]}
                  />
                  <Tab
                    disabled
                    sx={style.tab}
                    value="/note"
                    label="یادداشت‌ها"
                    component={Link}
                    to={allTabs[4]}
                  />
                </Tabs>
              </Box>
            </>
          )}
        />
        <Switch>
          <Route path={allTabs[3]} render={() => <Heidegger />} />
          <Route path={allTabs[2]} render={() => <Nietzsche />} />
          <Route path={allTabs[1]} render={() => <Kant />} />
          <Route path={allTabs[0]} render={() => <Home />} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
