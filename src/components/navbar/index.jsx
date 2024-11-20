import React from 'react';
import '../navbar/style.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/truck_logo.png'

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, hash) => {
    navigate(path);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const offset = 100;
        const position = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <header id="navbar">
      <a href=""><img className='logo' src={Logo} alt="" /></a>
      <nav>
        <ul>
          <li>
            <a onClick={() => handleNavigation('/', '#ourcompany')}>Our Company</a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/', '#suggestions')}>Suggestions</a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/', '#ourworkflow')}>Our Workflow</a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/', '#operation')}>Operation</a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/', '#contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;