import React, { useState } from "react";
import car_banner_image from "../assets/car_banner_image.png";
import AuthModal from "../pages/AuthModel";

const CarBanner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-5 pt-16 sm:pt-20 relative">
      <div className="max-w-7xl w-full mx-auto bg-blue-500 flex flex-col md:flex-row items-center justify-between py-10 px-5 sm:px-10 md:px-20 gap-10 md:gap-20 rounded-2xl">
        {/* TEXT SECTION */}
        <div className="flex flex-col gap-4 items-start md:text-left cursor-default">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Do You Own a Luxury Car?
          </h2>

          <p className="text-base sm:text-lg text-white max-w-md">
            Monetize your vehicle effortlessly by listing it on CarRental. We
            take care of insurance, driver verification, and secure payments —
            so you can earn passive income, stress-free.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-4 text-base sm:text-lg font-medium px-6 sm:px-8 py-2 rounded-lg bg-white text-blue-500 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
          >
            List your car
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={car_banner_image}
            alt="Luxury Car"
            loading="lazy"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>

      {/* AUTH MODAL (REUSED) */}
      <AuthModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onLogin={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default CarBanner;