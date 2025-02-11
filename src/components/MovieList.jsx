// src/components/MovieList.jsx
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';  // Assuming your api.js file is in the src folder

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      // Fetching the 'popular' category or any other movie list from TMDB
      const data = await fetchMovies('popular');
      setMovies(data);
      setLoading(false);
    };

    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
