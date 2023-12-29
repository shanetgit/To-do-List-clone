import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {setSearchResults} from '../redux/actions';
import { searchMovies } from '../services/tmdbService';


const MovieSearch =()=>{
    const dispatch =useDispatch();
    const[query,setQuery] =useState('');

    const handleSearch = async ()=>{
        try {
            const results = await searchMovies(query);
            dispatch(setSearchResults(results));

        }catch(error){
            //Handle error
        }
    };

    return (
        <div>
            <input type = "text" value ={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};
export default MovieSearch;