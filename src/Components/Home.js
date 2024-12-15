import React from 'react';
// import Carousel from './Home/Carousel';
import Cards from './Home/Cards';
import NewCards from './Home/NewCards';
import Disclaimer from './Home/Disclaimer';
import Testimonial from './Testimonial';
import PartnerLogos from './Home/PartnerLogos';
// import SmallScreenCarousel from './Home/SmallScreenCarousel';
import Header from './Home/Header';

export default function Home() {
    // State to track screen width
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // // Update screen width on resize
    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     };

    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <div>
            
            <Header/>
            {/* {screenWidth > 1024 ? (
                <Carousel />
            ) : (
                <SmallScreenCarousel />
            )} */}
            <PartnerLogos />
            <Cards />
            <NewCards />
            <Disclaimer />
            <Testimonial />
        </div>
    );
}
