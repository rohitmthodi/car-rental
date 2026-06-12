import React, { useState } from "react";
import { motion } from "framer-motion";
import { authTabs } from "../constants";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <motion.div
      className="min-h-screen bg-slate-100 flex items-center justify-center px-5"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        variants={cardVariants}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-slate-800 cursor-default">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mt-2 cursor-default">
          Login or create your account
        </p>

        {/* TABS */}
        <div className="flex bg-slate-100 rounded-xl p-1 mt-8">
          {authTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg font-medium transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white shadow text-blue-600"
                  : "text-slate-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FORMS */}
        {activeTab === "login" ? (
          <form className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-2 border-black/50 rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-black/50 rounded-xl px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition cursor-pointer"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-2 border-black/50 rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-2 border-black/50 rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border-2 border-black/50 rounded-xl px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition cursor-pointer"
            >
              Create Account
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Auth;