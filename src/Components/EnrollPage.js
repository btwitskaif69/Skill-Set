import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function EnrollPage() {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get the course ID from the URL

  useEffect(() => {
    let isMounted = true; // Prevent state updates on unmounted component
  
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`);
        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if (isMounted) {
          setCourse(result.data);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
  
    fetchCourse();
  
    return () => {
      isMounted = false; // Cleanup function to prevent async updates after unmount
    };
  }, [id]);
  

  if (loading) {
    return <div>Loading course data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div>
      {/* Display course title and description */}
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
