import React from 'react'

export default function CompanyLogos() {

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
    <div className=' container'>
        <section id="companies" className="my-4">
            <div className="p-4 border rounded-3 text-center bg-light">
              <h4>
                Find out how experts at major firms are acquiring sought-after
                skills
              </h4>
              <div className="d-flex justify-content-center flex-wrap mt-3">
                {/* Add company logos here */}
                <img src={Educator.Aws} style={{ height: "30px" }} alt="Company 1" className="m-2  mx-3"/>
                <img src={Educator.Duke_University} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.Google} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.IBM} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.Meta} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.Stanford_University} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.University_of_Cambridge} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.University_of_Michigan} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.University_of_Oxford} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
                <img src={Educator.University_of_Pennsylvania} style={{ height: "30px" }} alt="Company 1" className="m-2   mx-3"/>
              </div>
            </div>
          </section>
    </div>
  )
}
