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
    window.scrollTo(0, 0),
    (
      <div>
        <BlogPicture />
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={style.card}>
              <CardActionArea href={"#/heidegger"}>
                <CardMedia
                  sx={style.cardMedia}
                  component="img"
                  // image="https://static.dw.com/image/17615415_303.jpg"
                  image="https://ichi.pro/assets/images/max/724/0*-U9iMwWu7ze7AjHb.jpg"
                  alt="Quelle: https://ichi.pro/assets/images/max/724/0*-U9iMwWu7ze7AjHb.jpg"
                />
                <CardContent sx={style.cardContent}>مارتین هایدگر</CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Link href={"#/nietzsche"} underline="none">
              <Card sx={style.card}>
                <CardMedia
                  sx={style.cardMedia}
                  component="img"
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

        {/* row 2 */}
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={style.card}>
              <CardActionArea href={"#/kant"}>
                <CardMedia
                  sx={style.cardMedia}
                  component="img"
                  image="https://upload.wikimedia.org/wikipedia/commons/c/cc/Immanuel_Kant_%28portrait%29.jpg"
                  alt="Kant"
                />
                <CardContent sx={style.cardContent}>ایمانوئل کانت</CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={style.card}>
              <CardActionArea href={"#/notes"}>
                <CardMedia
                  sx={style.cardMedia}
                  component="img"
                  image="https://static.vecteezy.com/system/resources/previews/001/874/132/non_2x/abstract-geometric-white-background-free-vector.jpg"
                  alt="Kant"
                />
                <CardContent sx={style.cardContent}>یادداشت‌ها</CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Box sx={{ mb: 100 }}></Box>
        </Grid>
        <Footer />
      </div>
    )
  );
}

export default Home;
