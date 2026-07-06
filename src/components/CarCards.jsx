import React from "react";
import { LuUsers } from "react-icons/lu";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";

const CarCards = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-500 cursor-pointer">
      {/* TOP */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt="Car Image"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {car.isAvailable && (
          <span className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Available Now
          </span>
        )}

        <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-xs px-3 py-2 rounded-lg text-sm">
          <span className="font-semibold text-white">
            {currency}
            {car.pricePerDay}
          </span>
          <span className="text-sm text-white/80"> / Day</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="px-3 py-3 pb-5">
        <div className="">
          <p className="text-lg font-medium">
            {car.brand} {car.model}
          </p>
          <p className="text-sm">
            {car.category} ● {car.year}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-25 text-gray-600">
          <div className="flex items-center text-sm">
            <LuUsers className="mr-2" size={18} />
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className="flex items-center text-sm">
            <BsFuelPumpDiesel className="mr-2" size={18} />
            <span>{car.fuel_type}</span>
          </div>
          <div className="flex items-center text-sm">
            <IoCarSportOutline className="mr-2" size={18} />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center text-sm">
            <GoLocation className="mr-2" size={18} />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;