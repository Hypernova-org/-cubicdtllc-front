import React from 'react';
import '../footer/style.css';
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className='right'>
            <p>Copyright © 2024 CUBICDT LLC</p>
            <div>
              <p>Site crafted by Robintek:</p>
              <a href="https://hypernova.uz/">
                <img src={Logo} alt="" />
              </a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer