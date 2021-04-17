import React, {useState, useEffect} from 'react';
import axios from '../services/axios';
import {baseUrl} from '../services/baseUrl';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title, fetchUrl, isLarger}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "")
                .then((url)=>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch((error)=> console.log(error));
        }
    }

    const list = movies.map((movie)=>
        <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLarger && 'row_posterLarge'}`}
            src={isLarger ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${movie.backdrop_path}`}  
            alt={movie.name} />
        )

    const opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay : 1
        }
    }
    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row_posters">
                {list}
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
