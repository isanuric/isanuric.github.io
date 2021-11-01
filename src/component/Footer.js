import { AppBar, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { grey } from "@mui/material/colors";
import Links from "./Links";

const greyConst = grey[800];

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
    mr: 0.5,
  },
  link: {
    display: "flex",
    direction: "column",
    bgcolor: greyConst,
    color: "white",
    fontSize: 14,
    m: 1,
  },
};

export default function Footer() {
  return (
    <AppBar position="static" sx={{ bgcolor: greyConst }}>
      <Box container sx={style.centralizer}>
        <Box>
          <Link
            sx={style.link}
            href="https://www.projekt-gutenberg.org/index.html"
            target="_blank"
          >
            Projekt Gutenburg
          </Link>
          <Link
            sx={style.link}
            href="https://www.projekt-gutenberg.org/autoren/namen/kant.html"
            target="_blank"
          >
            Immanuel Kant
          </Link>
          <Link
            sx={style.link}
            href="https://www.projekt-gutenberg.org/autoren/namen/nietzsch.html"
            target="_blank"
          >
            Friedrich Wilhelm Nietzsche
          </Link>
          <Link
            sx={style.link}
            href="https://www.heidegger-gesellschaft.de/"
            target="_blank"
          >
            Martin-Heidegger-Gesellschaft
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
          <Link
            sx={style.link}
            href="https://plato.stanford.edu/contents.html"
            target="_blank"
          >
            Stanford Encyclopedia of Philosophy (eng)
          </Link>
        </Box>

        <Links />
      </Box>

      {/* Copyright (c) */}
      <Box sx={style.centralizer}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={style.typography}>Founded and created by</Typography>
          <CopyrightIcon sx={{ fontSize: "medium", mr: 0.5 }} />
          <Typography sx={style.typography}>
            <Link
              sx={{ color: "#4fc3f7", mr: 1 }}
              href="http://instagram.com/ehsan.pd_?r=nametag"
              target="_blank"
            >
              Ehsan Salmani
            </Link>
            | 2021
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
}
