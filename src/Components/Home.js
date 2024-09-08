import React from 'react';
import Navbar from './Navbar';
import Marquee from './Home/Marquee';
import Carousel from './Home/Carousel';
import Cards from './Home/Cards';
import Testimonial from './Testimonial';
import Footer from './Footer';
import NewCards from './Home/NewCards';


export default function Home() {

  return (
    <div>
      <Navbar />
      <Carousel/>
      <Marquee/>
      <Cards/>
      <NewCards/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
