import React from 'react';

export default function Filter({ onFilterChange, onClose }) {
  const skills = [
    "Data Analysis", "Google Analytics", "Data Visualization", "Python", "Machine Learning",
    "Cloud Computing", "AWS", "Architecture Design", "HTML", "CSS", "JavaScript", "React",
    "Artificial Intelligence", "R Programming", "Cybersecurity", "Ethical Hacking",
    "Network Security", "UX Design", "Prototyping", "User Research", "Docker", "Kubernetes",
    "Data Engineering", "Robotics", "Neural Networks", "Quantum Computing", "Business Analytics",
    "Excel", "TensorFlow", "Deep Learning", "Advanced Data Analysis", "Fintech", "Cryptocurrency",
    "Blockchain", "Android Development", "Kotlin", "Java", "Node.js", "DevOps", "CI/CD",
    "AI Ethics", "Policy", "Leadership", "Management", "Strategy", "Financial Analysis", "Data Mining"
  ];

  const subjects = [
    "Data Science", "Computer Science", "Cloud Computing", "Web Development", "Artificial Intelligence",
    "Machine Learning", "Data Engineering", "Quantum Computing", "Business Analytics", "Cybersecurity",
    "UX Design", "Blockchain", "AR/VR Development", "Financial Engineering", "Deep Learning",
    "Data Analysis", "Fintech", "Mobile Development", "DevOps", "AI Ethics", "Leadership", 
    "Cloud Solutions", "Information Technology", "Robotics", "Automation"
  ];

  const languages = [
    "English", "Hindi", "Spanish", "French", "German", "Chinese"
  ];

  const Educator = [
    "AWS", "Duke University", "Google", "Harvard University", "IBM", "Meta", "MIT", "Stanford University", "University of Cambridge", "University of Michigan", "University of Oxford", "University of Pennsylvania"
  ];

  const durations = [
    "1-3 months", "3-6 months", "6-12 months"
  ];

  const ratings = [
    "4.5", "4.6", "4.7", "4.8", "4.9", "5.0"
  ];

  const filteredSubjects = subjects.filter((subject) => subject.toLowerCase().includes(subjects.toLowerCase()));
  const filteredSkills = skills.filter((skill) => skill.toLowerCase().includes(skills.toLowerCase()));
  const filteredLanguages = languages.filter((language) => language.toLowerCase().includes(languages.toLowerCase()));
  const filteredEducator = Educator.filter((university) => university.toLowerCase().includes(Educator.toLowerCase()));
  const filteredDurations = durations.filter((duration) => duration.toLowerCase().includes(durations.toLowerCase()));
  const filteredRatings = ratings.filter((rating) => rating.toLowerCase().includes(ratings.toLowerCase()));

  return (
    <div className="modal-overlay d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="p-4 bg-light border rounded shadow-sm position-relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 mt-2 me-2"
                aria-label="Close"
                onClick={onClose}
              ></button>
              <h5 className="fs-5 fw-semibold mb-4">
                <i className="bi bi-funnel"></i>&nbsp;Filter by
              </h5>

              {/* Subject Filter */}
              <div className="mb-4">
                <h6 className="fs-5 fw-semibold mb-2">Subjects</h6>
                <select className="form-select" onChange={(e) => onFilterChange('subjects', e.target.value)}>
                  <option value="">Select Subject</option>
                  {filteredSubjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              {/* Skills Filter */}
              <div className="mb-4">
                <h6 className="fs-5 fw-semibold mb-2">Skills</h6>
                <select className="form-select" onChange={(e) => onFilterChange('skills', e.target.value)}>
                  <option value="">Select Skill</option>
                  {filteredSkills.map((skill, index) => (
                    <option key={index} value={skill}>{skill}</option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div className="mb-4">
                <h6 className="fs-5 fw-semibold mb-2">Languages</h6>
                <select className="form-select" onChange={(e) => onFilterChange('languages', e.target.value)}>
                  <option value="">Select Language</option>
                  {filteredLanguages.map((language, index) => (
                    <option key={index} value={language}>{language}</option>
                  ))}
                </select>
              </div>

              {/* Educator Filter */}
              <div className="mb-4">
                <h6 className="fs-5 fw-semibold mb-2">Educator</h6>
                <select className="form-select" onChange={(e) => onFilterChange('Educator', e.target.value)}>
                  <option value="">Select Educator</option>
                  {filteredEducator.map((university, index) => (
                    <option key={index} value={university}>{university}</option>
                  ))}
                </select>
              </div>

              {/* Durations Filter */}
              <div className="mb-4">
                <h6 className="fs-5 fw-semibold mb-2">Durations</h6>
                <select className="form-select" onChange={(e) => onFilterChange('durations', e.target.value)}>
                  <option value="">Select Duration</option>
                  {filteredDurations.map((duration, index) => (
                    <option key={index} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>

              {/* Ratings Filter */}
              <div className="mb-4">
                <h6 className="fs-5 fw-semibold mb-2">Ratings</h6>
                <select className="form-select" onChange={(e) => onFilterChange('ratings', e.target.value)}>
                  <option value="">Select Rating</option>
                  {filteredRatings.map((rating, index) => (
                    <option key={index} value={rating}>{rating}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
        .container {
          height: auto;
        }
      `}</style>
    </div>
  );
}
