import { pushRotate as Menu } from 'react-burger-menu'
import React from 'react';
import Avatar from 'react-avatar';
import './Header.css';
import { FaRegBell } from 'react-icons/fa';


function Header() {
    return (
        <nav className='container-style'>
            <ul className='inner-container-style'>
            <li className="header-text">
                <a className="smoothscroll header-text-style current">
                    Home
                </a>
            </li>
            <li className="header-text">
                <a className="smoothscroll header-text-style">
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
            {/* <a>About</a>
            <a>Projects</a>
            <a>Contact</a> */}
            </ul>
        </nav>
    )
}

{/* // function Header() { */}

{/* //     const showSettings = () => {
//         console.log('hahahha')
//     }

//     return(
//         <Menu>
//             <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
//                 <Avatar size={200} name="Jonathan Yeung" style={{paddingBottom:'10%'}} round src={require('./assets/jy.png')}/>
//                 <a id="home" className="menu-item" href="/">
//                     <h1>Home 🏠</h1>
//                 </a>
//                 <a id="about" className="menu-item" href="/about">
//                     <h1>About 🤟</h1>
//                 </a>
//                 <a id="projects" className="menu-item" href="/projects">
//                     <h1>Projects 💼</h1>
//                 </a>
//                 <a id="contact" className="menu-item" href="/contact">
//                     <h1>Contact ✉️</h1>
//                 </a>
//             </div>
//         </Menu>
//     )
// } */}

export default Header;