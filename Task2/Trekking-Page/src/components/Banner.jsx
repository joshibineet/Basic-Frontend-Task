import React from 'react';
import Top from "../assets/Top.png";

const Banner = () => {
  return (
    <div className="absolute bg-gradient-to-b from-teal-500 via-teal-500 to-teal-300 top-0 left-0 w-full  flex justify-center items-center">
      <img src={Top} className="w-[1500px]  opacity-70" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl font-bold ">Langtang valley treak</h1>
      </div>
      </div>
      
    </div>
  );
}

export default Banner;
