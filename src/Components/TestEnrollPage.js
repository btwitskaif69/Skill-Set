import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TestEnrollPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const result = await response.json();
        if (result.status === "ok") {
          setCourse(result.data);
        } else {
          throw new Error(result.error || "Error fetching course details");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <div>Loading course details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div style={{ padding: "16px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Instructor:</strong> {course.instructorname}
      </p>
    </div>
  );
}
