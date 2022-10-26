import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { useLoaderData } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories)

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <p className="mb-5 text-2xl text-sky-500">
        <span className="border-b-4 border-sky-500">Our</span> Course Categories{" "}
        {categories.length}
      </p>
      <div className="">
        {categories.map((category) => (
          <p className="pb-6" key={category.id}>
            <NavLink
            //   className="text-decoration-none text-sky-600 text-xl "
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                    isActive
                      ? "font-medium tracking-wide text-blue-400 border-b-2 text-xl border-sky-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      : "font-semibold tracking-wide text-gray-700  transition-colors duration-200 hover:text-deep-purple-accent-400"
                  }
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
