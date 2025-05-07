import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingVideos = async () => {
  try {
    const response = await axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
    return response;
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    throw error;
  }
};

const getMovieByGenreId = async (id) => {
  try {
    const response = await axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    throw error;
  }
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};