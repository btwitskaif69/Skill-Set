const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const CourseData = require('./models/coursedata.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config(); // Load environment variables from .env file

const allowedOrigin = 'http://localhost:3000';  // Corrected the URL


app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI) // Use the environment variable

// User registration endpoint
app.post('/api/register', async (req, res) => {
    console.log(req.body);

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email: req.body.email });
        
        if (existingUser) {
            return res.json({ status: 'error', error: 'Duplicate Email' });
        }

        // Hash the password
        const newPassword = await bcrypt.hash(req.body.password, 10);

        // Combine firstname and lastname into one field for 'name'
        const fullName = `${req.body.firstname.trim()} ${req.body.lastname.trim()}`.replace(/\s+/g, ' ');

        // Create a new user with the hashed password and combined name field
        await User.create({
            name: fullName,
            email: req.body.email,
            password: newPassword, // Store the hashed password
        });

        res.json({ status: 'ok' });
    } catch (err) {
        console.error(err);
        res.json({ status: 'error', error: 'An unexpected error occurred' });
    }
});


// User login endpoint
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

// Endpoint to create a new course data entry
app.post('/api/courses', async (req, res) => {
    try {
        const {
          title, description, enrollmentCount, coursesCount, difficulty, duration, hoursPerWeek, about, badges, objectives, skillsGained, instructorName, experience, expertise, learningOutcomes, faqs, courseSeries, courseDescription, courseDetails, summary, practicalLearning, learningExperience, conclusion, courses,
        } = req.body;

        // Validate required fields
        if (!title || !description || !difficulty || !duration) {
            return res.status(400).json({ status: 'error', error: 'Required fields are missing' });
        }

        // Validate title uniqueness
        const existingCourse = await CourseData.findOne({ title });
        if (existingCourse) {
            return res.status(400).json({ status: 'error', error: 'Course title must be unique' });
        }

        // Validate difficulty level
        const validDifficulties = ["Beginner", "Intermediate", "Advanced", "Expert"];
        if (!validDifficulties.includes(difficulty)) {
            return res.status(400).json({ status: 'error', error: 'Invalid difficulty level' });
        }

        // Validate duration
        const validDurations = ["1-3 months", "3-6 months", "6-12 months"];
        if (!validDurations.includes(duration)) {
            return res.status(400).json({ status: 'error', error: 'Invalid duration' });
        }

        // Validate enrollmentCount and coursesCount (must be numbers >= 0)
        if (enrollmentCount < 0 || coursesCount < 0) {
            return res.status(400).json({ status: 'error', error: 'Enrollment count and courses count must be non-negative' });
        }

        // Validate badges, objectives, skillsGained, expertise, learningOutcomes, learningExperience (arrays of strings)
        if (badges && !Array.isArray(badges)) {
            return res.status(400).json({ status: 'error', error: 'Badges must be an array of strings' });
        }
        if (objectives && !Array.isArray(objectives)) {
            return res.status(400).json({ status: 'error', error: 'Objectives must be an array of strings' });
        }
        if (skillsGained && !Array.isArray(skillsGained)) {
            return res.status(400).json({ status: 'error', error: 'SkillsGained must be an array of strings' });
        }
        if (expertise && !Array.isArray(expertise)) {
            return res.status(400).json({ status: 'error', error: 'Expertise must be an array of strings' });
        }
        if (learningOutcomes && !Array.isArray(learningOutcomes)) {
            return res.status(400).json({ status: 'error', error: 'LearningOutcomes must be an array of strings' });
        }
        if (learningExperience && !Array.isArray(learningExperience)) {
            return res.status(400).json({ status: 'error', error: 'LearningExperience must be an array of strings' });
        }
        if (faqs && !Array.isArray(faqs)) {
            return res.status(400).json({ status: 'error', error: 'FAQs must be an array' });
        } else {
            // Validate each FAQ if it's provided
            faqs && faqs.forEach(faq => {
                if (!faq.question || !faq.answer) {
                    return res.status(400).json({ status: 'error', error: 'Each FAQ must have both a question and an answer' });
                }
            });
        }

        // Validate fields for arrays and strings, if necessary
        if (courses && !Array.isArray(courses)) {
            return res.status(400).json({ status: 'error', error: 'Courses must be an array of objects' });
        } else {
            // Validate each course object
            courses && courses.forEach(course => {
                if (!course.title || !Array.isArray(course.lessons) || !Array.isArray(course.knowledgeGained)) {
                    return res.status(400).json({ status: 'error', error: 'Each course must have a title, lessons (array), and knowledge gained (array)' });
                }
            });
        }

        // Other fields validation (optional)
        if (hoursPerWeek && typeof hoursPerWeek !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Hours per week must be a string' });
        }
        if (instructorName && typeof instructorName !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Instructor name must be a string' });
        }
        if (experience && typeof experience !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Experience must be a string' });
        }
        if (courseSeries && typeof courseSeries !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Course series must be a string' });
        }
        if (courseDescription && typeof courseDescription !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Course description must be a string' });
        }
        if (courseDetails && typeof courseDetails !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Course details must be a string' });
        }
        if (summary && typeof summary !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Summary must be a string' });
        }
        if (practicalLearning && typeof practicalLearning !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Practical learning must be a string' });
        }
        if (conclusion && typeof conclusion !== 'string') {
            return res.status(400).json({ status: 'error', error: 'Conclusion must be a string' });
        }

        // Mongoose will handle other schema validations
        const courseData = await CourseData.create(req.body);

        res.json({ status: 'ok', data: courseData });
    } catch (err) {
        console.error('Error details:', err);  // Log the full error for debugging
        res.status(500).json({ status: 'error', error: err.message || 'Failed to create course data' });  // Send specific error message
    }
});



// Endpoint to get all course data
app.get('/api/courses', async (req, res) => {
    try {
        const courses = await CourseData.find();
        res.json({ status: 'ok', data: courses });
    } catch (err) {
        console.error(err);
        res.json({ status: 'error', error: 'Failed to retrieve course data' });
    }
});

// Endpoint to get a specific course data entry by ID
app.get('/api/courses/:id', async (req, res) => {
    try {
        const course = await CourseData.findById(req.params.id);
        if (!course) {
            return res.json({ status: 'error', error: 'Course not found' });
        }
        res.json({ status: 'ok', data: course });
    } catch (err) {
        console.error(err);
        res.json({ status: 'error', error: 'Failed to retrieve course data' });
    }
});

// Endpoint to update course data by ID
app.put('/api/courses/:id', async (req, res) => {
    try {
        const updatedCourse = await CourseData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) {
            return res.json({ status: 'error', error: 'Course not found' });
        }
        res.json({ status: 'ok', data: updatedCourse });
    } catch (err) {
        console.error(err);
        res.json({ status: 'error', error: 'Failed to update course data' });
    }
});

// Endpoint to delete course data by ID
app.delete('/api/courses/:id', async (req, res) => {
    try {
        const deletedCourse = await CourseData.findByIdAndDelete(req.params.id);
        if (!deletedCourse) {
            return res.json({ status: 'error', error: 'Course not found' });
        }
        res.json({ status: 'ok', data: deletedCourse });
    } catch (err) {
        console.error(err);
        res.json({ status: 'error', error: 'Failed to delete course data' });
    }
});

// Start the server
app.listen(1337, () => {
    console.log('Server started on 1337');
});