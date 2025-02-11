// src/App.jsx
import React from 'react';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div>
      <h1>Amazon Prime Clone</h1>
      <MovieList /> {/* This will display the list of all movies */}
    </div>
  );
};

export default App;
