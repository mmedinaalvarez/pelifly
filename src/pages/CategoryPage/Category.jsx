import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardMovie from "../../components/CardMovie/CardMovie";
import SearchMovie from "../../components/SearchMovie/SearchMovie";

const Category = () => {
  const [names, setNames] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    axios(
      `${import.meta.env.VITE_API_URL}${categoryId}/${
        import.meta.env.VITE_API_KEY
      }&language=es-ES`
    ).then((json) => setNames(json.data.results));
  }, []);

  return (
    <div>
      <SearchMovie />
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

export default Category;
