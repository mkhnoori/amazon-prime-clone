import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies(category);
      setMovies(movieData);
    };
    getMovies();
  }, [category]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
