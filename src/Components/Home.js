import React from 'react';
import Marquee from './Marquee';
import Carousel from './Carousel';
import Cards from './Cards';
import Testimonial from './Testimonial';
import Footer from './Footer';
import NewCards from './NewCards';


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
