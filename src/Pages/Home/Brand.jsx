import React from "react";
import * as Marquee from "react-fast-marquee";

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
      <h3 className="text-[28px] font-extrabold text-center text-[#03373D]">
        We've helped thousands of sales teams
      </h3>

      <Marquee.default>
        {brands.map((brd, index) => (
          <div key={index} className="mx-8">
            <img src={brd} alt="brand" />
          </div>
        ))}
      </Marquee.default>
    </div>
  );
};

export default Brand;
