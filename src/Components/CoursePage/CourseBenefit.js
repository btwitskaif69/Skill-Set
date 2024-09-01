import React from 'react'

export default function CourseBenefit() {
  return (
    <div className=' container'>
        <div>
            <section id="career" className="my-4">
              <h4>Prepare for a career in Front-end Development</h4>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Receive professional-level training from Meta
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Demonstrate your proficiency in portfolio-ready projects
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Earn an employee-recognized certificate from Meta
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      Qualify for in-demand job titles
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <img src="/path/to/image.jpg" className="card-img-top" alt="Career"/>
                    <div className="card-body">
                    <p className="card-text">$130,000+ median U.S. salary for Front-end Development</p>
                    <p className="card-text">29,000+ U.S. job openings in Front-end Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    </div>
  )
}
