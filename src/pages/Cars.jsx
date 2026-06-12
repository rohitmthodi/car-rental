import React, { useEffect, useState } from "react";
import Titles from "../titles/Titles";
import { dummyCarData } from "../constants";
import CarCards from "../components/CarCards";
import { FiSearch } from "react-icons/fi";
import { useSearchParams, Link } from "react-router-dom";

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (value) => {
    setSearchTerm(value);

    if (value) setSearchParams({ search: value });
    else setSearchParams({});
  };

  const filteredCars = dummyCarData.filter((car) =>
    `${car.brand} ${car.model} ${car.location} ${car.category} ${car.fuel_type} ${car.transmission}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="px-5 py-20 bg-slate-50 mt-10 mb-10">
      <div className="max-w-7xl mx-auto">
        <Titles
          title="Available Cars"
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />

        {/* SEARCH */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-xl">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search cars..."
              className="w-full pl-12 pr-4 py-3 border rounded-xl"
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredCars.map((car) => (
            <Link key={car.id} to={`/car-details/${car.id}`} className="block">
              <CarCards car={car} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;