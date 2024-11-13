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
                    <li><a href="#ourcompany">Our Company</a></li>
                    <li><a href="#suggestions">Suggestions</a></li>
                    <li><a href="#ourworkflow">Our Workflow</a></li>
                    <li><a href="#operation">Operation</a></li>
                    <li><a href="#contact">Contact</a></li>
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