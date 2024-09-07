import React, { useState } from 'react';
import SideBar from './SideBar';
import CoursesCards from './CoursesCards';

export default function MainLayout() {
    const [selectedFilters, setSelectedFilters] = useState({
        subjects: [],
        languages: [],
        learningProducts: []
    });

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (newFilters[filterType].includes(value)) {
                newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
            } else {
                newFilters[filterType].push(value);
            }
            return newFilters;
        });
    };

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
