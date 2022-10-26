import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {

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
        <SwiperSlide>
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-outline btn-info">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://picsum.photos/700/600"
            alt="slider1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://picsum.photos/700/600"
            alt="slider1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://picsum.photos/700/600"
            alt="slider1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://picsum.photos/700/600"
            alt="slider1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg"
            src="https://picsum.photos/700/600"
            alt="slider1"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
