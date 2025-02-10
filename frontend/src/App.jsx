import React from 'react';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div>
      <h1>Amazon Prime Clone</h1>
      <MovieList category="trending" />
      <MovieList category="top_rated" />
    </div>
  );
};

export default App;



