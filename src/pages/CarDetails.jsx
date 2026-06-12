import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyCarData } from "../constants";
import { IoCaretBackOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import AuthModal from "./AuthModel";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = dummyCarData.find((c) => String(c.id) === String(id));

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleBack = () => navigate(-1);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">Car not found</h2>
          <button
            onClick={handleBack}
            className="mt-5 flex items-center transition mb-5"
          >
            <IoCaretBackOutline className="text-xl" />
            Back
          </button>
        </div>
      </div>
    );
  }

  const specs = [
    {
      icon: "👤",
      label: car.seating_capacity
        ? `${car.seating_capacity} Seats`
        : "Seats not specified",
    },
    { icon: "⛽", label: car.fuel_type },
    { icon: "⚙️", label: car.transmission },
    { icon: "📍", label: car.location },
  ];

  const features = car.features || [
    "360 Camera",
    "GPS",
    "Rear View Mirror",
    "Bluetooth",
    "Heated Seats",
    "Sunroof",
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* BACK */}
        <button
          onClick={handleBack}
          className="mt-5 flex items-center transition mb-5"
        >
          <IoCaretBackOutline className="text-xl" />
          Back
        </button>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT */}
          <div className="flex-1 min-w-0">
            <div
              className="w-full rounded-2xl overflow-hidden bg-gray-100"
              style={{ height: "380px" }}
            >
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 cursor-default">
              <h1 className="text-3xl font-bold text-gray-900">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-400 mt-1 text-sm font-medium">
                {car.category} &bull; {car.year || "2021"}
              </p>
            </div>

            <hr className="my-5 border-gray-200" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 cursor-default">
              {specs.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 py-4 px-3 rounded-xl bg-white border border-gray-100 text-center
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.03] hover:shadow-md"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 cursor-default">
              <h2 className="text-base font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {car.description}
              </p>
            </div>

            <div className="mt-8 cursor-default">
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                Features
              </h2>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 font-medium">
                {features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-3 text-sm text-gray-600
                    p-2 rounded-lg transition-all duration-300 ease-out
                    hover:bg-gray-50 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <SiTicktick className="text-blue-500 text-sm shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0 cursor-default">
            <div
              className="bg-white rounded-2xl border border-gray-100 p-6 lg:sticky"
              style={{ top: "6rem" }}
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
                <span className="text-3xl font-bold text-gray-900">
                  ${car.price_per_day || 130}
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  per day
                </span>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Pickup Date
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none"
                />
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-sm"
              >
                Book Now
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                No credit card required to reserve
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="w-full mt-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium py-3 rounded-xl transition text-sm"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AuthModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onLogin={() => {
          setShowModal(false);
          navigate("/auth");
        }}
      />
    </div>
  );
};

export default CarDetails;