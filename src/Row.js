import React, {useState, useEffect} from 'react';
import axios from './axios';
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    console.table(movies);

    const list = movies.map((movie)=>
        <img 
            key={movie.id}
            className="row_poster" 
            src={`${baseUrl}${movie.poster_path}`}  
            alt={movie.name} 
            />
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
