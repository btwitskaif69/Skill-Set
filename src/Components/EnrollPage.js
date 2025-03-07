import React, { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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

export default function EnrollPage() {
  const courseOutcomeRef = useRef(null);
  const courseDescriptionRef = useRef(null);
  const coursereviewsRef = useRef(null);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
  
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/courses/${id}`);
        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        
        if (isMounted) {
          if (result.data) {
            setCourse(result.data);
          } else {
            throw new Error('Course data not found in response');
          }
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCourse();
    return () => { isMounted = false };
  }, [id]);

  const getEducatorLogo = (educator) => {
    const EducatorLogos = {
      aws: '/Assets/Educator/Aws.svg',
      google: '/Assets/Educator/Google.svg',
      ibm: '/Assets/Educator/IBM.svg',
      meta: '/Assets/Educator/Meta.svg',
      mit: '/Assets/Educator/Mit.svg',
      default: '/Assets/Educator/Default.svg'
    };
    return EducatorLogos[educator?.toLowerCase()] || EducatorLogos.default;
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-alert">Error: {error}</div>;
  if (!course) return <div className="not-found">Course not found!</div>;

  return (
    <div>
      <CourseBanner 
        logo={getEducatorLogo(course.educator)}
        title={course.title} 
        description={course.description} 
        enrollmentCount={course.enrollmentCount || 0}
        coursesCount={course.coursesCount || 0}
        difficulty={course.difficulty || 'Beginner'}
        duration={course.duration}
        hoursPerWeek={course.hoursPerWeek}
      />

      <ScrollSpy 
        courseDescriptionRef={courseDescriptionRef} 
        coursereviewsRef={coursereviewsRef} 
        courseOutcomeRef={courseOutcomeRef} 
      />

<CourseAbout
    badges={course?.badges || []}
    about={course?.about || course?.description || ""}
    objectives={course?.objectives || course?.learningObjectives || []}
    skillsGained={course?.skillsGained || []} // Changed from 'skills' to 'skillsGained'
/>

      <InstructorDetails
        instructorname={course.instructor?.name}
        instructorimage={course.instructor?.image}
        experience={course.instructor?.experience}
        expertise={course.instructor?.expertise || []}
      />

      <LearningOutcomes 
        ref={courseOutcomeRef} 
        learningoutcomes={course.learningOutcomes || []} 
      />

      <FAQ faqs={course.faqs || []} />
      <CompanyLogos logos={course.partnerLogos || []} />

      <CourseDescription 
        ref={courseDescriptionRef}
        courseseries={course.relatedCourses || []}
        coursedesc={course.fullDescription}
        coursedetails={course.courseDetails || {}}
        Summary={course.summary}
        practicallearning={course.handsOnProjects || []}
        learningexperience={course.experience}
        conclusion={course.conclusion}
      />

      <Accordion courses={course.curriculum || []} />
      <CourseReviews ref={coursereviewsRef} reviews={course.reviews || []} />
    </div>
  );
}