import React from 'react';
import Marquee from './Marquee';
import Carousel from './Carousel';
import Cards from './Cards';
import Footer from './Footer';

export default function Home() {

  return (
    <div>
      <Carousel/>
      <Marquee/>
      <Cards/>
      <Footer/>

    </div>
  );
}
