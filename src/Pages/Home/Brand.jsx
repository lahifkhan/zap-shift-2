import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// brands img
import brand1 from "../../assets/brands/amazon.png";
import brand2 from "../../assets/brands/amazon_vector.png";
import brand3 from "../../assets/brands/casio.png";
import brand4 from "../../assets/brands/moonstar.png";
import brand5 from "../../assets/brands/randstad.png";
import brand6 from "../../assets/brands/star.png";
import brand7 from "../../assets/brands/start_people.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const Brand = () => {
  return (
    <div>
      <h3 className="text-[28px] font-extrabold text-center text-[#03373D] mb-6">
        We've helped thousands of sales teams
      </h3>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false, // keeps running after user interaction
          pauseOnMouseEnter: false, // don't pause on hover
        }}
        freeMode={{
          enabled: true,
          momentum: false, // ← this is the main fix, stops the slowdown/speed-up effect
        }}
      >
        {brands.map((brd, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <img
              src={brd}
              alt="brand"
              style={{ height: "60px", width: "60" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
