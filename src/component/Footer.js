import {
  AppBar,
  Container,
  Toolbar,
  Grid,
  Typography,
  Link,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Links from "./Links";

const style = {
  centralizer: {
    m: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
  },
  menuIcon: {
    bgcolor: "black",
    m: 5,
  },
  typography: {
    fontSize: 14,
  },
  link: {
    display: "flex",
    direction: "column",
    bgcolor: "gray",
    color: "white",
    fontSize: 14,
  },
};

export default function Footer() {
  return (
    <AppBar position="static" sx={{ bgcolor: "gray" }}>
      {/* <Container> */}
      {/* <Toolbar> */}
      <Box container sx={style.centralizer}>
        <Box>
          <Link
            sx={style.link}
            href="https://www.heidegger-gesellschaft.de/"
            target="_blank"
          >
            Martin-Heidegger-Gesellschaft
          </Link>
          <Link
            sx={style.link}
            href="https://www.projekt-gutenberg.org/index.html"
            target="_blank"
          >
            Projekt Gutenburg
          </Link>
          <Link sx={style.link} href="https://www.philomag.de/" target="_blank">
            Philosophie Magazin
          </Link>
          <Link
            sx={style.link}
            href="https://www.spektrum.de/alias/lexikon/metzler-lexikon-philosophie/1570920"
            target="_blank"
          >
            Metzler Lexikon Philosophie
          </Link>
        </Box>
        <Links />
      </Box>

      {/* Copyright (c) */}
      <Box sx={style.centralizer}>
        <Box sx={{ display: "flex" }}>
          <CopyrightIcon sx={{ fontSize: "medium", mr: 0.5 }} />
          <Typography sx={style.typography}>Ehsan Salmani | 2021</Typography>
        </Box>
      </Box>
    </AppBar>
  );
}
