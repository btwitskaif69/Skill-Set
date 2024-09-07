import React from 'react';

export default function SideBar({ onFilterChange }) {
    return (
        <div className="sidebar-container mb-5 ms-n5" style={{
            scrollbarWidth: 'thin', /* For Firefox */
            scrollbarColor: '#888 #f1f1f1',
        }}>
            <h5 className="mb-4">Filter by</h5>

            {/* Subject Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Subject</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Data Science" id="subject1"
                        onChange={() => onFilterChange('subjects', 'Data Science')} />
                    <label className="form-check-label" htmlFor="subject1">
                        Data Science (895)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Computer Science" id="subject2"
                        onChange={() => onFilterChange('subjects', 'Computer Science')} />
                    <label className="form-check-label" htmlFor="subject2">
                        Computer Science (258)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Business" id="subject3"
                        onChange={() => onFilterChange('subjects', 'Business')} />
                    <label className="form-check-label" htmlFor="subject3">
                        Business (312)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Health" id="subject4"
                        onChange={() => onFilterChange('subjects', 'Health')} />
                    <label className="form-check-label" htmlFor="subject4">
                        Health (198)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Mathematics" id="subject5"
                        onChange={() => onFilterChange('subjects', 'Mathematics')} />
                    <label className="form-check-label" htmlFor="subject5">
                        Mathematics (145)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Arts" id="subject6"
                        onChange={() => onFilterChange('subjects', 'Arts')} />
                    <label className="form-check-label" htmlFor="subject6">
                        Arts (89)
                    </label>
                </div>
            </div>

            {/* Language Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Language</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="English" id="lang1"
                        onChange={() => onFilterChange('languages', 'English')} />
                    <label className="form-check-label" htmlFor="lang1">
                        English (1,584)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Spanish" id="lang2"
                        onChange={() => onFilterChange('languages', 'Spanish')} />
                    <label className="form-check-label" htmlFor="lang2">
                        Spanish (532)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="French" id="lang3"
                        onChange={() => onFilterChange('languages', 'French')} />
                    <label className="form-check-label" htmlFor="lang3">
                        French (276)
                    </label>
                </div>
            </div>

            {/* Skills Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Skills</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Data Analysis" id="skill1"
                        onChange={() => onFilterChange('skills', 'Data Analysis')} />
                    <label className="form-check-label" htmlFor="skill1">
                        Data Analysis (432)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Machine Learning" id="skill2"
                        onChange={() => onFilterChange('skills', 'Machine Learning')} />
                    <label className="form-check-label" htmlFor="skill2">
                        Machine Learning (299)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Cloud Computing" id="skill3"
                        onChange={() => onFilterChange('skills', 'Cloud Computing')} />
                    <label className="form-check-label" htmlFor="skill3">
                        Cloud Computing (198)
                    </label>
                </div>
            </div>

            {/* University Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">University</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Google" id="uni1"
                        onChange={() => onFilterChange('universities', 'Google')} />
                    <label className="form-check-label" htmlFor="uni1">
                        Google (580)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="IBM" id="uni2"
                        onChange={() => onFilterChange('universities', 'IBM')} />
                    <label className="form-check-label" htmlFor="uni2">
                        IBM (325)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Stanford University" id="uni3"
                        onChange={() => onFilterChange('universities', 'Stanford University')} />
                    <label className="form-check-label" htmlFor="uni3">
                        Stanford University (280)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Harvard University" id="uni4"
                        onChange={() => onFilterChange('universities', 'Harvard University')} />
                    <label className="form-check-label" htmlFor="uni4">
                        Harvard University (470)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="MIT" id="uni5"
                        onChange={() => onFilterChange('universities', 'MIT')} />
                    <label className="form-check-label" htmlFor="uni5">
                        MIT (310)
                    </label>
                </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Duration</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Less than 3 months" id="duration1"
                        onChange={() => onFilterChange('duration', 'Less than 3 months')} />
                    <label className="form-check-label" htmlFor="duration1">
                        Less than 3 months (423)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="3-6 months" id="duration2"
                        onChange={() => onFilterChange('duration', '3-6 months')} />
                    <label className="form-check-label" htmlFor="duration2">
                        3-6 months (312)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="6+ months" id="duration3"
                        onChange={() => onFilterChange('duration', '6+ months')} />
                    <label className="form-check-label" htmlFor="duration3">
                        6+ months (112)
                    </label>
                </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Rating</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="4.5 & up" id="rating1"
                        onChange={() => onFilterChange('rating', '4.5 & up')} />
                    <label className="form-check-label" htmlFor="rating1">
                        4.5 & up (1,045)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="4.0 & up" id="rating2"
                        onChange={() => onFilterChange('rating', '4.0 & up')} />
                    <label className="form-check-label" htmlFor="rating2">
                        4.0 & up (872)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="3.5 & up" id="rating3"
                        onChange={() => onFilterChange('rating', '3.5 & up')} />
                    <label className="form-check-label" htmlFor="rating3">
                        3.5 & up (692)
                    </label>
                </div>
            </div>
        </div>
    );
}

<style>{`
.sidebar-container {
    height: 400px; /* Set a fixed height for the sidebar */
    overflow-y: auto; /* Enable vertical scrolling */
}

/* Customize the scrollbar for Webkit browsers (Chrome, Safari) */
.sidebar-container::-webkit-scrollbar {
    width: 10px;
}

.sidebar-container::-webkit-scrollbar-track {
    background: #f1f1f1; 
}

.sidebar-container::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 10px;
    border: 2px solid #f1f1f1;
}

.sidebar-container::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* For Firefox */
.sidebar-container {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
}
`}</style>
