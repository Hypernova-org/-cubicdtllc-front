import React from 'react';
import '../home/style.css';
import Carousel from './carousel';
import Brands from './reklams';
import Trucks from './trucks';
import HomeAbout from './home_about';
import HomeGallery from './home_gallery';
import HomeContact from './home_contact';
import HomeContact2 from './home_contact2';
import NewUpdates from './new_updates';

const Home = () => {
  return (
    <>
    <Carousel/>
    <Brands/>
    <Trucks/>
    <HomeAbout/>
    <HomeGallery/>
    <HomeContact/>
    <HomeContact2/>
    <NewUpdates/>
    </>
  )
}

export default Home