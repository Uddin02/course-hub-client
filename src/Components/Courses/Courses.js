import React from 'react';
import CourseCards from '../CourseCards/CourseCards';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div>
            <div className='lg:m-8 m-2'>
                <div className=''>
                    <div className='flex justify-evenly'>
                        <div className=''>
                            <LeftSideNav/>
                        </div>

                        <div className=''>
                            <CourseCards/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;