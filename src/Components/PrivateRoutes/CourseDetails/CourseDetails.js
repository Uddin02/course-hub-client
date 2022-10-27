import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Pdf from "../Pdf";
// import image from "../../../assets/cover photo-2.png";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  // console.log(courseDetails);
  const { title, duration, details, thumbnails, course_fee } = courseDetails;

  const handleCheckOut = () =>{
    toast.success('Thanks for purachsing this course')
  }
  return (
    <div className="grid justify-center items-center lg:mt-10 lg:mb-10">
      {/* <img className="h-6/12 w-full" src={image} alt="" /> */}
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mb-6">
        <figure>
          <img className="w-80" src={thumbnails} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center mb-5">
            <h2 className="card-title text-2xl">{title}</h2>
            <Pdf />
          </div>
          <p className="text-justify">{details}</p>

          <div className="card-actions justify-between">
            <span>
              <p>Duration: {duration}</p>
              <p>Course Fee: {course_fee}</p>
            </span>
            <button onClick={handleCheckOut} className="btn  btn-outline btn-info">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
