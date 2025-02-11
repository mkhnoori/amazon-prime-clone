import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.VITE_APP_TMDB_V3_API_KEY}`
      );
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
