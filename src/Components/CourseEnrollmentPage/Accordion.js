import React from 'react'

export default function Accordion() {
  return (
        <div className=' container mb-5'>
            {/* Accordion Item #1 */}
            <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item border-bottom">
                <h2 className="accordion-header">
                  <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                    Introduction to Front-End Development
                    </button></h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="bi bi-check-lg mb-1">&nbsp;Distinguish between front-end, back-end, and full-stack developers.</li>
                      <li className="bi bi-check-lg mb-1">&nbsp;Create and style a webpage with HTML and CSS.</li>
                      <li className="bi bi-check-lg mb-1">&nbsp;The benefits of working with UI frameworks.</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                      <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>Version Control</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>GitHub</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Bash (Unix Shell)</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Web Development</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Linux</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item #2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                    Programming with JavaScript
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                >
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}
                  >
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Distinguish between front-end, back-end, andfull-stack developers.</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Create and style a webpage with HTML and CSS.</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;The benefits of working with UI frameworks.</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                      <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>Version Control</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>GitHub</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Bash (Unix Shell)</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Web Development</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Linux</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item #3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                  Version Control
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                >
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}
                  >
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Implement Version Control systems.</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Navigate and configure using the command line</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Use a GitHub repository. Create a GitHub repository</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Manage code revisions</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                    <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>React (Web Framework)</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Application Development</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Web Application</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Front-End Web Development</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Item #4 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour" style={{ backgroundColor: "transparent", boxShadow: "none",}}>
                  HTML and CSS in Depth
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                >
                  <div className="accordion-body" style={{ paddingLeft: "20px" }}
                  >
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                      <li className="mb-1"><i className="bi bi-check-circle-fill text-success"></i>
                        &nbsp;Create a simple form with a responsive layout using HTML5 and CSS.</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Create a responsive layout using CSS .</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;Create a UI using Bootstraps.</li>
                      <li className="bi bi-check-lg  mb-1">&nbsp;CImplement debugging tools.</li>
                    </ul>
                    <h6>Knowledge You'll Gain</h6>
                    <div className="skills-tags">
                      <span className="badge me-1" style={{ backgroundColor: "#210BE3" }}>Data Structure</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Computer Science</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Algorithms</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Communication</span>
                      <span className="badge mx-1" style={{ backgroundColor: "#210BE3" }}>Pseudocode</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
