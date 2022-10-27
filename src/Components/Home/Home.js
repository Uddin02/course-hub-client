import React from "react";
import student1 from "../../assets/student/student-1.png";
import student2 from "../../assets/student/student-2.png";
import student3 from "../../assets/student/student-3.png";
import Image from "../../assets/Team goals-rafiki.png";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="m-4">
      <div className="lg:flex flex-row-reverse justify-center items-center">
        <img className="lg:w-4/12" src={Image} alt="" />
        <div className="lg:w-6/12">
          <p className="font-bold md:text-2xl lg:text-6xl">
            Learn without limits
          </p>
          <p className="mt-4 lg:w-9/12 lg:text-2xl text-justify">
            Start, switch, or advance your career with more than 5,200 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
        </div>
      </div>
      <div className="my-3">
        <p className="lg:text-5xl mb-14 text-center">
          <span className="border-b-4 border-sky-500">Explore</span> our Courses
        </p>
        <Carousel />
      </div>
      <div className="mb-8">
        <p className="lg:text-5xl mt-8 mb-5 text-center">
          Stories from our alumni network
        </p>
        <div className="m-10 grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded shadow-lg">
            <img
              className="object-contain w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src={student1}
              alt=""
            />
            <div>
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Jorge
              </p>
              <p className="text-slate-500">
                <small>
                  “Even more important than knowledge is confidence, which I
                  have gained through my learning journey. No matter what you
                  are looking to learn, or gain confidence in, Coursera has
                  something for you.”
                </small>
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded shadow-lg">
            <img
              className="object-contain w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src={student2}
              alt=""
            />
            <div>
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Chitranshee A.
              </p>
              <p className="text-slate-500">
                <small>
                  “I went from having no computer skills to being able to apply
                  for a software engineering job at a serious company and pass
                  their interviews, which were really rigorous. I have this
                  career in front of me now that wasn’t even in sight before,
                  and it’s what I want to be doing. That’s really powerful.”
                </small>
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded shadow-lg">
            <img
              className="object-contain w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src={student3}
              alt=""
            />
            <div>
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Carlos C.
              </p>
              <p className="text-slate-500">
                <small>
                  “I was able to prove to potential employers that I have a
                  solid understanding of computers and hardware—and started to
                  receive real, viable job offers.”
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
