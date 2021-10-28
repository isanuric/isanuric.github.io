import NavBar from "./component/NavBar";
// import ThemeCustom from "./component/ThemeCustom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Grid } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      {/* <BlogPicture /> */}
      {/* <Grid container>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <ContentAll />
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
