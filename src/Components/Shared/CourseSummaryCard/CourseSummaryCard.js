import React from "react";
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ course }) => {
  const { _id, title, duration, details, thumbnails } = course;
//   console.log(course);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mb-6">
      <figure>
        <img className="w-72" src={thumbnails} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{details}</p>

        <div className="card-actions justify-around">
          <p>Duration: {duration}</p>
          <Link to={`/coursesDetails/${_id}`}><button className="btn  btn-outline btn-info">Register</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
