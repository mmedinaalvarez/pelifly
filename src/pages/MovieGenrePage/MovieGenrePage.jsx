import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../../components/CardMovie/CardMovie";
import "./MovieGenrePage.css";

import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

const MovieGenrePage = () => {
  const { genre } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const q = query(collection(db, "movies"), where("genre", "==", genre));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setMovieData(docs);
    };
    getMovies();
  }, [genre]);

  return (
    <div>
      <div className="GenreContainer">
        {movieData.map((data) => {
          return (
            <div key={data.id}>
              <CardMovie data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieGenrePage;
