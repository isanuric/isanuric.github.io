import React from "react";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Footer from "../Footer";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Home() {
  const style = {
    headTitle: {
      marginTop: "3rem",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      color: "gray",
      fontSize: "2rem",
    },
    subHeadTitle: {
      display: "flex",
      justifyContent: "center",
      typography: "subtitle2",
      fontWeight: "light",
      fontStyle: "italic",
    },
    card: {
      // margin: 5,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      minHeight: 200,
      maxHeight: 200,
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-around",
      fontSize: 26,
    },
    cardActions: {
      direction: "ltr",
    },
  };

  const cards = [
    {
      image:
        "https://images.pexels.com/photos/9979101/pexels-photo-9979101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: <p>درآمدی بر هایدگر</p>,
      href: "#/heidegger01",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Sein-und-Zeit-Hauptbegriffe.svg/1280px-Sein-und-Zeit-Hauptbegriffe.svg.png",
      title: (
        <p>
          درآمدی بر هستی و زمان
          <br />
          Sein und Zeit
        </p>
      ),
      href: "#/heidegger02",
    },
    {
      image:
        "https://images.freeimages.com/images/small-previews/d2f/bluebells-2007-1374105.jpg",
      title: (
        <p>
          تفاوت انتولوژیک
          <br />
          Ontologische Differenz
        </p>
      ),
      href: "#/heidegger03",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638205641601-eeb448225cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      title: (
        <>
          دازاین
          <br />
          Dasein
        </>
      ),
      href: "#/heidegger04",
    },
  ];
  return (
    window.scrollTo(0, 0),
    (
      <>
        <Typography sx={style.headTitle}>مارتین هایدگر</Typography>
        <Typography sx={style.subHeadTitle}>
          In das, was Denken heißt, gelangen wir, wenn wir seIber denken.
        </Typography>
        <Typography sx={style.subHeadTitle}>
          Martin Heidegger (WHD - 5)
        </Typography>
        <Container sx={{ py: 8, direction: "rtl" }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={style.card}>
                  <CardMedia
                    sx={style.cardMedia}
                    component="img"
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent>
                  <CardActions sx={style.cardActions}>
                    <Button size="small" href={card.href}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Footer />
      </>
    )
  );
}

export default Home;

{
  /* <BlogPicture /> */
}
{
  /* <Grid container>
          <Grid item xs={12} sm={2}></Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={style.card}>
              <CardActionArea href={"#/heidegger"}>
                <CardMedia
                  sx={style.cardMedia}
                  component="img"
                  image="https://static.dw.com/image/17615415_303.jpg"
                  alt="Heidegger"
                />
                <CardContent sx={style.cardContent}>مارتین هایدگر</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={style.card}>
              <CardActionArea href={"#/heidegger2"}>
                <CardMedia
                  sx={style.cardMedia}
                  component="img"
                  image={cards.image}
                  alt="Heidegger2"
                />
                <CardContent sx={style.cardContent}>مارتین هایدگر</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid> */
}
