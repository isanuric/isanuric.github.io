import Body from "./component/Body";
import NavBar from "./component/NavBar";
// import ThemeCustom from "./component/ThemeCustom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Grid } from "@mui/material";
import ContentAll from "./component/ContentAll";

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={ThemeCustom}> */}
      <CssBaseline />
      <NavBar />
      <Grid container>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          {/* <Body /> */}
          <ContentAll />
        </Grid>
      </Grid>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
