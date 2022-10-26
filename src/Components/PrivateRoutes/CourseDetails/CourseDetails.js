import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, duration, details, thumbnails } = courseDetails;
  // console.log(courseDetails);
  return (
    <div className="lg:grid justify-center mb-10 mt-10">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-t-box" src={thumbnails} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-justify">{details}</p>
          <div className="card-actions justify-around">
            <p className="text-lg">Duration: {duration}</p>
            <button className="btn  btn-outline btn-info">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
