import React from "react";
import Header from "../components/Header";
import FeaturedCars from "../components/FeaturedCars";
import CarBanner from "../components/CarBanner";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedCars />
      <CarBanner />
      <Testimonials />
    </div>
  );
};

export default Home;
