import React from "react";

const Titles = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-start md:items-center">
      <h1 className="font-semibold text-3xl md:text-[40px] cursor-default">
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-160 md:text-center cursor-default">
        {subTitle}
      </p>
    </div>
  );
};

export default Titles;
