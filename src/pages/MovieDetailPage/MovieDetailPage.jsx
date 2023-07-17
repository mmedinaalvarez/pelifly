import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useParams } from "react-router-dom";
import CardMovie from "../../components/CardMovie/CardMovie";
import ReactPlayer from "react-player";
import "./MovieDetailPage.css";
import SelectCinema from "../../components/SelectCinema/SelectCinema";
import ShoppingProduct from "../../components/ShoppingProduct/ShoppingProduct";
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
  const { cartItems, setMovieInfo, movieName, moviePrice } =
    useContext(CartContext);
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

  useEffect(() => {
    if (movieData.length > 0) {
      const { name, price } = movieData[0];
      setMovieInfo(name, price);
    }
  }, [movieData, setMovieInfo]);

  return (
    <div>
      <div className="ContainerDetailMovie">
        <div className="BuyMovie">
          <div>
            <SelectCinema />
          </div>
          <div>
            <ShoppingProduct />
          </div>
        </div>

        <div className="DetailContainer">
          {movieData.map((data) => {
            return (
              <div className="CardDetail" key={data.id}>
                <div className="CardMovie">
                  <CardMovie data={data} />
                  <div>
                    <p>Género: {data.genre}</p>
                    <p>Duracion:{data.duration}</p>
                    <p>Actores: </p>
                    <p className="Description" style={{ marginBottom: 5 }}>
                      {data.actors.join(", ")}
                    </p>
                    <p>Directores:</p>
                    <p className="Description">{data.directors.join(", ")}</p>
                  </div>
                </div>
                <div className="MovieOverviewDetail">
                  <div className="MovieTrailer">
                    <ReactPlayer url={data.trailer} width={365} height={200} />
                  </div>
                  <div className="OverviewDetail">
                    <p>{data.overview}</p>
                    <p>Precio: {data.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
