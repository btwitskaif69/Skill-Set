import React from "react";
import CourseBanner from "./CoursePage/CourseBanner";
import CourseSkills from "./CoursePage/CourseSkills";
import CompanyLogos from "./CoursePage/CompanyLogos";
import CourseDescription from "./CoursePage/CourseDescription";
import Accordian from "./CoursePage/Accordion";
import CourseBenefit from "./CoursePage/CourseBenefit";
import Footer from './Footer';
import Testimonial from "./Testimonial";

export default function CoursesPage() {
    

    

    return (
      <div>
        <CourseBanner/>
        <CourseSkills/>
        <CompanyLogos/>
        <CourseBenefit/>
        <CourseDescription/>
        <Accordian/>
        <Testimonial/>
        <Footer/>
      </div>
      
    );
}

