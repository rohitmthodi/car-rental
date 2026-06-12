import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { menuLinks } from "../constants";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import AuthModal from "../pages/AuthModel";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/cars?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <div className="md:px-5 fixed md:top-0.5 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto bg-white/20 backdrop-blur-md py-3 md:py-5 px-5 md:rounded-2xl">
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="logo" className="min-h-8" />
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-5 font-medium text-slate-600">
          {menuLinks.map((item, index) => (
            <Link key={index} to={item.path}>
              <p>{item.name}</p>
            </Link>
          ))}

          {/* SEARCH */}
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
            {/* LIST CARS */}
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

        {/* MOBILE */}
        <div className="md:hidden">
          <HiOutlineMenu size={25} />
        </div>
      </div>

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