import React, {useState, useEffect} from 'react';
import axios from '../services/axios';
import {baseUrl} from '../services/baseUrl';

function Row({title, fetchUrl, isLarger}) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    const list = movies.map((movie)=>
        <img 
            key={movie.id}
            className={`row_poster ${isLarger && 'row_posterLarge'}`}
            src={isLarger ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${movie.backdrop_path}`}  
            alt={movie.name} />
        )

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row_posters">
                {list}
            </div>
        </div>
    )
}

export default Row
