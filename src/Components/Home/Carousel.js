import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories)
  

  useEffect(() => {
    fetch("https://course-hub-server-chi.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-10/12"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="ml-9 mb-6 card card-compact w-80 bg-base-100 shadow-xl">
              <figure>
                <img src={category.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.name}</h2>
                <p>
                  Click the button below to view the courses in this category.
                </p>{" "}
                <div className="card-actions justify-start">
                  <button className="text-sky-400"><Link to={`/category/${category.id}`}>Know more</Link></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
