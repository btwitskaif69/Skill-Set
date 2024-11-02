const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const CourseData = require('./models/coursedata.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL, // Allow requests only from your frontend URL
    credentials: true // Allow cookies or authorization headers
}));
app.use(express.json());

/** 
 * Connect to MongoDB
 * Cache the connection to avoid reconnecting in each function invocation.
 */
let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
};

/**
 * User registration endpoint
 */
app.post('/api/register', async (req, res) => {
    try {
        await connectDB();
        const { firstname, lastname, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        res.json({ status: 'ok', message: 'User registered successfully' });
    } catch (err) {
        console.error("Error in registration:", err);
        res.json({ status: 'error', error: 'Duplicate Email or other registration issue' });
    }
});

/**
 * User login endpoint
 */
app.post('/api/login', async (req, res) => {
    try {
        await connectDB();
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid login' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                },
                process.env.JWT_SECRET || 'defaultSecret123' // Use environment variable
            );

            return res.json({ status: 'ok', user: token });
        } else {
            return res.json({ status: 'error', user: false, message: 'Incorrect password' });
        }
    } catch (error) {
        console.error("Error in login:", error);
        res.json({ status: 'error', message: 'Login failed' });
    }
});

/**
 * Endpoint to create a new course data entry
 */
app.post('/api/courses', async (req, res) => {
    try {
        await connectDB();
        const courseData = await CourseData.create(req.body);
        res.json({ status: 'ok', data: courseData });
    } catch (err) {
        console.error("Error creating course data:", err);
        res.json({ status: 'error', error: 'Failed to create course data' });
    }
});

/**
 * Endpoint to get all course data
 */
app.get('/api/courses', async (req, res) => {
    try {
        await connectDB();
        const courses = await CourseData.find();
        res.json({ status: 'ok', data: courses });
    } catch (err) {
        console.error("Error retrieving courses:", err);
        res.json({ status: 'error', error: 'Failed to retrieve course data' });
    }
});

/**
 * Endpoint to get a specific course data entry by ID
 */
app.get('/api/courses/:id', async (req, res) => {
    try {
        await connectDB();
        const course = await CourseData.findById(req.params.id);
        if (!course) {
            return res.json({ status: 'error', error: 'Course not found' });
        }
        res.json({ status: 'ok', data: course });
    } catch (err) {
        console.error("Error retrieving course by ID:", err);
        res.json({ status: 'error', error: 'Failed to retrieve course data' });
    }
});

/**
 * Endpoint to update course data by ID
 */
app.put('/api/courses/:id', async (req, res) => {
    try {
        await connectDB();
        const updatedCourse = await CourseData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) {
            return res.json({ status: 'error', error: 'Course not found' });
        }
        res.json({ status: 'ok', data: updatedCourse });
    } catch (err) {
        console.error("Error updating course data:", err);
        res.json({ status: 'error', error: 'Failed to update course data' });
    }
});

/**
 * Endpoint to delete course data by ID
 */
app.delete('/api/courses/:id', async (req, res) => {
    try {
        await connectDB();
        const deletedCourse = await CourseData.findByIdAndDelete(req.params.id);
        if (!deletedCourse) {
            return res.json({ status: 'error', error: 'Course not found' });
        }
        res.json({ status: 'ok', data: deletedCourse });
    } catch (err) {
        console.error("Error deleting course data:", err);
        res.json({ status: 'error', error: 'Failed to delete course data' });
    }
});

// Start the server
app.listen(1337, () => {
    console.log('Server started on 1337');
});
