import React from 'react';
import SideBar from './SideBar';
import CoursesCards from './CoursesCards';

export default function MainLayout() {
    return (
        <div className="container my-5">
            <div className="row">
                {/* Sidebar on the left side */}
                <div className="col-lg-3 col-md-4">
                    <SideBar />
                </div>
                
                {/* CoursesCards on the right side */}
                <div className="col-lg-9 col-md-8">
                    <CoursesCards />
                </div>
            </div>
        </div>
    );
}
