import React, { useRef} from "react";
import CourseBanner from "./CoursePage/CourseBanner";
import CourseSkills from "./CoursePage/CourseSkills";
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
        <CourseSkills/>
        <CompanyLogos/>
        <CourseBenefit/>
        <CourseDescription ref={courseDescriptionRef}/>
        <Accordian/>
        <Testimonial ref={testimonialsRef}/>
        <Footer/>
      </div>
    );
}
