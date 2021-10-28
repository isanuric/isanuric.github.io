import * as React from "react";
import { Tab, Tabs } from "@mui/material";
import Nietzsche from "./nietzsche/Nietzsche";
import Kant from "./kant/Kant";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  HashRouter,
} from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Home from "./Home";
import Heidegger from "./heidegger/Heidegger";

const useStyles = makeStyles({
  tab: {
    fontSize: "22px",
    backgroundColor: "gray",
    color: "white",
  },
});

// export default function NavBar() {
//   const classes = useStyles();

//   return (
//     <>
//       <BrowserRouter>
//         <Route
//           // exact
//           // path="/"
//           render={(history) => (
//             <AppBar position="static" color="inherit">
//               <Tabs
//                 centered
//                 value={history.location.pathname}
//                 // value={
//                 //   history.location.pathname !== "/"
//                 //     ? history.location.pathname
//                 //     : false
//                 // }
//               >
//                 <Tab
//                   // className={classes.tab}
//                   label="خانه"
//                   value="/"
//                   component={Link}
//                   to="/home"
//                 />
//                 <Tab
//                   // className={classes.tab}
//                   label="کانت"
//                   value="/kant"
//                   component={Link}
//                   to="/kant"
//                 />
//                 <Tab
//                   label="نیچه"
//                   value="/nietzsche"
//                   component={Link}
//                   to="/nietzsche"
//                 />
//                 <Tab
//                   label="هایدگر"
//                   value="/heidegger"
//                   component={Link}
//                   to="/heidegger"
//                   disabled
//                 />
//               </Tabs>
//             </AppBar>
//           )}
//         />

//         <Switch>
//           {/* <Route path="/" component={Home} /> */}
//           {/* <Route exact path="/">
//             {<Redirect to="/home" />}
//           </Route> */}

//           <Route exact path="/" component={Home} />
//           <Route path="/kant" component={Kant} />
//           <Route path="/nietzsche" component={Nietzsche} />
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// }

export default function ApNavBarp(location) {
  const allTabs = ["/", "/tab2", "/tab3", "/heidegger"];

  return (
    <HashRouter location={location}>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <div>
              <Tabs centered value={location.pathname}>
                <Tab label="خانه" value="/" component={Link} to={allTabs[0]} />
                <Tab
                  disabled
                  label="تماس"
                  value="/contact"
                  component={Link}
                  to={allTabs[0]}
                />
                {/* <Typography sx={{ flexGrow: 1 }}></Typography> */}
                <Tab
                  label="کانت"
                  value="/tab2"
                  component={Link}
                  to={allTabs[1]}
                />
                <Tab
                  value="/tab3"
                  label="نیچه"
                  component={Link}
                  to={allTabs[2]}
                />
                <Tab
                  value="/heidegger"
                  label="هایدگر"
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
              <Switch>
                <Route path={allTabs[3]} render={() => <Heidegger />} />
                <Route path={allTabs[2]} render={() => <Nietzsche />} />
                <Route path={allTabs[1]} render={() => <Kant />} />
                <Route path={allTabs[0]} render={() => <Home />} />
              </Switch>
            </div>
          )}
        />
      </div>
    </HashRouter>
  );
}
