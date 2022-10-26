import React from "react";

const CourseSummaryCard = ({ course }) => {
  const { _id, title, duration, details, thumbnails } = course;
  console.log(course);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mb-6">
      <figure>
        <img className="w-72" src={thumbnails} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>

        <div className="card-actions justify-around">
          <p>Duration: {duration}</p>
          <button className="btn  btn-outline btn-info">Register</button>
        </div>
      </div>
    </div>
  );
};

export default CourseSummaryCard;
