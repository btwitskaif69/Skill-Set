import React, { useRef } from "react";
import CourseBanner from "./CourseEnrollmentPage/CourseBanner";
import InstructorDetails from './CourseEnrollmentPage/InstructorDetails';
import CourseReviews from './CourseEnrollmentPage/CourseReviews';
import CompanyLogos from "./CourseEnrollmentPage/CompanyLogos";
import CourseDescription from "./CourseEnrollmentPage/CourseDescription";
import Accordian from "./CourseEnrollmentPage/Accordion";
import ScrollSpy from "./CourseEnrollmentPage/ScrollSpy";
import CourseAbout from "./CourseEnrollmentPage/CourseAbout";
import LearningOutcomes from "./CourseEnrollmentPage/LearningOutcomes";
import FAQ from "./CourseEnrollmentPage/FAQ";

export default function CoursePage() {
  const courseOutcomeRef = useRef(null);
  const courseDescriptionRef = useRef(null);
  const coursereviewsRef = useRef(null);

  return (
    <div>
      <CourseBanner />
      <ScrollSpy courseDescriptionRef={courseDescriptionRef} coursereviewsRef={coursereviewsRef} courseOutcomeRef={courseOutcomeRef} />
      <CourseAbout />
      <InstructorDetails />
      <LearningOutcomes ref={courseOutcomeRef} />
      <FAQ />
      <CompanyLogos />
      <CourseDescription ref={courseDescriptionRef} />
      <Accordian />
      <CourseReviews ref={coursereviewsRef} />
    </div>
  );
}
