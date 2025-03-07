const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
    title:  { type: String, required: true, unique: true },
    advancement: {
        type: String,
        default: "Advance in Your Degree Program"  // Default value
    },
    proCert: {
        type: String,
        default: "Professional Certificate"  // Default value
    },
    description: String,
    educator: String,
    rating: String,
    reviews: String,
    enrollmentCount: { type: Number, min: 0 }, // Only accepts numeric values
    coursesCount: { type: Number, min: 0 }, // Only accepts numeric values
    difficulty: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"], // Limited to specific difficulty levels
    },
    duration: {
        type: String,
        enum: ["1-3 months", "3-6 months", "6-12 months"], // Valid ranges for duration
    },
    hoursPerWeek: String, // Example: "4 hours/week"
    about: String,
    badges: [String], // Accepts multiple string values
    objectives: [String], // Accepts multiple string values
    skills: String,
    skillsGained: [String], // Accepts multiple string values
    instructorName: String,
    experience: String,
    expertise: [String], // Accepts multiple string values
    learningOutcomes: [String], // Accepts multiple string values
    faqs: [
        {
            question: String,
            answer: String,
        },
    ],
    courseSeries: String,
    courseDescription: String,
    courseDetails: String,
    summary: String,
    practicalLearning: String,
    learningExperience: [String], // Accepts multiple string values
    conclusion: String,
    courses: [
        {
            title: String,
            lessons: [String], // Array of lessons covered in the course
            knowledgeGained: [String], // Skills or knowledge gained from the course
        },
    ],
}, {
    collection: 'courses' // Use lowercase 'collection'
});

// Create the model
const CourseData = mongoose.model('CourseData', CoursesSchema);

// Export the model
module.exports = CourseData;