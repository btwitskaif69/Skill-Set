const CourseData = require('../models/coursedata.model');
const mongoose = require('mongoose');

exports.createCourse = async (req, res, next) => {
  try {
    const courseData = await CourseData.create(req.body);
    res.status(201).json({ status: 'ok', data: courseData });
  } catch (err) {
    next(err);
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const courses = await CourseData.find();
    res.json({ status: 'ok', data: courses });
  } catch (err) {
    next(err);
  }
};

exports.getCourseById = async (req, res) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid course ID format'
      });
    }

    const course = await CourseData.findById(req.params.id)
      .select('-__v -createdAt -updatedAt')
      .lean();

    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found'
      });
    }

    res.status(200).json({
      success: true,
      data: course
    });

  } catch (error) {
    console.error('Database Error:', {
      error: error.message,
      courseId: req.params.id,
      timestamp: new Date().toISOString()
    });
    
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const updatedCourse = await CourseData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json({ status: 'ok', data: updatedCourse });
  } catch (err) {
    next(err);
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    const deletedCourse = await CourseData.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json({ status: 'ok', data: deletedCourse });
  } catch (err) {
    next(err);
  }
};