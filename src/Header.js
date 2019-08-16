import React from 'react';
import './Header.css';


function Header({page}) {
    const currentStyleNames = "smoothscroll header-text-style current"
    const styleNames = "smoothscroll header-text-style"
    const mainPageContainer = 'container-style'
    const notMainContainer = 'container-style container-not-main'
    return (
        <nav className={page == 0?mainPageContainer:notMainContainer}>
            <ul className='inner-container-style'>
            <li className="header-text">
                <a className={page === 0?currentStyleNames:styleNames}>
                    Home
                </a>
            </li>
            <li className="header-text">
                <a className={page === 1?currentStyleNames:styleNames}>
                About
                </a>
            </li>
            <li className="header-text">
                <a className="smoothscroll header-text-style">
                Projects
                </a>
            </li>
            <li className="header-text">
                <a className="smoothscroll header-text-style">
                Contact
                </a>
            </li>
            </ul>
        </nav>
    )
}

export default Header;