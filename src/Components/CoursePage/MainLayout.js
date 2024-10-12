import React, { useState, useCallback } from 'react';
import SideBar from './SideBar';
import CoursesCards from './CoursesCards';

export default function MainLayout() {
    // State for selected filters
    const [selectedFilters, setSelectedFilters] = useState({
        subjects: [],
        languages: [],
        learningProducts: [],
        skills: [],
        logo: [],
        Educator: [],
        durations: [],
        ratings:[]

          // Use 'Educator' instead of 'imgSrc'
    });

    // Function to handle filter changes
    const handleFilterChange = useCallback((filterType, value) => {
        setSelectedFilters(prevFilters => {
            const updatedFilter = [...prevFilters[filterType]];
            
            if (updatedFilter.includes(value)) {
                return {
                    ...prevFilters,
                    [filterType]: updatedFilter.filter(item => item !== value)  // Remove filter
                };
            } else {
                return {
                    ...prevFilters,
                    [filterType]: [...updatedFilter, value]  // Add filter
                };
            }
        });
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                {/* Sidebar on the left side */}
                <div className="col-lg-3 col-md-4">
                    <SideBar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
                </div>

                {/* CoursesCards on the right side */}
                <div className="col-lg-9 col-md-8">
                    <CoursesCards selectedFilters={selectedFilters} />
                </div>
            </div>
        </div>
    );
}
