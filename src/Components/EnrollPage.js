import React, { useState, useEffect } from 'react';

function EnrollPage({ match }) {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/courses/${match.params.id}`);

        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }

        const data = await response.json();
        setCourse(data); 
      } catch (error) {
        setError(`Failed to fetch course data: ${error.message}`); 
      }
    };

    fetchCourseData();
  }, [match.params.id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{course.attributes.title}</h2>
      <p>{course.attributes.description}</p>
      {/* Add more course details here */}
      <button>Enroll Now</button>
    </div>
  );
}

export default EnrollPage;