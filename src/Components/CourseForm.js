// CourseForm.js
import React, { useState } from 'react';

const CourseForm = () => {
    const [formData, setFormData] = useState({
        logo: '',
        coursetitle: '',
        description: '',
        enrollmentCount: 0,
        coursesCount: 0,
        difficulty: '',
        duration: '',
        hoursPerWeek: '',
        objectives: '',
        skillsGained: '',
        faqs: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Convert string inputs to arrays if needed, adding default empty arrays if undefined
        const objectivesArray = formData.objectives ? formData.objectives.split(',').map(obj => obj.trim()) : [];
        const skillsGainedArray = formData.skillsGained ? formData.skillsGained.split(',').map(skill => skill.trim()) : [];
        const faqsArray = formData.faqs ? formData.faqs.split('|').map(faq => {
            const [question, answer] = faq.split(':');
            return {
                question: question ? question.trim() : '',
                answer: answer ? answer.trim() : '',
            };
        }) : [];
    
        const dataToSend = {
            ...formData,
            objectives: objectivesArray,
            skillsGained: skillsGainedArray,
            faqs: faqsArray,
        };
    
        try {
            const response = await fetch('http://localhost:1337/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
    
            const result = await response.json();
    
            if (result.status === 'ok') {
                alert('Course added successfully!');
                // Optionally reset the form or handle success
                setFormData({
                    logo: '',
                    coursetitle: '',
                    description: '',
                    enrollmentCount: 0,
                    coursesCount: 0,
                    difficulty: '',
                    duration: '',
                    hoursPerWeek: '',
                    objectives: '',
                    skillsGained: '',
                    faqs: '',
                });
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form');
        }
    };

    return (
        <div className="container">
            <h1 className="mt-5">Add Course</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="formLogo" className="form-label">Logo URL</label>
                    <input type="text" className="form-control" id="formLogo" name="logo" value={formData.logo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formCourseTitle" className="form-label">Course Title</label>
                    <input type="text" className="form-control" id="formCourseTitle" name="coursetitle" value={formData.coursetitle} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="formDescription" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="formEnrollmentCount" className="form-label">Enrollment Count</label>
                    <input type="number" className="form-control" id="formEnrollmentCount" name="enrollmentCount" value={formData.enrollmentCount} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formCoursesCount" className="form-label">Courses Count</label>
                    <input type="number" className="form-control" id="formCoursesCount" name="coursesCount" value={formData.coursesCount} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formDifficulty" className="form-label">Difficulty</label>
                    <input type="text" className="form-control" id="formDifficulty" name="difficulty" value={formData.difficulty} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formDuration" className="form-label">Duration</label>
                    <input type="text" className="form-control" id="formDuration" name="duration" value={formData.duration} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formHoursPerWeek" className="form-label">Hours Per Week</label>
                    <input type="text" className="form-control" id="formHoursPerWeek" name="hoursPerWeek" value={formData.hoursPerWeek} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formObjectives" className="form-label">Objectives (comma separated)</label>
                    <input type="text" className="form-control" id="formObjectives" name="objectives" value={formData.objectives} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formSkillsGained" className="form-label">Skills Gained (comma separated)</label>
                    <input type="text" className="form-control" id="formSkillsGained" name="skillsGained" value={formData.skillsGained} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFaqs" className="form-label">FAQs (question:answer separated by |)</label>
                    <input type="text" className="form-control" id="formFaqs" name="faqs" value={formData.faqs} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CourseForm;
