// src/api.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_TMDB_V3_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (category = "popular") => {
  try {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`; // You can change page number to get more results
    const response = await axios.get(url);
    return response.data.results; // Return the movie results
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
