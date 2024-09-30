import React from 'react';

export default function PartnerLogos() {
    const Educator = {
        Aws: '/Assets/Educator/Aws.svg',
        Duke_University: '/Assets/Educator/Duke_University.svg',
        Google: '/Assets/Educator/Google.svg',
        Harvard_University: '/Assets/Educator/Harvard_University.svg',
        IBM: '/Assets/Educator/IBM.svg',
        Meta: '/Assets/Educator/Meta.svg',
        MIT: '/Assets/Educator/Mit.svg',
        Stanford_University: '/Assets/Educator/Stanford_University.svg',
        University_of_Cambridge: '/Assets/Educator/University_of_Cambridge.svg',
        University_of_Michigan: '/Assets/Educator/University_of_Michigan.svg',
        University_of_Oxford: '/Assets/Educator/University_of_Oxford.svg',
        University_of_Pennsylvania: '/Assets/Educator/University_of_Pennsylvania.svg',
      };

    return (
        <div className='logos p-5' style={{ backgroundColor: '#f5f7fa', height: 'auto' }}>
            <div className='container'>
                <div className="text-center">
                    <h3 className="marquee-heading text-center fs-1 fw-semibold" style={{ color: '#210BE3' }}>
                        Partnering with 10+ Top Universities and Companies
                    </h3>
                    <div className="d-flex justify-content-center flex-wrap my-2">
                        {Object.values(Educator).map((logo, index) => (
                            <div key={index} className="p-2">
                                <img 
                                    src={logo} 
                                    alt={`Company ${index + 1}`} 
                                    className="img-fluid m-1 logo-size"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .logo-size {
                    height: 30px; /* Default logo size */
                }
            `}</style>
        </div>
    );
}
