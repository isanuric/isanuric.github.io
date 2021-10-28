import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Nietzsche from "./nietzsche/Nietzsche";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import ContentAll from "./ContentAll";

const TabsCentered = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div>
      <BrowserRouter>
        <Route path="/">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="کانت" value="/kant" component={Link} to="/kant" />
              <Tab
                label="نیچه"
                value="/nietzsche"
                component={Link}
                to="/nietzsche"
              />
              <Tab
                label="هایدگر"
                value="/heidegger"
                component={Link}
                to="/heidegger"
                disabled
              />
            </Tabs>
          </Box>
        </Route>

        <Switch>
          <Route path="/kant" component={ContentAll} />
          <Route path="/nietzsche" component={Nietzsche} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default TabsCentered;
