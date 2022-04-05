import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    // console.log(data.Search);
  };

  const API_URL = "http://www.omdbapi.com?apikey=fa297978";
  //console.log("movies",movies[0] )
  /* const movie1 = {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "tt0371746",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  }; */

  useEffect(() => {
    searchMovies("Love");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies</h2>
        </div>
      )}
    </div>
  );
};

export default App;
//fa297978
