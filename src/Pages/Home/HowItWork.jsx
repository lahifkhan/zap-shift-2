import React from "react";
import deliveryCar from "../../assets/images/delivery-van.png";
const HowItWork = () => {
  return (
    <div className="my-25">
      <h1 className="text-3xl font-extrabold text-secondary">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 ">
        <div className="bg-white p-8  rounded-3xl space-y-8">
          <img src={deliveryCar} alt="" className="w-14 h-14" />
          <div className="space-y-3">
            <h4 className="card-title">Booking Pick & Drop</h4>
            <p className="text-des">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="bg-white p-8  rounded-3xl space-y-8">
          <img src={deliveryCar} alt="" className="w-14 h-14" />
          <div className="space-y-3">
            <h4 className="card-title">Booking Pick & Drop</h4>
            <p className="text-des">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="bg-white p-8  rounded-3xl space-y-8">
          <img src={deliveryCar} alt="" className="w-14 h-14" />
          <div className="space-y-3">
            <h4 className="card-title">Booking Pick & Drop</h4>
            <p className="text-des">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="bg-white p-8  rounded-3xl space-y-8">
          <img src={deliveryCar} alt="" className="w-14 h-14" />
          <div className="space-y-3">
            <h4 className="card-title">Booking Pick & Drop</h4>
            <p className="text-des">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
