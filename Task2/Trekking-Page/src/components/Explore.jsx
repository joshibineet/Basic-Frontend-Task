import React from "react";
import Gallery from "../assets/gallery.png";
import { BsClock } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { IoCloudOutline } from "react-icons/io5";
import { MdHiking } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import cook from "../assets/cooking-pot.png";
import moutain from "../assets/moutain.png";

const Explore = () => {
  return (
    <div className="px-6">
      <div className="absolute top-[530px] ml-24">
        <div className="flex items-center justify-start ml-1">
          <div className="border border-[#C22932] w-8"></div>
          <h2 className="text-sm text-[#C22932] mb-1 ml-2 font-medium">
            EXPLORE THE WORLD
          </h2>
        </div>

        <h3 className="text-3xl font-semibold mb-8">Langtang Valley Trek</h3>
      </div>
      <div className="absolute top-[620px] ml-24">
        <img src={Gallery} alt="Image" />
      </div>

      <div className="w-[1240px] h-[450px] absolute shadow-2xl border rounded-md top-[1150px] ml-24">
        <div>
          <p className="tracking-wider p-8 mt-5 text-justify g">
            <span className="text-[#655C5C] font-bold">
              The Langtang Valley Trek
            </span>
            <span className="font-work-sans text-base font-normal leading-7 text-justify text-gray-500">
              in Nepal offers adventurers a unique and captivating journey
              through some of the country's most breathtaking landscapes.
              Situated just north of Kathmandu, the Langtang region is renowned
              for its pristine alpine scenery, diverse flora and fauna, and
              vibrant local culture. The trek typically begins in the bustling
              town of Syabrubesi,
            </span>
          </p>

          <br />
          <p className="text-gray-500 font-work-sans text-base font-normal leading-7 text-justify tracking-wider p-8 bottom-32 absolute">
            {" "}
            where travelers set out on a picturesque trail that winds through
            lush forests, cascading waterfalls, and charming Tamang villages.
            Along the way, trekkers are treated to sweeping vistas of
            snow-capped peaks, including the towering Langtang Lirung, which
            dominates the skyline. One of the highlights of the Langtang Trek is
            the opportunity to visit the Langtang National Park, home to a
            variety of rare and endangered species, including the elusive red
            panda.
          </p>
        </div>
      </div>

      <div className="flex ">
        <div className="relative w-[140px] h-[36px] bg-[#235789] text-white py-2 px-4 rounded-bl-3xl rounded-tr-3xl shadow-lg top-[1125px] ml-[96px] ">
          <p className="absolute ml-3 bottom-2">Overview</p>
        </div>
        <div className="absolute w-[140px] h-[36px] bg-[#E8F6FB] text-black py-2 px-4 rounded-bl-3xl rounded-tr-3xl shadow-lg top-[1125px] ml-[260px] ">
          <p className="absolute ml-6 bottom-2">Itineary</p>
        </div>
        <div className="absolute w-[140px] h-[36px] bg-[#E8F6FB] text-black py-2 px-4 rounded-bl-3xl rounded-tr-3xl shadow-lg top-[1125px] ml-[420px] ">
          <p className="absolute ml-6 bottom-2">Trip Info</p>
        </div>
        <div className="absolute w-[140px] h-[36px] bg-[#E8F6FB] text-black py-2 px-4 rounded-bl-3xl rounded-tr-3xl shadow-lg top-[1125px] ml-[590px] ">
          <p className="absolute ml-5 bottom-2">Weather</p>
        </div>
        <div className="absolute w-[140px] h-[36px] bg-[#E8F6FB] text-black py-2 px-4 rounded-bl-3xl rounded-tr-3xl shadow-lg top-[1125px] ml-[765px] ">
          <p className="absolute ml-4 bottom-2">Equipments</p>
        </div>
        <div className="absolute w-[140px] h-[36px] bg-[#E8F6FB] text-black py-2 px-4 rounded-bl-3xl rounded-tr-3xl shadow-lg top-[1125px] ml-[935px] ">
          <p className="absolute ml-4 bottom-2">Useful Info</p>
        </div>
        <div className="absolute w-[140px] h-[36px] bg-[#E8F6FB] text-black py-2 px-4 rounded-bl-full rounded-tr-full shadow-lg top-[1125px] ml-[1100px] ">
          <p className="absolute ml-7 bottom-2">Others</p>
        </div>
      </div>

      <div className="w-[450px] h-[650px] absolute shadow-2xl border rounded-sm top-[1650px] ml-[108px]">
        <div className="bg-[#235789] h-10 w-60 text-white mt-8 text-lg font-semibold py-2 pl-4 pr-10 relative inline-flex items-center">
          At a Glance
          <div className="relative bg-transparent h-16 w-16">
            <div className="absolute  w-[38px] h-[50px] ml-[125px] mt-[3px] bg-white transform rotate-45"></div>
          </div>
        </div>
        <div className="ml-3">
          <div className="flex">
            <BsClock className="text-[#235789] text-3xl mt-5 ml-5" />
            <p className="text-gray-400 mt-3 ml-6 text-sm">Duration</p>
            <p className="mt-8 ml-[75px] absolute text-sm font-semibold text-[#60677F] ">
              4 Hours
            </p>
            <div className="absolute w-[385px] bg-gray-400 h-[1px] mt-[60px] ml-4"></div>
          </div>
          <div className="flex mt-6">
            <IoStatsChart className="text-[#235789] text-3xl mt-5 ml-5" />
            <p className="text-gray-400 mt-3 ml-6 text-sm">Trip Grade</p>
            <p className="mt-8 ml-[75px] absolute text-sm font-semibold text-[#60677F] ">
              Easy
            </p>
            <div className="absolute w-[385px] bg-gray-400 h-[1px] mt-16 ml-4"></div>
          </div>
          <div className="flex mt-6">
            <IoCloudOutline className="text-[#235789] text-4xl mt-5 ml-5" />
            <p className="text-gray-400 mt-3 ml-5 text-sm">Best Seasons</p>
            <p className="mt-8 ml-[76px] absolute text-sm font-semibold text-[#60677F] ">
              Mar-Jul, Sep-Dec
            </p>
            <div className="absolute w-[385px] bg-gray-400 h-[1px] mt-16 ml-4"></div>
          </div>
          <div className="flex mt-6">
            <img src={moutain} className="text-[#235789]  mt-2 ml-4" />
            <p className="text-gray-400 mt-3 ml-1 text-sm">Max Altitude</p>
            <p className="mt-8 ml-[75px] absolute text-sm font-semibold text-[#60677F] ">
              5460m Khyangjang valley
            </p>
            <div className="absolute w-[385px] bg-gray-400 h-[1px] mt-16 ml-4"></div>
          </div>
          <div className="flex mt-6">
            <img src={cook} className="text-[#235789] text-2xl mt-3 ml-5" />
            <p className="text-gray-400 mt-3 ml-4  text-sm">Meals</p>
            <p className="mt-8 ml-[75px] absolute text-sm font-semibold text-[#60677F] ">
              B, L, D during Trek
            </p>
            <div className="absolute w-[385px] bg-gray-400 h-[1px] mt-16 ml-4"></div>
          </div>
          <div className="flex mt-6">
            <MdHiking className="text-[#235789] text-4xl mt-5 ml-5" />
            <p className="text-gray-400 mt-3 ml-5 text-sm">Nature of Trip</p>
            <p className="mt-8 ml-[76px] absolute text-sm font-semibold text-[#60677F] ">
              Moutain Sking Tour
            </p>
            <div className="absolute w-[385px] bg-gray-400 h-[1px] mt-16 ml-4"></div>
          </div>
          <div className="flex mt-6">
            <FaBed className="text-[#235789] text-4xl mt-5 ml-6" />
            <p className="text-gray-400 mt-3 ml-4 text-sm">Accomodation</p>
            <p className="mt-8 ml-[76px] absolute text-sm font-semibold text-[#60677F] ">
              Hotel, Resort
            </p>
            <div className="absolute w-[385px] bg-gray-400 h-[1px] mt-16 ml-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
