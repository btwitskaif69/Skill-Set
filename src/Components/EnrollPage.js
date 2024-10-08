import React, { useRef } from "react";
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
import { enroll } from '../Components/CourseEnrollmentPage/EnrollPageData'; // Correctly import 'enroll'

export default function EnrollPage() {
  const courseOutcomeRef = useRef(null);
  const courseDescriptionRef = useRef(null);
  const coursereviewsRef = useRef(null);

  const { id } = useParams(); // Get the course ID from the URL

  // Convert ID to a number for comparison
  const course = enroll.find(course => course.id === Number(id)); // Ensure the comparison is type-safe

  if (!course) {
    return <div>Course not found!</div>; // Handle case when course is not found
  }

  return (
    <div>
      {/* Pass the course logo, title, description, and enrollment count as props */}
      <CourseBanner 
        logo={course.logo} // Pass the logo here
        title={course.title} 
        description={course.description} 
        enrollmentCount={course.enrollmentCount} // Ensure this field exists in your enroll data
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
       objectives={course.objectives} // New prop for learning outcomes
       skillsGained={course.skillsGained} // New prop for skills gained
       />
      <InstructorDetails
      instructorname={course.instructorname}
      instructorimage={course.instructorimage}
      experience={course.experience}
      expertise={course.expertise}
      />
      <LearningOutcomes ref={courseOutcomeRef} 
      learningoutcomes={course.learningoutcomes}
      />
      <FAQ
      faqs={course.faqs} />
      <CompanyLogos />
      <CourseDescription ref={courseDescriptionRef} 
      courseseries={course.courseseries}
      coursedesc={course.coursedesc}
      coursedetails={course.coursedetails}
      Summary={course.Summary}
      practicallearning={course.practicallearning}
      learningexperience={course.learningexperience}
      conclusion={course.conclusion}
      />

      <Accordion
      courses={course.courses}
      />
      <CourseReviews ref={coursereviewsRef} />
    </div>
  );
}