import React, { use } from "react";
import testimonImg from "../../assets/images/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "../../Components/Ui/ReviewCard";
const Testimonial = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  console.log(reviews);
  return (
    <div className="my-10 space-y-8">
      <div className=" flex flex-col items-center mt-24 space-y-11 ">
        <img src={testimonImg} alt="" className="w-[244px] h-auto" />
        <div className="space-y-3">
          <h4 className="sec-title text-center">
            What our customers are sayings
          </h4>
          <p className="text-des max-w-2xl text-center">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>

      <div>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide>
                <ReviewCard review={review}></ReviewCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
