const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
    logo: String,
    coursetitle: String,
    description: String,
    enrollmentCount: Number,
    coursesCount: Number, // Number of courses in the series
    difficulty: String, // Difficulty level
    duration: String, // Duration of the course
    hoursPerWeek: String, // Estimated hours per week
    about: String, // Course overview
    badges: [String], // Array of badges associated with the course
    objectives: [String], // Learning objectives
    skillsGained: [String], // Skills acquired from the course
    instructor: {
      name: String,
      image: String,
      experience: String,
      expertise: [String], // Array of instructor's areas of expertise
    },
    learningOutcomes: [String], // Expected outcomes from the course
    faqs: [
      {
        question: String,
        answer: String,
      },
    ],
    courseSeries: String, // Title of the course series
    courseDescription: String, // Description of the course series
    courseDetails: [String], // Detailed information about the course content
    summary: String, // Summary of the course
    practicalLearning: String, // Information about practical learning components
    learningExperience: [String], // Descriptions of learning experiences
    conclusion: String, // Final conclusion about the course
    courses: [
      {
        title: String, // Title of the individual course
        lessons: [String], // Array of lessons covered in the course
        knowledgeGained: [String], // Skills or knowledge gained from the course
      },
    ]
}, {
    collection: 'courses' // Use lowercase 'collection'
});

// Create the model
const Courses = mongoose.model('Courses', CoursesSchema); // Renamed model to CourseData

// Export the model
module.exports = Courses; // Updated export to match the model name
