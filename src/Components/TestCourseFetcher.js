import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TestCourseFetcher() {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null); // State to hold course data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage any errors

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:1337/api/courses/${id}`);
  
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }
  
        const data = await response.json();
  
        if (data.status === "ok") {
          setCourse(data.data);
        } else {
          throw new Error(data.error || "Course not found");
        }
  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchCourseData();
  }, [id]);
  

  // Loading, error, or course not found handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Enrollment Count: {course.enrollmentCount}</p>
      <p>Duration: {course.duration}</p>
      {/* Display other course details */}
    </div>
  );
}
