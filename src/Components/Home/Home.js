import React from 'react';
import Navbar from '../Navbar';
import Marquee from './Marquee';
import Carousel from './Carousel';
import Cards from './Cards';
import Testimonial from '../Testimonial';
import Footer from '../Footer';
import NewCards from './NewCards';


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
