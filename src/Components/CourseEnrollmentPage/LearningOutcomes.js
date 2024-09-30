import React, { forwardRef } from 'react';

const LearningOutcomes = forwardRef((props, ref) => {
    const outcomes = [
        "Master advanced JavaScript concepts and ES6+ features",
        "Build complex, scalable applications with React and state management tools",
        "Develop robust backend systems using Node.js and Express",
        "Implement authentication, database integration, and RESTful APIs",
        "Understand and apply modern architectural patterns like Microservices and Serverless",
        "Gain hands-on experience with real-world projects and industry best practices"
    ];

    return (
        <div ref={ref} className="container">
            {/* Title */}
            <h3 className="display-6 fw-medium">Learning Outcomes</h3>
            
            {/* Outcome List */}
            <ul className="list-unstyled mt-3">
                {outcomes.map((outcome, index) => (
                    <li key={index} className="d-flex align-items-start mb-2 fs-6">
                        <span className="me-2 fs-6">•</span>
                        <span>{outcome}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default LearningOutcomes;
