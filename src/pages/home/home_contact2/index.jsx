import React from 'react';
import '../home_contact2/style.css';

const HomeContact2 = () => {
  return (
    <>
    <section className='home_contact2'>
        <h1>Join our email list for our latest news & updates!</h1>
        <div className='call'>
            <div><input type="email" placeholder='Email Address'/></div>
            <button>Sign Up</button>
        </div>
    </section>
    </>
  )
}

export default HomeContact2;