import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Spinner from "../Spinner/Spinner";
import noImage from "./no-image.png";

const CardMovie = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <CardMedia
              component="img"
              height="285"
              image={data.img !== "N/A" ? data.img : noImage}
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
          </>
        )}
      </CardActionArea>
    </Card>
  );
};

export default CardMovie;
