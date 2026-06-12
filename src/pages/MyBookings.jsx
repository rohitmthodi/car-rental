import React from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md cursor-default">
        <div className="text-6xl mb-4">🚗</div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-gray-800">
          No Bookings Yet
        </h1>

        {/* SUBTITILE */}
        <p className="text-gray-500 mt-2 text-sm leading-relaxed font-medium">
          You haven’t booked any cars yet. Once you make a booking, it will
          appear here so you can track it easily.
        </p>

        {/* BUTTON */}
        <Link
          to="/cars"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Explore Cars
        </Link>
      </div>
    </div>
  );
};

export default MyBookings;