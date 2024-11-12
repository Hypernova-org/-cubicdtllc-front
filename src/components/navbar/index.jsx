import React from 'react';
import '../navbar/style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <header>
            <a href=""><img src="" alt="" /></a>
            <nav>
                <ul>
                    <li><Link to="/products">Our Company</Link></li>
                    <li><details class="menu-details">
                            <summary>Shipping Solutions</summary>
                            <div className='nav-dropdown'>
                                <a href="">Katalog</a>
                                <a href="">Yo'riqnoma</a>
                                <a href="">Sertifikatlar</a>
                                <a href="">Broshyular</a>
                            </div>
                        </details></li>
                    <li><Link to="/news">Technology</Link></li>
                    <li><details class="menu-details">
                            <summary>Work with Us</summary>
                            <div className='nav-dropdown'>
                                <a href="">Katalog</a>
                                <a href="">Yo'riqnoma</a>
                                <a href="">Sertifikatlar</a>
                                <a href="">Broshyular</a>
                            </div>
                        </details></li>
                        <li><details class="menu-details">
                            <summary>Drivers</summary>
                            <div className='nav-dropdown'>
                                <a href="">Katalog</a>
                                <a href="">Yo'riqnoma</a>
                                <a href="">Sertifikatlar</a>
                                <a href="">Broshyular</a>
                            </div>
                        </details></li>
                        <button><a href="">Sign Up</a></button>
                        <button><a href="">Login</a></button>
                </ul>
            </nav>
            <div className='burger_menu'>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </a>
            </div>
        </header>
    </>
  )
}

export default Navbar