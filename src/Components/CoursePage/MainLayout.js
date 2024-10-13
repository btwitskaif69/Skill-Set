import React, { useState, useCallback, useEffect } from 'react';
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
        ratings: []
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

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                {/* Conditionally render the sidebar */}
                {screenWidth > 1024 ? (
                    <div className="col-lg-3 col-md-4">
                        <SideBar selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
                    </div>
                ) : null}

                {/* CoursesCards should take full width when screen width is <= 1023 */}
                <div className={screenWidth > 1024 ? "col-lg-9 col-md-8" : "col-12"}>
                    <CoursesCards selectedFilters={selectedFilters} />
                </div>
            </div>
        </div>
    );
}
