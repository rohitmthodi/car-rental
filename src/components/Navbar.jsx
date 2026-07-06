import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { menuLinks } from "../constants";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import AuthModal from "../pages/AuthModel";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/cars?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setOpenMenu(false);
    }
  };

  return (
    <div className="md:px-5 fixed md:top-0.5 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto bg-white/20 backdrop-blur-md py-3 md:py-5 px-5 md:rounded-2xl">
        
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="min-h-8" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-5 font-medium text-slate-600">
          {menuLinks.map((item, index) => (
            <Link key={index} to={item.path}>
              <p>{item.name}</p>
            </Link>
          ))}

          <div className="flex items-center bg-white border border-gray-300 rounded-full py-1">
            <IoSearchOutline className="ml-3 text-gray-500" />
            <input
              type="search"
              placeholder="Search Cars"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="ml-2 mr-3 outline-none bg-transparent"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="text-slate-700 hover:text-black transition"
            >
              List Cars
            </button>

            <Link
              to="/auth"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(true)}>
            <HiOutlineMenu size={25} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition ${
          openMenu ? "visible" : "invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          onClick={() => setOpenMenu(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            openMenu ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-5 transform transition-transform duration-300 ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <img src={logo} alt="logo" className="h-6" />
            <button onClick={() => setOpenMenu(false)}>
              <IoClose size={22} />
            </button>
          </div>

          {/* MENU LINKS */}
          <div className="flex flex-col gap-4 text-slate-700 font-medium">
            {menuLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* SEARCH */}
          <div className="mt-6 flex items-center border rounded-full py-2 px-3">
            <IoSearchOutline className="text-gray-500" />
            <input
              type="search"
              placeholder="Search Cars"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="ml-2 w-full outline-none bg-transparent"
            />
          </div>

          {/* ACTIONS */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setShowModal(true);
                setOpenMenu(false);
              }}
              className="text-left text-slate-700"
            >
              List Cars
            </button>

            <Link
              to="/auth"
              onClick={() => setOpenMenu(false)}
              className="bg-blue-600 text-white text-center py-2 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* AUTH MODAL */}
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

export default Navbar;