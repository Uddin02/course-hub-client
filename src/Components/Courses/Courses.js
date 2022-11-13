import React from "react";
import useTitle from "../../hooks/useTitle";
import CourseCards from "../CourseCards/CourseCards";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

const Courses = () => {
  useTitle('Courses')
  return (
    <div>
      <div className="lg:m-8 m-2">
        <div className="lg:flex justify-evenly">
          <div>
            <LeftSideNav />
          </div>

          <div>
            <CourseCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
