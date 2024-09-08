import React, { useState } from 'react';

export default function SideBar({ onFilterChange }) {

    const skills = [
        "Data Analysis", "Google Analytics", "Data Visualization", "Python", "Machine Learning",
        "Cloud Computing", "AWS", "Architecture Design", "HTML", "CSS", "JavaScript", "React",
        "Artificial Intelligence", "R Programming", "Cybersecurity", "Ethical Hacking",
        "Network Security", "UX Design", "Prototyping", "User Research", "Docker", "Kubernetes",
        "Data Engineering", "Robotics", "Neural Networks", "Quantum Computing", "Business Analytics",
        "Excel", "TensorFlow", "Deep Learning", "Advanced Data Analysis", "Fintech", "Cryptocurrency",
        "Blockchain", "Android Development", "Kotlin", "Java", "Node.js", "DevOps", "CI/CD",
        "AI Ethics", "Policy", "Leadership", "Management", "Strategy",
    ];

    const subjects = [
        "Data Science", "Computer Science", "Cloud Computing", "Web Development", "Artificial Intelligence",
        "Machine Learning", "Data Engineering", "Quantum Computing", "Business Analytics", "Cybersecurity",
        "UX Design", "Blockchain", "AR/VR Development", "Financial Engineering", "Deep Learning",
        "Data Analysis", "Fintech", "Mobile Development", "DevOps", "AI Ethics", "Leadership", "Cloud Solutions"
    ];

    const [visibility, setVisibility] = useState({
        subjects: false,
        skills: false,
    });

    const visibleSubjects = visibility.subjects ? subjects : subjects.slice(0, 5);
    const visibleSkills = visibility.skills ? skills : skills.slice(0, 5);

    const handleToggle = (type) => {
        setVisibility(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    return (
        <div className="sidebar-container mb-5 ms-n5" style={{
            scrollbarWidth: 'thin', /* For Firefox */
            scrollbarColor: '#888 #f1f1f1',
        }}>
            <h5 className="mb-4">Filter by</h5>

            {/* Subject Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Subject</h6>
                {visibleSubjects.map((subject, index) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={subject}
                            id={`subject${index}`}
                            onChange={() => onFilterChange('subjects', subject)}
                        />
                        <label className="form-check-label" htmlFor={`subject${index}`}>
                            {subject} (0) {/* Replace (0) with the actual count if needed */}
                        </label>
                    </div>
                ))}
                <button
                    className="btn btn-link"
                    onClick={() => handleToggle('subjects')}
                >
                    {visibility.subjects ? 'Show Less' : 'Show More'}
                </button>
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
                {visibleSkills.map((skill, index) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={skill}
                            id={`skill${index}`}
                            onChange={() => onFilterChange('skills', skill)}
                        />
                        <label className="form-check-label" htmlFor={`skill${index}`}>
                            {skill} (0) {/* Replace (0) with the actual count if needed */}
                        </label>
                    </div>
                ))}
                <button
                    className="btn btn-link"
                    onClick={() => handleToggle('skills')}
                >
                    {visibility.skills ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* University Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">University</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Google" id="uni1"
                        onChange={() => onFilterChange('logo', 'Google')} />
                    <label className="form-check-label" htmlFor="uni1">
                        Google (580)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="IBM" id="uni2"
                        onChange={() => onFilterChange('logo', 'IBM')} />
                    <label className="form-check-label" htmlFor="uni2">
                        IBM (325)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Stanford University" id="uni3"
                        onChange={() => onFilterChange('logo', 'Stanford University')} />
                    <label className="form-check-label" htmlFor="uni3">
                        Stanford University (280)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Harvard University" id="uni4"
                        onChange={() => onFilterChange('logo', 'Harvard University')} />
                    <label className="form-check-label" htmlFor="uni4">
                        Harvard University (470)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="MIT" id="uni5"
                        onChange={() => onFilterChange('logo', 'MIT')} />
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
