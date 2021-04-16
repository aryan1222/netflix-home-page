import React, {useEffect, useState} from 'react'
import logo from '../images/netflix-logo.png';
import avatar from '../images/avatar.jpg';

const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
           window.removeEventListener("scroll"); 
        }
    }, [])

    return (
        <nav className={`${show && "nav_show"}`}>
            <img src={logo} alt="netflix" className="netflix_logo"/>
            <img src={avatar} alt="netflix-avatar" className="netflix_avatar"/>
        </nav>
    )
}

export default Navbar
