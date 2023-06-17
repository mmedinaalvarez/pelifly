import { useState, useEffect } from "react";
import axios from "axios";

import CardMovie from "../../components/CardMovie/CardMovie";

import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";

const DetailPage = () => {
  const [name, setName] = useState([{}]);

  let { id } = useParams();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}${
        import.meta.env.VITE_API_KEY
      }&language=es-ES`
    ).then((json) => setName(json.data));
  }, [id]);

  return (
    <div
      style={{
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      }}
    >
      <div>{name.id ? <CardMovie name={name} /> : null}</div>
      <div>
        <div style={{ color: "white" }}>{name.overview}</div>
        <Button style={{ marginTop: 30 }} variant="contained">
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default DetailPage;
