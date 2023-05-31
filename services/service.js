import axios from "axios";

const  apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=56230e57019033f59a9a8144ca7a520d';

//Obtener categoría de películas populares /GET
export const getPopularMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
    return resp.data.results;
};

//Obtener Categoría películas de comedia / GET
export const getComedyMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/Comedy?${apiKey}`);
    return resp.data.results;
};
  
//Obtener Categoría películas de Misterio / GET
export const getMisteryMovies = async () => {
const resp = await axios.get(`${apiUrl}/movie/Mystery?${apiKey}`);
return resp.data.results;
};

//Obtener Categoría películas de Fantasía / GET
export const getFantasyMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/Fantasy?${apiKey}`);
    return resp.data.results;
    };

//Obtener Categoría películas de Acción  / GET
export const getActionMovies = async () => {
const resp = await axios.get(
    `${apiUrl}/movie/Action?${apiKey}`,
);
return resp.data.results;
};

//Obtener Categoría películas de Romance / GET
export const getRomanceMovies = async () => {
const resp = await axios.get(
    `${apiUrl}/movie/Romance?${apiKey}&with_genres=10749`,
);
return resp.data.results;
};

//Obtener Categoría películas de Terror / GET
export const getHorrorMovies = async () => {
    const resp = await axios.get(
        `${apiUrl}/movie/Horror?${apiKey}&with_genres=27`,
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

 


