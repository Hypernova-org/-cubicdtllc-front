import React from 'react';
import '../home_gallery/style.css';

const HomeGallery = () => {
  return (
    <>
    <main id='ourworkflow' className='home_gallery'>
        <div className="gallery_container">
          <div className='background'>
          <div>
            <h1>Truckload</h1>
            <p>Our truckload services are designed to help you manage costs, while effortlessly adapting to shipping demands and requirements. No matter the needs of your organization we will prioritize your needs to create a specialized truckload shipment plan.</p>
            
          </div>
          </div>
        </div>
        <div className="gallery_container">
          <div className='background'>
            <div>
              <h1>Drivers</h1>
              <p>We have a seamless recruiting and onboarding process that helps to put our drivers on the road quickly. Once onboarding and orientation is completed our dispatchers will have a load ready for our drivers, we personally welcome our drivers.</p>
              
            </div>
          </div>
        </div>
        <div className="gallery_container">
          <div className='background'>
            <div>
              <h1><span>Area</span> of Coverage</h1>
              <p>Midwest Northeast, Great Plains, Pacific Northwest, West Coast, South and Southeast</p>
              
            </div>
          </div>
        </div>
    </main>
    </>
  )
}

export default HomeGallery