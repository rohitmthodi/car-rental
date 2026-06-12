import React, { useState } from "react";
import { cityList } from "../constants";
import hero from "../assets/hero_image.webp";
import { motion } from "framer-motion";
import AuthModal from "../pages/AuthModel";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="px-5 bg-[#ebf0f3] min-h-screen">
      <div className="pt-20 md:pt-30 max-w-7xl w-full mx-auto flex flex-col items-center">
        <p className="font-bungee text-4xl md:text-5xl text-gray-700 animate-pulse cursor-default">
          Luxury cars on Rent
        </p>

        {/* SEARCH AVAILABILITY */}
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white px-5 md:px-20 py-5 rounded-xl w-full max-w-5xl mx-auto shadow-2xl mt-10"
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Pick-up Location</label>

            <div className="relative w-full">
              <select
                required
                defaultValue=""
                className="w-full px-4 py-2 pr-10 border rounded-lg bg-white text-gray-700 outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Choose Location
                </option>
                {cityList.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <div className="absolute inset-y-0 right-3 pointer-events-none flex items-center text-gray-500">
                ▼
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Pick-up Date</label>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 outline-none cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">Return Date</label>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 outline-none cursor-pointer"
            />
          </div>

          <div className="flex items-end w-full">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white transition duration-200 rounded-lg"
            >
              Search
            </button>
          </div>
        </form>

        <motion.img
          src={hero}
          alt="Hero Image"
          className="mt-10 md:mt-25"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </div>

      {/* AUTH MODAL */}
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

export default Header;