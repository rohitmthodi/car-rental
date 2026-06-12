import React from "react";
import Titles from "../titles/Titles";
import { dummyCarData } from "../constants";
import CarCards from "./CarCards";
import { Link, useNavigate } from "react-router-dom";

const FeaturedCars = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center px-5 pt-20">
      <Titles
        title="Our Cars"
        subTitle="Explore our selection of premium vehicles available for your next adventure."
      />

      {/* CAR GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {dummyCarData.slice(0, 6).map((car) => (
          <Link key={car.id} to={`/car-details/${car.id}`} className="block">
            <CarCards car={car} />
          </Link>
        ))}
      </div>

      <button
        onClick={() => navigate("/cars")}
        className="flex items-center px-10 py-2 bg-white hover:bg-blue-700 text-black hover:text-white font-medium border hover:border-blue-700 transition duration-200 rounded-lg mt-10 cursor-pointer"
      >
        Explore All Cars
      </button>
    </div>
  );
};

export default FeaturedCars;