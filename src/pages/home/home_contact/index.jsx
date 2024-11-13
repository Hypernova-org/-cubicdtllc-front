import React from 'react';
import '../home_contact/style.css';

const HomeContact = () => {
  return (
    <>
    <section id='operation' className='home_contact'>
        <h1 className='home_contact_h1'><span>Operation</span> Numbers</h1>
        <div className='contact_number'>
          <div>
            <p>Total Drivers</p>
            <h1>586</h1>
          </div>
          <div>
            <p>Total Trucks</p>
            <h1>435</h1>
          </div>
          <div>
            <p>Total Trailers</p>
            <h1>1,210</h1>
          </div>
          <div>
            <p>Loads Delivered (2023)</p>
            <h1>76,908</h1>
          </div>
          <div>
            <p>Total Perfect Miles (2023)</p>
            <h1>62,384,610</h1>
          </div>
        </div>
    </section>
    </>
  )
}

export default HomeContact