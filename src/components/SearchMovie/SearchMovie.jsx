import { useState } from "react";

import axios from "axios";

// Import Css
import "./SearchMovie.css";

// Components MUI
import { TextField, Button } from "@mui/material";

// Icons MUI
import SearchIcon from "@mui/icons-material/Search";

//Components
import CardMovie from "../../components/CardMovie/CardMovie";

const SearchMovie = () => {
  const [value, setValue] = useState("");
  const [movieData, setMovieData] = useState({});

  console.log("movieData", movieData);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userInput = value.toLowerCase().replace(/ /g, "+"); //Sanatizo la variable de espacios
    if (userInput) {
      axios(
        `https://api.themoviedb.org/3/search/movie${
          import.meta.env.VITE_API_KEY
        }&query=${userInput}&language=es-ES`
      ).then((res) => setMovieData(res.data));
    }
    setValue("");
  };

  return (
    <div>
      <form className="Form" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Buscar pelicula"
          variant="outlined"
          className="TextField"
          value={value}
          onChange={handleOnChange}
        />
        <Button
          variant="contained"
          className="btn"
          sx={{ marginLeft: 1 }}
          endIcon={<SearchIcon />}
          type="submit"
        >
          Buscar
        </Button>
      </form>
      <CardMovie />
      {/*  userData={userData} */}
    </div>
  );
};

export default SearchMovie;
