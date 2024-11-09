import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/courses');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setCourses(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false); // Hide loading once fetched
      }
    };
    fetchCourses();
  }, []);
  
  return (
    <div className="container my-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {courses.map((course) => (
            <div className="col-md-4 mb-4" key={course.id}>
              <div className="card h-100">
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <a href={`/enroll/${course.id}`} className="btn btn-primary">Enroll Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default Courses;
