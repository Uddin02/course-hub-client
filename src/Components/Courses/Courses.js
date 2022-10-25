import React from 'react';
import CourseCards from '../CourseCards/CourseCards';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div>
            <div className='lg:m-8 m-2'>
                <div className='grid lg:grid-rows-1'>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <div className='grid lg:grid-cols-3'>
                            <LeftSideNav/>
                        </div>

                        <div className='grid lg:grid-cols-9'>
                            <CourseCards/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;