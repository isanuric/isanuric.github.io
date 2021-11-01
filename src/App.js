import * as React from "react";
import { CssBaseline, Tab, Tabs } from "@mui/material";
import { Route, Switch, Link, HashRouter } from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./component/Home";
import Heidegger from "./component/heidegger/Heidegger";
import Nietzsche from "./component/nietzsche/Nietzsche";
import Kant from "./component/kant/Kant";
import Dropdown from "./component/Dropdown";

function App(location) {
  const allTabs = ["/", "/kant", "/nietzsche", "/heidegger"];
  return (
    <>
      <CssBaseline />
      <HashRouter location={location}>
        <Route
          path="/"
          render={({ location }) => (
            // left tabs
            <Box xs={12} sx={{ bgcolor: "error.main" }}>
              <Tabs variant="scrollable" value={location.pathname}>
                <Dropdown />
                <Box sx={{ flexGrow: 1 }}>
                  <Tab
                    xs={12}
                    label="خانه"
                    value="/"
                    component={Link}
                    to={allTabs[0]}
                  />
                  <Tab
                    disabled
                    label="تماس"
                    value="/contact"
                    component={Link}
                    to={allTabs[0]}
                  />
                </Box>
                // right tabs
                <Tab
                  label="کانت"
                  value="/kant"
                  component={Link}
                  to={allTabs[1]}
                />
                <Tab
                  label="نیچه"
                  value="/nietzsche"
                  component={Link}
                  to={allTabs[2]}
                />
                <Tab
                  label="هایدگر"
                  value="/heidegger"
                  component={Link}
                  to={allTabs[3]}
                />
                <Tab
                  disabled
                  value="/note"
                  label="یادداشت‌ها"
                  component={Link}
                  to={allTabs[4]}
                />
              </Tabs>
            </Box>
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
