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

    const languages = [
        "English", "Spanish", "French", "German", "Chinese"
    ];

    const universities = [
        "Aws", "Duke University", "Google", "Harvard University", "IBM", "Meta", "MIT", "Stanford University", "University of Cambridge", "University of Michigan", "University of Oxford", "University of Pennsylvania"
    ];

    const durations = [
        "1-3 months", "3-6 months", "6-12 months"
    ];

    const ratings = [
        "4.5", "4.6", "4.7", "4.8", "4.9", "5.0"
    ];

    const [visibility, setVisibility] = useState({
        subjects: false,
        skills: false,
        languages: false,
        universities: false,
        durations: false,
        ratings: false,
    });

    const visibleSubjects = visibility.subjects ? subjects : subjects.slice(0, 5);
    const visibleSkills = visibility.skills ? skills : skills.slice(0, 5);
    const visibleLanguages = visibility.languages ? languages : languages.slice(0, 3);
    const visibleUniversities = visibility.universities ? universities : universities.slice(0, 5);
    const visibleDurations = visibility.durations ? durations : durations.slice(0, 2);
    const visibleRatings = visibility.ratings ? ratings : ratings.slice(0, 3);

    const handleToggle = (type) => {
        setVisibility(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    return (
        <div className="sidebar-container mb-5 ms-n5">
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
                            {subject} (0)
                        </label>
                    </div>
                ))}
                <button className="btn btn-link" onClick={() => handleToggle('subjects')}>
                    {visibility.subjects ? 'Show Less' : 'Show More'}
                </button>
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
                            {skill} ()
                        </label>
                    </div>
                ))}
                <button className="btn btn-link" onClick={() => handleToggle('skills')}>
                    {visibility.skills ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* Language Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Language</h6>
                {visibleLanguages.map((language, index) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={language}
                            id={`language${index}`}
                            onChange={() => onFilterChange('languages', language)}
                        />
                        <label className="form-check-label" htmlFor={`language${index}`}>
                            {language} (0)
                        </label>
                    </div>
                ))}
                <button className="btn btn-link" onClick={() => handleToggle('languages')}>
                    {visibility.languages ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* University Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">University</h6>
                {visibleUniversities.map((university, index) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={university}
                            id={`university${index}`}
                            onChange={() => onFilterChange('universities', university)}
                        />
                        <label className="form-check-label" htmlFor={`university${index}`}>
                            {university} ()
                        </label>
                    </div>
                ))}
                <button className="btn btn-link" onClick={() => handleToggle('universities')}>
                    {visibility.universities ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* Duration Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Duration</h6>
                {visibleDurations.map((duration, index) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={duration}
                            id={`duration${index}`}
                            onChange={() => onFilterChange('durations', duration)}
                        />
                        <label className="form-check-label" htmlFor={`duration${index}`}>
                            {duration} (0)
                        </label>
                    </div>
                ))}
                <button className="btn btn-link" onClick={() => handleToggle('durations')}>
                    {visibility.durations ? 'Show Less' : 'Show More'}
                </button>
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Rating</h6>
                {visibleRatings.map((rating, index) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={rating}
                            id={`rating${index}`}
                            onChange={() => onFilterChange('ratings', rating)}
                        />
                        <label className="form-check-label" htmlFor={`rating${index}`}>
                            {rating} (0)
                        </label>
                    </div>
                ))}
                <button className="btn btn-link" onClick={() => handleToggle('ratings')}>
                    {visibility.ratings ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </div>
    );
}


