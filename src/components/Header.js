import React, {useState, useEffect} from 'react';
import axios from '../services/axios';
import requests from '../services/requests';
import {baseUrl} from '../services/baseUrl';
import Navbar from './Navbar';

const Header = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.table(request.data.results);
            const random = request.data.results[
                Math.floor(Math.random()* request.data.results.length-1)
            ]

            setMovie(random);

            return request;
        }
        fetchData();
    }, [])

    // console.log(movie);
    
    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <header>
            <Navbar/> 
        
            <div className="banner" style={
                {backgroundImage: `url("${baseUrl}${movie?.backdrop_path}")`}}>
            
                <div className="banner_contents">
                    <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
                </div>

                <div className="banner--fadeBottom"/>
            </div>
        </header>
    )
}

export default Header
