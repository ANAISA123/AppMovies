import axios from "axios";

const  apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=56230e57019033f59a9a8144ca7a520d';

//Obtener categoría de películas populares /GET
export const getPopularMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
    return resp.data.results;
};

//Obtener Categoría próximas en películas / GET
export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
    return resp.data.results;
};
  
//Obtener Categoría Programas Populares de TV / GET
export const getPopularTv = async () => {
const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
return resp.data.results;
};

//Obtener Categoría Familiar en películas / GET
export const getFamilyMovies = async () => {
const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
);
return resp.data.results;
};

//Obtener Categoría Documentales en películas / GET
export const getDocumentaryMovies = async () => {
const resp = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
);
return resp.data.results;
};

//otros
//obtener película por id
export const getMovie = async id => {
    const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
    return resp.data;
};
  
//Buscar contenidos por medio de una letra o palabra
export const searchMovieTv = async (query, type) => {
const resp = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
);
return resp.data.results;
};




