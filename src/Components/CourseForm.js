import React, { useState } from 'react';

const CourseForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        enrollmentCount: 0,
        coursesCount: 0,
        difficulty: '',
        duration: '',
        hoursPerWeek: '',
        about: '',
        badges: '',
        objectives: '',
        skillsGained: '',
        instructorName: '',
        experience: '',
        expertise: '',
        learningOutcomes: '',
        faqs: '',
        courseSeries: '',
        courseDescription: '',
        courseDetails: '',
        summary: '',
        practicalLearning: '',
        learningExperience: '',
        conclusion: '',
        courses: '',
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

        const processArray = (str) => str.split(',').map(item => item.trim());
        const processFaqs = (str) => str.split('|').map(faq => {
            const [question, answer] = faq.split(':');
            return { question: question.trim(), answer: answer.trim() };
        });
        const processCourses = (str) => str.split('|').map(course => {
            const [title, lessons, knowledgeGained] = course.split(';');
            return {
                title: title.trim(),
                lessons: processArray(lessons),
                knowledgeGained: processArray(knowledgeGained),
            };
        });

        const dataToSend = {
            ...formData,
            badges: processArray(formData.badges),
            objectives: processArray(formData.objectives),
            skillsGained: processArray(formData.skillsGained),
            expertise: processArray(formData.expertise),
            learningOutcomes: processArray(formData.learningOutcomes),
            learningExperience: processArray(formData.learningExperience),
            faqs: processFaqs(formData.faqs),
            courses: processCourses(formData.courses),
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });
            const result = await response.json();
            alert(result.status === 'ok' ? 'Course added successfully!' : 'Error: ' + result.error);
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
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Enrollment Count</label>
                    <input type="number" className="form-control" name="enrollmentCount" value={formData.enrollmentCount} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Courses Count</label>
                    <input type="number" className="form-control" name="coursesCount" value={formData.coursesCount} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Difficulty</label>
                    <select className="form-control" name="difficulty" value={formData.difficulty} onChange={handleChange}>
                        <option value="">Select Difficulty</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Duration</label>
                    <select className="form-control" name="duration" value={formData.duration} onChange={handleChange}>
                        <option value="">Select Duration</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Hours per Week</label>
                    <input type="text" className="form-control" name="hoursPerWeek" value={formData.hoursPerWeek} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">about</label>
                    <input type="text" className="form-control" name="about" value={formData.about} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Badges (comma-separated)</label>
                    <input type="text" className="form-control" name="badges" value={formData.badges} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">instructorName</label>
                    <input type="text" className="form-control" name="instructorName" value={formData.instructorName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">experience</label>
                    <input type="text" className="form-control" name="experience" value={formData.experience} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">expertise</label>
                    <input type="text" className="form-control" name="expertise" value={formData.expertise} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">learningOutcomes</label>
                    <input type="text" className="form-control" name="learningOutcomes" value={formData.learningOutcomes} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">FAQs (question:answer separated by |)</label>
                    <input type="text" className="form-control" name="faqs" value={formData.faqs} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">courseSeries</label>
                    <input type="text" className="form-control" name="courseSeries" value={formData.courseSeries} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">courseDescription (comma-separated)</label>
                    <input type="text" className="form-control" name="courseDescription" value={formData.courseDescription} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">courseDetails</label>
                    <input type="text" className="form-control" name="courseDetails" value={formData.courseDetails} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">summary</label>
                    <input type="text" className="form-control" name="summary" value={formData.summary} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">practicalLearning</label>
                    <input type="text" className="form-control" name="practicalLearning" value={formData.practicalLearning} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">learningExperience</label>
                    <input type="text" className="form-control" name="learningExperience" value={formData.learningExperience} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">conclusion</label>
                    <input type="text" className="form-control" name="conclusion" value={formData.conclusion} onChange={handleChange} />
                </div>


                <div className="mb-3">
                    <label className="form-label">Courses (format: title;lessons;knowledgeGained separated by |)</label>
                    <input type="text" className="form-control" name="courses" value={formData.courses} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CourseForm;
