import React from 'react';
import Marquee from './Marquee';
import Carousel from './Carousel';
import Cards from './Cards';

export default function Home() {

  return (
    <div>
      <Carousel/>
      <Marquee/>
      <Cards/>

    </div>
  );
}
