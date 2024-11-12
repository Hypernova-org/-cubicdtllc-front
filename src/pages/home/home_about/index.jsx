import React from 'react';
import '../home_about/style.css';

const HomeAbout = () => {
  return (
    <>
    <main className='home_about'>
        <h1 className='h1'>What We Offer</h1>
        <div className='div'>
          <div>
            <h1>On-Time, Every Time</h1>
            <p>We know that time is money. Our efficient, dependable delivery solutions ensure your products arrive precisely when and where you need them. Whether it’s local or international, we maintain speed and reliability across every journey.</p>
          </div>
          <div>
            <h1>Visibility & Control</h1>
            <p>With real-time tracking, you’re always in the know. Our technology provides full visibility into your shipments, allowing you to monitor every movement and make adjustments on the fly. We’re here to put you in control of your logistics.</p>
          </div>
          <div>
            <h1>Customized to Fit Your Business</h1>
            <p>No two businesses are the same, and neither are their logistics needs. Our team collaborates with you to design solutions that fit your exact requirements—from specialized freight options to secure warehousing and optimized distribution routes.</p>
          </div>
          <div>
            <h1>Sustainable & Responsible</h1>
            <p>We care about the future. That’s why we’re committed to sustainable logistics practices that reduce environmental impact without compromising efficiency. Our fleet operates with fuel efficiency in mind, and we’re constantly exploring greener alternatives.</p>
          </div>
        </div>
    </main>
    </>
  )
}

export default HomeAbout