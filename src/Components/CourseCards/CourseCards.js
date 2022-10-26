import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const CourseCards = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses)
    
    return (
        <div>
            <h4 className='mb-4'><small>Viewing {allCourses.length} courses</small></h4>
            {
                allCourses.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default CourseCards;