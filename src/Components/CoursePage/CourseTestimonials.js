import React from 'react';

export default function CourseTestimonials() {
  return (
    <div>
      <section
        className="gradient-custom">
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <i className="fas fa-quote-left fa-3x text-white"></i>
              </div>

              <div className="card shadow-lg border-0">
                <div className="card-body px-4 py-5">
                  <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-dark"
                    data-mdb-ride="carousel"
                  >
                    <div
                      className="carousel-indicators mb-0"
                      style={{ borderRadius: '50%', width: '10px', height: '10px' }}
                    >
                      <button
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                      ></button>
                    </div>

                    <div className="carousel-inner pb-5">
                      {/* Review 1 */}
                      <div className="carousel-item active">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="Maria Smantha"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Maria Smantha - Web Developer</h4>
                                <p className="mb-0 pb-3">
                                  "This course transformed my career! The instructors provided hands-on guidance, and I
                                  felt supported every step of the way. Highly recommend for anyone serious about web
                                  development."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Review 2 */}
                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="Lisa Cudrow"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Lisa Cudrow - Graphic Designer</h4>
                                <p className="mb-0 pb-3">
                                  "The course gave me the confidence to take on bigger projects and explore new design
                                  techniques. The practical examples were amazing!"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Review 3 */}
                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="John Smith"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">John Smith - Marketing Specialist</h4>
                                <p className="mb-0 pb-3">
                                  "A must for anyone in digital marketing! I was able to implement strategies immediately
                                  and saw results within weeks. Totally worth it!"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Review 4 */}
                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="Sophia Lee"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Sophia Lee - UX/UI Designer</h4>
                                <p className="mb-0 pb-3">
                                  "The UX/UI modules were outstanding! I appreciated the attention to detail and how
                                  the instructors made even complex topics easy to understand."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Review 5 */}
                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                                  className=" shadow-1 mb-4 mb-lg-0"
                                  alt="Daniel Kim"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Daniel Kim - Full Stack Developer</h4>
                                <p className="mb-0 pb-3">
                                  "I finally got the comprehensive full-stack training I was looking for. The course
                                  curriculum was intense but worth every minute. I now feel confident to apply for senior
                                  roles."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 pt-2">
                <i className="fas fa-quote-right fa-3x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
