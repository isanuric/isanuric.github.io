import React from "react";
import BlogPicture from "./BlogPicture";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Link from "@mui/material/Link";
import Footer from "./Footer";
import { Box } from "@mui/system";

const style = {
  card: {
    margin: 5,
  },
  cardMedia: {
    maxHeight: 200,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: 26,
  },
};

function Home() {
  return (
    <div>
      <BlogPicture />
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={style.card}>
            <CardActionArea href={"#/kant"}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                image="https://kant-online.ru/en/wp-content/uploads/2014/07/kant1.jpg"
                alt="Kant"
              />
              <CardContent sx={style.cardContent}>ایمانوئل کانت</CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* row 2 */}
        <Grid item xs={12} sm={4}>
          <Link href={"#/nietzsche"} underline="none">
            <Card sx={style.card}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                // height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/5/53/Nietzsche_Olde_08.JPG"
                alt="Nietzsche"
              />
              <CardContent sx={style.cardContent}>
                فردریش ویلهلم نیچه
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Link href={"#/heidegger"} underline="none">
            <Card sx={style.card}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                // height="140"
                image="https://static.dw.com/image/17615415_303.jpg"
                alt="Heidegger"
              />
              <CardContent sx={style.cardContent}>مارتین هایدگر</CardContent>
            </Card>
          </Link>
        </Grid>

        <Box sx={{ mb: 100 }}></Box>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home;
