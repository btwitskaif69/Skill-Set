import React, { useRef} from "react";
import CourseBanner from "./CourseEnrollmentPage/CourseBanner";
import CourseSkills from "./CourseEnrollmentPage/CourseSkills";
import InstructorDetails from './CourseEnrollmentPage/InstructorDetails';
import CourseReviews from './CourseEnrollmentPage/CourseReviews';
import CompanyLogos from "./CourseEnrollmentPage/CompanyLogos";
import CourseDescription from "./CourseEnrollmentPage/CourseDescription";
import Accordian from "./CourseEnrollmentPage/Accordion";
import CourseBenefit from "./CourseEnrollmentPage/CourseBenefit";
import Footer from './Footer';
import Testimonial from "./Testimonial";
import ScrollSpy from "./CourseEnrollmentPage/ScrollSpy";
import CourseAbout from "./CourseEnrollmentPage/CourseAbout";
import Navbar from "./Navbar";

export default function CoursesPage() {
    // Define the refs using the useRef hook
    const courseDescriptionRef = useRef(null);
    const testimonialsRef = useRef(null);

    return (
      <div>
        <Navbar/>
        <CourseBanner/>
        <ScrollSpy courseDescriptionRef={courseDescriptionRef} testimonialsRef={testimonialsRef}/>
        <CourseAbout/>
        <InstructorDetails/> {/* New Component */}
        <CourseSkills/>
        
        <CourseReviews/>   {/* New Component */}
        <CompanyLogos/>
        <CourseBenefit/>
        <CourseDescription ref={courseDescriptionRef}/>
        <Accordian/>
        <Testimonial ref={testimonialsRef}/>
        <Footer/>
      </div>
    );
}
