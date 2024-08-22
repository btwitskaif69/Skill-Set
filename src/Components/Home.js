import React from 'react';
import Marquee from './Marquee';
import Carousel from './Carousel';
import Cards from './Cards';
import NewCards from './NewCards';
import Testimonial from './Testimonial';
import Footer from './Footer';


export default function Home() {

  return (
    <div>
      <Carousel/>
      <Marquee/>
      <Cards/>
      <NewCards/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
