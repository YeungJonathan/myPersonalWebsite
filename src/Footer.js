import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import './Footer.css';

function Footer({page}){
    return(
    <div className={page == 0?"container":"container not-main-container"}>
        <a href="https://github.com/YeungJonathan">
            <GoMarkGithub size={40} className="icon-left-more icon" color={'lightblue'}/>
        </a>
        <a href="https://www.linkedin.com/in/jonathan-yeung-25a37814b/">
            <FiLinkedin size={40} className="icon-left icon" color={'lightblue'}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100011289156941&ref=bookmarks">
            <FaFacebookF size={40} className="icon-left icon" color={'lightblue'}/>
        </a>
        <a href="https://www.instagram.com/jono.y/?hl=en">
            <FaInstagram size={40} className="icon" color={'lightblue'}/>
        </a>
    </div>
    )
}

export default Footer
