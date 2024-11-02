const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const CourseData = require('./models/coursedata.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config(); // Load environment variables from .env file

app.use(cors({
    origin: process.env.FRONTEND_URL, // Allow requests only from your frontend URL
    credentials: true // Allow cookies or authorization headers
}));

app.use(express.json());
mongoose.connect(process.env.MONGODB_URI) // Use the environment variable

// User registration endpoint
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        // Hash the password
        const newPassword = await bcrypt.hash(req.body.password, 10);
        
        // Create a new user with the hashed password
        await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: newPassword,  // Use the hashed password
            confirmpassword: newPassword, // Optional: You might want to handle this differently
        });

        res.json({ status: 'ok' });
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', error: 'Duplicate Email' });
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
    console.log(req.body); // Log the incoming data
    try {
        const courseData = await CourseData.create(req.body);
        res.json({ status: 'ok', data: courseData });
    } catch (err) {
        console.error(err);
        res.json({ status: 'error', error: 'Failed to create course data' });
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