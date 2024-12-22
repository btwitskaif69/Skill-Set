import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TestCourseCards() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const result = await response.json();
        if (result.status === "ok") {
          setCourses(result.data);
        } else {
          throw new Error(result.error || "Error fetching courses");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Show only the first 5 courses
  const limitedCourses = courses.slice(0, 5);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {limitedCourses.map((course) => (
        <div
          key={course._id}
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            width: "200px",
          }}
        >
          <h3>{course.title}</h3>
          <p>{course.description.slice(0, 50)}...</p>
          <Link to={`/enroll/${course._id}`} style={{ textDecoration: "none" }}>
            <button style={{ marginTop: "8px", padding: "8px 16px" }}>
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
