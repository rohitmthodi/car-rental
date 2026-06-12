import React from "react";
import { IoClose } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const AuthModal = ({ open, onClose, onLogin }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 cursor-default">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-lg border border-gray-100">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition"
        >
          <IoClose size={20} />
        </button>

        {/* TITLE */}
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FaLock className="text-gray-600" />
          Oops, login required
        </h2>

        {/* MESSAGE */}
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          You need to be logged in to continue this action.
        </p>

        {/* ACTION */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer font-medium"
          >
            Cancel
          </button>

          <button
            onClick={onLogin}
            className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition cursor-pointer font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;