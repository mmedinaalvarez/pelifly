import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMovie from "../CardMovie/CardMovie";
import "./ListMovie.css";

// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(import.meta.env.VITE_API);

const ListMovie = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=es-ES`
    ).then((json) => setNames(json.data.results));
  }, []);
  return (
    <div>
      <div className="Cards-List">
        {names.map((name) => {
          return (
            <div style={{ margin: 10 }} key={name.id}>
              <CardMovie name={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
