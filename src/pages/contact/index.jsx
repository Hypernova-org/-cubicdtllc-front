import React from 'react';
import '../contact/style.css';

const Contact = () => {
  return (
    <>
    <main className='contact_container'>
      <div className='contact_inputs'>
        <div><input type="name" placeholder='Name'/></div>
        <div><input type="email" placeholder='Email'/></div>
      </div>
      <div className='contact_inputs'>
        <input type="number" placeholder='Phone'/>
      </div>
      <div className='contact_massage'>
        <textarea id="massage-bt" placeholder="Massage" rows="5" name="message"></textarea>
      </div>
      <div className='contact_inputs'>
        <input type="text" placeholder='Code'/>
      </div>
      <div className='contact_inputs'>
        <button>More</button>
      </div>
    </main>
    </>
  )
}

export default Contact