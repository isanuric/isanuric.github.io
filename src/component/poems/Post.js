import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const style = {
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: "10rem",
    pb: "2rem",
    // width: { xs: 350, sm: 400 },
    backgroundColor: "#f5f5f5",
    // width: 750,
    // backgroundColor: "red",
    // minWidth: 250,
  },
  typography: {
    direction: "rtl",
    align: "right",
    fontSize: { xs: "1rem", sm: "1.5rem" },
    whiteSpace: "pre-line",
    p: ".5rem",
  },
  typographySignature: {
    direction: "ltr",
    pt: "3rem",
  },
  subtitle: {
    direction: "rtl",
    fontSize: "1.5rem",
    marginBottom: "2rem",
    color: "text.secondary",
  },
};

export default function Post(props) {
  return (
    <Card sx={style.card}>
      <Typography sx={style.typography}>
        {props.text}
        <Typography sx={style.typographySignature}>احسان سلمانی</Typography>
      </Typography>
    </Card>
  );
}
