import React from 'react';
import Marquee from './Marquee';
import Carousel from './Carousel';
import Cards from './Cards';
import Footer from './Footer';
import NewCards from './Newcards';

export default function Home() {

  return (
    <div>
      <Carousel/>
      <Marquee/>
      <Cards/>
      <NewCards/>
      <Footer/>

    </div>
  );
}
