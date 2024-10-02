import React, { forwardRef } from 'react';

const LearningOutcomes = forwardRef(({ learningoutcomes }, ref) => {
    return (
        <div ref={ref} className="container">
            {/* Title */}
            <h3 className="display-6 fw-medium">Learning Outcomes</h3>
            
            {/* Outcome List */}
            <ul className="list-unstyled mt-3">
                {Array.isArray(learningoutcomes) && learningoutcomes.length > 0 ? (
                    learningoutcomes.map((learningoutcomes, index) => (
                        <li key={index} className="d-flex align-items-start mb-2 fs-6">
                            <span className="me-2 fs-6">•</span>
                            <span>{learningoutcomes}</span>
                        </li>
                    ))
                ) : (
                    <li className="fs-6 text-muted">No learning outcomes available.</li>
                )}
            </ul>
        </div>
    );
});

export default LearningOutcomes;
