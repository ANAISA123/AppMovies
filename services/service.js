import axios from 'axios'

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=56230e57019033f59a9a8144ca7a520d';

// Get Adventure Movies
export const getAdventureMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=12`);
    return resp.data.results;
};

// Get Upcoming Movies
export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
    return resp.data.results;
  };
  
  // Get Music Movies
  export const getMusicMovies = async () => {
    const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=10402`);
    return resp.data.results;
  };
   // Get Drama Movies
   export const getDramaMovies = async () => {
    const resp = await axios.get(
      `${apiUrl}/discover/movie?${apiKey}&with_genres=18`,
    );
    return resp.data.results;
  };
  
  // Get Horror Movies
  export const getHorrorMovies = async () => {
    const resp = await axios.get(
      `${apiUrl}/discover/movie?${apiKey}&with_genres=27`,
    );
    return resp.data.results;
  };
  
  // Get Action Movies
  export const getActionMovies = async () => {
    const resp = await axios.get(
      `${apiUrl}/discover/movie?${apiKey}&with_genres=28`,
    );
    return resp.data.results;
  };

   // Get Comedy Movies
   export const getComedyMovies = async () => {
    const resp = await axios.get(
      `${apiUrl}/discover/movie?${apiKey}&with_genres=35`,
    );
    return resp.data.results;
  };

  //otros
  //obtener pelicula por id

  export const getMovie = async id => {
    const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
    return resp.data;
  };
  
  // Search for Movie or TV by Keyword
  export const searchMovieTv = async (query, type) => {
    const resp = await axios.get(
      `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
    );
    return resp.data.results;
  };