import React from 'react'

export default function CompanyLogos() {

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
    <div className=' container'>
        <section id="companies" className="my-4">
            <div className="p-4 border rounded-3 text-center bg-light">
              <h4>
                Find out how experts at major firms are acquiring sought-after
                skills
              </h4>
              <div className="d-flex justify-content-center flex-wrap mt-3">
                {/* Add company logos here */}
                <img src={University_Logos.Aws} style={{ height: "30px" }} alt="Company 1" className="m-2  mx-3"/>
                <img src={University_Logos.Duke_University} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.Google} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.IBM} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.Meta} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.Stanford_University} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.University_of_Cambridge} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.University_of_Michigan} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.University_of_Oxford} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={University_Logos.University_of_Pennsylvania} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
              </div>
            </div>
          </section>
    </div>
  )
}
