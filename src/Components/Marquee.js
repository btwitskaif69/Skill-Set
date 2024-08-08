import React from 'react';

export default function Marquee() {
    const logos = {
        Aws: '/Assets/Logos/Aws.svg',
        Duke_University: '/Assets/Logos/Duke_University.svg',
        Google: '/Assets/Logos/Google.svg',
        IBM: '/Assets/Logos/IBM.svg',
        Meta: '/Assets/Logos/Meta.svg',
        Stanford_University: '/Assets/Logos/Stanford_University.svg',
        University_of_Cambridge: '/Assets/Logos/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/Logos/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/Logos/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/Logos/University_of_Pennsylvania.svg',
    };
    
    return (
        <div>
            {/* Marquee */}
            <div className="marquee-container" style={{ overflow: 'hidden', position: 'relative', backgroundColor: '#f8f9fa', padding: '30px 0', width: '100%', height: '250px' }}>
                <h2 className="marquee-heading mb-5" style={{ textAlign: 'center', fontSize: '2.5rem', color: 'blue', fontWeight: '600', textTransform: 'titlecase' }}>
                    Partnering with 10+ Top Universities and Companies
                </h2>
                <div className="marquee-content">
                    <div className="marquee-inner">
                        {Object.values(logos).slice(0, 10).map((logo, index) => (
                            <img key={index} src={logo} alt={`Logo ${index}`} className="marquee-logo" />
                        ))}
                    </div>
                    <div className="marquee-inner">
                        {Object.values(logos).slice(0, 10).map((logo, index) => (
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
                        transform: translateX(-50%);
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
                    width: 50%;
                    justify-content: space-around; /* Evenly space logos */
                }
                .marquee-logo {
                    height: 40px;
                    margin: 0 15px; /* Adjusted margin for spacing */
                    flex-shrink: 0;
                }

                @media (max-width: 768px) {
                    .marquee-logo {
                        height: 35px;
                        margin: 0 10px; /* Reduce spacing for small screens */
                    }
                }
                @media (max-width: 480px) {
                    .marquee-logo {
                        height: 25px;
                        margin: 0 5px; /* Further reduce spacing for very small screens */
                    }
                }
            `}</style>
        </div>
    );
}
