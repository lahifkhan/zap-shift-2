import React from "react";
import serviceimg from "../../assets/images/service.png";
const OurService = () => {
  return (
    <div className="bg-[#03373D] rounded-4xl  py-[100px] px-5 md:px-[110px] space-y-8 my-25">
      <div>
        <h3 className="text-[40px] font-extrabold text-center text-white">
          Our Service
        </h3>
        <p className="text-center text-[#DADADA]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br />
          business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* card container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="card flex flex-col items-center bg-white hover:bg-primary p-8 rounded-3xl">
          <img className="w-22 h-22" src={serviceimg} alt="" />
          <div className="space-y-3">
            <h4 className="text-center text-2xl font-bold text-secondary ">
              Express & Standard Delivery
            </h4>
            <p className="text-des text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center bg-white hover:bg-primary p-8 rounded-3xl">
          <img className="w-22 h-22" src={serviceimg} alt="" />
          <div className="space-y-3">
            <h4 className="text-center text-2xl font-bold text-secondary ">
              Express & Standard Delivery
            </h4>
            <p className="text-des text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center bg-white hover:bg-primary p-8 rounded-3xl">
          <img className="w-22 h-22" src={serviceimg} alt="" />
          <div className="space-y-3">
            <h4 className="text-center text-2xl font-bold text-secondary ">
              Express & Standard Delivery
            </h4>
            <p className="text-des text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center bg-white hover:bg-primary p-8 rounded-3xl">
          <img className="w-22 h-22" src={serviceimg} alt="" />
          <div className="space-y-3">
            <h4 className="text-center text-2xl font-bold text-secondary ">
              Express & Standard Delivery
            </h4>
            <p className="text-des text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center bg-white hover:bg-primary p-8 rounded-3xl">
          <img className="w-22 h-22" src={serviceimg} alt="" />
          <div className="space-y-3">
            <h4 className="text-center text-2xl font-bold text-secondary ">
              Express & Standard Delivery
            </h4>
            <p className="text-des text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="card flex flex-col items-center bg-white hover:bg-primary p-8 rounded-3xl">
          <img className="w-22 h-22" src={serviceimg} alt="" />
          <div className="space-y-3">
            <h4 className="text-center text-2xl font-bold text-secondary ">
              Express & Standard Delivery
            </h4>
            <p className="text-des text-center">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
