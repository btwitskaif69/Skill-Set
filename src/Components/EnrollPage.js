import React, { useRef, useState, useEffect } from "react";
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
  const courseOutcomeRef = useRef(null);
  const courseDescriptionRef = useRef(null);
  const coursereviewsRef = useRef(null);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/courses/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (!result.data) {
          throw new Error('Course data not found in response');
        }

        setCourse(result.data);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // Render loading/error states
  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-alert">Error: {error}</div>;
  if (!course) return <div className="not-found">Course not found!</div>;

  // Render course details...
  // Map API response structure to component props
  return (
    <div>
      <CourseBanner 
        logo={getEducatorLogo(course.educator)} // Use educator logo from CoursesCards
        title={course.title} 
        description={course.description} 
        enrollmentCount={course.enrolledStudents} // Adjust according to API field
        coursesCount={course.relatedCoursesCount}
        difficulty={course.difficulty}
        duration={course.duration}
        hoursPerWeek={course.weeklyCommitment}
      />
      <ScrollSpy 
        courseDescriptionRef={courseDescriptionRef} 
        coursereviewsRef={coursereviewsRef} 
        courseOutcomeRef={courseOutcomeRef} 
      />
<CourseAbout
  overview={course?.overview || ""}
  badges={course?.badges || []}
  about={course?.aboutCourse || ""}
  objectives={course?.learningObjectives || []} 
  skillsGained={course?.skills || []}
/>
      <InstructorDetails
        instructorname={course.instructorName}
        instructorimage={course.instructorImage}
        experience={course.instructorExperience}
        expertise={course.instructorExpertise}
      />
      <LearningOutcomes 
        ref={courseOutcomeRef} 
        learningoutcomes={course.learningOutcomes} 
      />
      <FAQ faqs={course.faqs || []} />
      <CompanyLogos logos={course.partnerLogos} />
      <CourseDescription 
        ref={courseDescriptionRef} 
        courseseries={course.relatedCourses}
        coursedesc={course.fullDescription}
        coursedetails={course.courseDetails}
        Summary={course.summary}
        practicallearning={course.handsOnProjects}
        learningexperience={course.experience}
        conclusion={course.conclusion}
      />
      <Accordion courses={course.curriculum} />
      <CourseReviews ref={coursereviewsRef} reviews={course.reviews} />
    </div>
  );
}

// Helper function to get educator logo (same as in CoursesCards)
const Educator = {
  Aws: '/Assets/Educator/Aws.svg',
  // ... other educator mappings
};

const getEducatorLogo = (educator) => {
  return Educator[educator] || '/Assets/Educator/Default.svg';
};