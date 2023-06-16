import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMovie from "../CardMovie/CardMovie";
import "./ListMovie.css";

import { Link } from "react-router-dom";

const ListMovie = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios(
      `${import.meta.env.VITE_API_URL}${
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
              <Link to={`detail/${name.id}`}>
                <CardMovie name={name} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
