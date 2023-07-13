import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../../components/CardMovie/CardMovie";
import "./MovieDetailPage.css";

import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);

  console.log(movieData);

  useEffect(() => {
    const getMovies = async () => {
      const q = query(collection(db, "movies"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setMovieData(docs);
    };
    getMovies();
  }, [id]);

  return (
    <div className="DetailContainer">
      <div>
        {movieData.map((data) => {
          return (
            <div className="CardDetail" key={data.id}>
              <CardMovie data={data} />
              <div className="OverviewDetail">
                <p>{data.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieDetailPage;
