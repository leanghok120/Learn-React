import React, { useEffect } from "react";
import "./App.css";
import { MovieCard } from "./MovieCard";
import SearchIcon from "./search.svg";

const apiKey = "8f01485f";

const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`;

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

async function getMovies(title) {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  console.log(data.Search);
}

export default function App() {
  useEffect(() => {
    getMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Spiderman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  );
}
