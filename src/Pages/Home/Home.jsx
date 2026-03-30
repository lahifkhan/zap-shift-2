import React from "react";
import Banner from "./Banner";
import HowItWork from "./HowItWork";
import OurService from "./OurService";
import Brand from "./Brand";
import Testimonial from "./Testimonial";
import Couverage from "./Couverage";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <OurService></OurService>
      <Brand></Brand>
      <Testimonial reviewPromise={reviewPromise}></Testimonial>
    </div>
  );
};

export default Home;
