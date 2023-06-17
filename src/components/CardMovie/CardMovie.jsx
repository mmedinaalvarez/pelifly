import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardMovie = ({ name }) => {
  return (
    <Card sx={{ width: 285, height: 230 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${name.backdrop_path}`}
          alt="poster-movie"
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {name.title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CardMovie;
