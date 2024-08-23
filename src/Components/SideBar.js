import React from 'react';

export default function SideBar() {
    return (
        <div className="mb-5 ms-n5"> {/* Increased negative margin with ms-n5 */}
            <h5 className="mb-4">Filter by</h5>
            
            {/* Subject Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Subject</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="subject1" />
                    <label className="form-check-label" htmlFor="subject1">
                        Data Science (895)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="subject2" />
                    <label className="form-check-label" htmlFor="subject2">
                        Computer Science (258)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="subject3" />
                    <label className="form-check-label" htmlFor="subject3">
                        Information Technology (247)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="subject4" />
                    <label className="form-check-label" htmlFor="subject4">
                        Business (206)
                    </label>
                </div>
                <p className="text-primary">Show 7 more</p>
            </div>

            {/* Language Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Language</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="lang1" />
                    <label className="form-check-label" htmlFor="lang1">
                        English (1,584)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="lang2" />
                    <label className="form-check-label" htmlFor="lang2">
                        Spanish (1,044)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="lang3" />
                    <label className="form-check-label" htmlFor="lang3">
                        French (1,003)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="lang4" />
                    <label className="form-check-label" htmlFor="lang4">
                        Portuguese (Brazil) (999)
                    </label>
                </div>
                <p className="text-primary">Show 20 more</p>
            </div>

            {/* Learning Product Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Learning Product</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="prod1" />
                    <label className="form-check-label" htmlFor="prod1">
                        Guided Projects (272)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="prod2" />
                    <label className="form-check-label" htmlFor="prod2">
                        Courses (1,219)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="prod3" />
                    <label className="form-check-label" htmlFor="prod3">
                        Projects (43)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="prod4" />
                    <label className="form-check-label" htmlFor="prod4">
                        Specializations (1,205)
                    </label>
                </div>
            </div>
        </div>
    );
}
