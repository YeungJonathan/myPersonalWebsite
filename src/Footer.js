import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { FiLinkedin } from "react-icons/fi";
import './Footer.css';

function Footer(){
    return(
    <div className="container">
        <a href="https://github.com/YeungJonathan">
            <GoMarkGithub size={40} className="icon-left icon" color={'lightblue'}/>
        </a>
        <a href="https://www.linkedin.com/in/jonathan-yeung-25a37814b/">
            <FiLinkedin size={40} className="icon" color={'lightblue'}/>
        </a>
    </div>
    )
}

export default Footer
