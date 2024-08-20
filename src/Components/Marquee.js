import React from 'react';

export default function Marquee() {

    const University_Logos = {
        Aws: '/Assets/University_Logos/Aws.svg',
        Duke_University: '/Assets/University_Logos/Duke_University.svg',
        Google: '/Assets/University_Logos/Google.svg',
        IBM: '/Assets/University_Logos/IBM.svg',
        Meta: '/Assets/University_Logos/Meta.svg',
        Stanford_University: '/Assets/University_Logos/Stanford_University.svg',
        University_of_Cambridge: '/Assets/University_Logos/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/University_Logos/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/University_Logos/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/University_Logos/University_of_Pennsylvania.svg',
    };

    return (
        <div>
            {/* Marquee */}
            <div className="marquee-container" style={{ overflow: 'hidden', position: 'relative', backgroundColor: '#f8f9fa', padding: '30px 0', width: '100%', height: '250px' }}>
                <h3 className="marquee-heading mb-5 text-center fs-1 fw-semibold" style={{color: '#210BE3',}}>
                    Partnering with 10+ Top Universities and Companies
                </h3>
                <div className="marquee-content">
                    <div className="marquee-inner">
                        {Object.values(University_Logos).map((logo, index) => (
                            <img key={index} src={logo} alt={`Logo ${index}`} className="marquee-logo" />
                        ))}
                    </div>
                    <div className="marquee-inner">
                        {Object.values(University_Logos).map((logo, index) => (
                            <img key={index + 10} src={logo} alt={`Logo ${index}`} className="marquee-logo" />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .marquee-container {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                    height: 250px;
                }
                .marquee-content {
                    display: flex;
                    width: 200%;
                    animation: marquee 30s linear infinite;
                }
                .marquee-inner {
                    display: flex;
                    flex-shrink: 0;
                    width: 100%;
                    justify-content: space-around;
                }
                .marquee-logo {
                    height: 40px;
                    margin: 0 10px;
                    flex-shrink: 0;
                }

                @media (min-width: 1440px) {
                    .marquee-logo {
                        height: 50px;
                        margin: 0 15px;
                    }
                }
                @media (min-width: 1024px) and (max-width: 1439px) {
                    .marquee-logo {
                        height: 45px;
                        margin: 0 12px;
                    }
                }
                @media (max-width: 1024px) {
                    .marquee-logo {
                        height: 35px;
                        margin: 0 10px;
                    }
                }
                @media (max-width: 768px) {
                    .marquee-logo {
                        height: 30px;
                        margin: 0 8px;
                    }
                }
                @media (max-width: 480px) {
                    .marquee-logo {
                        height: 25px;
                        margin: 0 6px;
                    }
                    .marquee-heading {
                        font-size: 1.5rem;
                        margin-bottom: 10px;
                    }
                }
            `}</style>
        </div>
    );
}
