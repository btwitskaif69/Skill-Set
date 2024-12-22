import React, { useEffect, useState, useRef } from "react";
import CourseBanner from "./CourseEnrollmentPage/CourseBanner";
import InstructorDetails from './CourseEnrollmentPage/InstructorDetails';
import CourseReviews from './CourseEnrollmentPage/CourseReviews';
import CompanyLogos from "./CourseEnrollmentPage/CompanyLogos";
import CourseDescription from "./CourseEnrollmentPage/CourseDescription";
import Accordion from "./CourseEnrollmentPage/Accordion";
import ScrollSpy from "./CourseEnrollmentPage/ScrollSpy";
import CourseAbout from "./CourseEnrollmentPage/CourseAbout";
import LearningOutcomes from "./CourseEnrollmentPage/LearningOutcomes";
import FAQ from "./CourseEnrollmentPage/FAQ";
import { useParams } from 'react-router-dom';

export default function EnrollPage() {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const courseOutcomeRef = useRef(null);
  const courseDescriptionRef = useRef(null);
  const coursereviewsRef = useRef(null);

  const { id } = useParams(); // Get the course ID from the URL

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`);
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}: ${response.statusText}`);
        }
        const result = await response.json();
        if (result.status === "ok") {
          setCourse(result.data);
        } else {
          throw new Error(result.error || "Failed to fetch course data");
        }
      } catch (err) {
        setError(err.message); // Capture detailed error
      } finally {
        setLoading(false);
      }
    };    

    fetchCourse();
  }, [id]);

  if (loading) {
    return <div>Loading course data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Course not found!</div>;
  }
  console.log("Course ID:", id); // Debug the ID being passed
  

  return (
    <div>
      <CourseBanner
        logo={course.logo}
        title={course.title}
        description={course.description}
        enrollmentCount={course.enrollmentCount}
        coursesCount={course.coursesCount}
        difficulty={course.difficulty}
        duration={course.duration}
        hoursPerWeek={course.hoursPerWeek}
      />
      <ScrollSpy
        courseDescriptionRef={courseDescriptionRef}
        coursereviewsRef={coursereviewsRef}
        courseOutcomeRef={courseOutcomeRef}
      />
      <CourseAbout
        overview={course.overview}
        badges={course.badges}
        about={course.about}
        objectives={course.objectives}
        skillsGained={course.skillsGained}
      />
      <InstructorDetails
        instructorname={course.instructorname}
        instructorimage={course.instructorimage}
        experience={course.experience}
        expertise={course.expertise}
      />
      <LearningOutcomes
        ref={courseOutcomeRef}
        learningoutcomes={course.learningoutcomes}
      />
      <FAQ faqs={course.faqs} />
      <CompanyLogos />
      <CourseDescription
        ref={courseDescriptionRef}
        courseseries={course.courseseries}
        coursedesc={course.coursedesc}
        coursedetails={course.coursedetails}
        Summary={course.Summary}
        practicallearning={course.practicallearning}
        learningexperience={course.learningexperience}
        conclusion={course.conclusion}
      />
      <Accordion courses={course.courses} />
      <CourseReviews ref={coursereviewsRef} />
    </div>
  );
}
