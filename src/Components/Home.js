import React from 'react';
import Carousel from './Home/Carousel';
import Cards from './Home/Cards';
import NewCards from './Home/NewCards';
import Disclaimer from './Home/Disclaimer';
import Testimonial from './Testimonial';
import PartnerLogos from './Home/PartnerLogos';




export default function Home() {

  return (
    <div>
      <Carousel/>
      <PartnerLogos/>
      <Cards/>
      <NewCards/>
      <Disclaimer/>
      <Testimonial/>
    </div>
  );
}
