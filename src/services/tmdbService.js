import axios from "axios";
const API_KEY = 'YOUR-TMDB-API-KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query)=>{
    try{
        const response = await axios.get(`${BASE_URL}/search/movie`,{
            params: {
                api_key:API_KEY,
                query,
            },
        });
        return response.data.results;

    } catch(error){
        console.log('Error searching movies:',error);
        throw error;
    }
};
