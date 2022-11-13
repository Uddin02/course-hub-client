import React, { useEffect } from "react";
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import useTitle from "../../hooks/useTitle";

const Category = () => {
   
    const courses = useLoaderData();
    // console.log(courses);

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useTitle('Featured Courses')

    return (
        <div className="lg:flex justify-evenly mt-5 ml-2">
            <LeftSideNav/>
            <div>
                <h2 className='lg:text-3xl'>Featured Courses for you</h2>
                <h4 className='mb-4 mt-2'><small>Viewing {courses.length} courses</small></h4>
            {
               courses.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
           </div>
        </div>
    );
};

export default Category;