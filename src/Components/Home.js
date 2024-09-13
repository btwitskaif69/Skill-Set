import React from 'react';
import Marquee from './Home/PartnerLogos';
import Carousel from './Home/Carousel';
import Cards from './Home/Cards';
import NewCards from './Home/NewCards';
import Disclaimer from './Home/Disclaimer';
import Testimonial from './Testimonial';




export default function Home() {

  return (
    <div>
      <Carousel/>
      <Marquee/>
      <Cards/>
      <NewCards/>
      <Disclaimer/>
      <Testimonial/>
    </div>
  );
}
