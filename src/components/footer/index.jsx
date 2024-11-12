import React from 'react';
import '../footer/style.css';

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className='left'>
            <div>
              <p>Our Company</p>
              <a href="">History</a>
            </div>
            <div>
              <p>Work With Us</p>
              <a href="">Overview</a>
              <a href="">See Available Positions</a>
              <a href="">Employee Login</a>
            </div>
            <div>
              <p>Shipping Solutions</p>
              <a href="">Truckload</a>
              <a href="">Power Only</a>
              <a href="">Team Expedited</a>
              <a href="">Refrigerated</a>
            </div>
            <div>
              <p>Drivers</p>
              <a href="">Company Driver</a>
              <a href="">Owner Operator</a>
              <a href="">Lease Program</a>
            </div>
        </div>
        <div className='right'>
            <p>Copyright © 2024 Phoenix Cargo</p>
            <a href="">Site crafted by Robintek: Columbus Website Design</a>
        </div>
    </footer>
    </>
  )
}

export default Footer