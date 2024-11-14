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
            <h1>85</h1>
          </div>
          <div>
            <p>Total Trucks</p>
            <h1>68</h1>
          </div>
          <div>
            <p>Total Trailers</p>
            <h1>81</h1>
          </div>
          <div>
            <p>Total Perfect Miles</p>
            <h1>11.248.695</h1>
          </div>
        </div>
    </section>
    </>
  )
}

export default HomeContact