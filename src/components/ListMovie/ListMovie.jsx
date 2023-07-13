import React, { useState, useEffect } from "react";
import CardMovie from "../CardMovie/CardMovie";
import "./ListMovie.css";

import { Link } from "react-router-dom";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ListMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const q = query(collection(db, "movies"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setMovies(docs);
    };
    getMovies();
  }, []);
  return (
    <div>
      <div className="Cards-List">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Link to={`detail/${movie.id}`}>
                <CardMovie data={movie} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
