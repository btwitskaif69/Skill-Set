import React from 'react';
import Navbar from './Navbar';
import Marquee from './Home/PartnerLogos';
import Carousel from './Home/Carousel';
import Cards from './Home/Cards';
import NewCards from './Home/NewCards';
import Disclaimer from './Home/Disclaimer';
import Testimonial from './Testimonial';
import Footer from './Footer';




export default function Home() {

  return (
    <div>
      <Navbar />
      <Carousel/>
      <Marquee/>
      <Cards/>
      <NewCards/>
      <Disclaimer/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
