import { pushRotate as Menu } from 'react-burger-menu'
import React from 'react';
import './Header.css';


function Header() {

    const showSettings = () => {
        console.log('hahahha')
    }

    return(
        <Menu pageWrapId={ "page-wrap" }>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ showSettings() } className="menu-item--small" href="">Settings</a>
        </Menu>
    )
}

export default Header;