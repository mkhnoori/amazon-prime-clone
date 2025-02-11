import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_TMDB_V3_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (category = "trending") => {
  try {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
