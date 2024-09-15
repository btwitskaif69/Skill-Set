import React, { useRef} from "react";
import CourseBanner from "./CourseEnrollmentPage/CourseBanner";
import CourseSkills from "./CourseEnrollmentPage/CourseSkills";
import InstructorDetails from './CourseEnrollmentPage/InstructorDetails';
import CourseReviews from './CourseEnrollmentPage/CourseReviews';
import CompanyLogos from "./CourseEnrollmentPage/CompanyLogos";
import CourseDescription from "./CourseEnrollmentPage/CourseDescription";
import Accordian from "./CourseEnrollmentPage/Accordion";
import CourseBenefit from "./CourseEnrollmentPage/CourseBenefit";
import ScrollSpy from "./CourseEnrollmentPage/ScrollSpy";
import CourseAbout from "./CourseEnrollmentPage/CourseAbout";
import LearningOutcomes from "./CourseEnrollmentPage/LearningOutcomes";
import FAQ from "./CourseEnrollmentPage/FAQ";
import MetaFrontEndDeveloper from "./CourseEnrollmentPage/MetaFrontEndDeveloper";

export default function CoursesPage() {
    // Define the refs using the useRef hook
    const courseDescriptionRef = useRef(null);
    const testimonialsRef = useRef(null);

    return (
      <div>
        <CourseBanner/>
        <MetaFrontEndDeveloper/>
        <ScrollSpy courseDescriptionRef={courseDescriptionRef} testimonialsRef={testimonialsRef}/>
        <CourseAbout/>
        <LearningOutcomes/>
        <InstructorDetails/> {/* New Component */}
        <FAQ/>
        <CourseSkills/>
        <CompanyLogos/>
        <CourseBenefit/>
        <CourseDescription ref={courseDescriptionRef}/>
        <Accordian/>
        <CourseReviews/>   {/* New Component */}
      </div>
    );
}
