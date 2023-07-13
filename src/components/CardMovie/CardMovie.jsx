import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardMovie = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="285"
          image={data.img}
          alt="poster-movie"
        />
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          textAlign="center"
          marginTop="5px"
          textDecoration="false"
        >
          {data.name}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CardMovie;
