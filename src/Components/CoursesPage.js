import React, { useRef} from "react";
import CourseBanner from "./CoursePage/CourseBanner";
import CourseSkills from "./CoursePage/CourseSkills";
import InstructorDetails from './CoursePage/InstructorDetails';
import CourseReviews from './CoursePage/CourseReviews';
import CompanyLogos from "./CoursePage/CompanyLogos";
import CourseDescription from "./CoursePage/CourseDescription";
import Accordian from "./CoursePage/Accordion";
import CourseBenefit from "./CoursePage/CourseBenefit";
import Footer from './Footer';
import Testimonial from "./Testimonial";
import ScrollSpy from "./CoursePage/ScrollSpy";
import CourseAbout from "./CoursePage/CourseAbout";

export default function CoursesPage() {
    // Define the refs using the useRef hook
    const courseDescriptionRef = useRef(null);
    const testimonialsRef = useRef(null);

    return (
      <div>
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
