import React from "react";
import Trek from "../assets/About/Trekking.png";

const Trekking = () => {
  return (
    <>
    <div className="absolute w-[1440px] mx-auto  top-[550px] ">
      <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
        <div className="p-4">
        <div className="flex items-center">
  <div className="w-3.5 sm:w-7 h-0 sm:h-0 border border-[#C2292E] ml-1 "></div>
  <div className="text-[#C2292E] text-sm sm:text-base font-semibold font-[Be Vietnam Pro] leading-tight  ml-2">

    ABOUT HIMALAYAN FAIR REISEN
  </div>
</div>

       <div className="text-start">
       <h2 className=" font-semibold text-gray-800 mb-2 text-4xl left-0 w-[600px] tracking-wider mt-2">
            Best Trekking Partner For Your <br /> <span className="mr-[350px]">Holidays</span>
          </h2>
          <p className=" text-gray-600 text-sm w-[600px] tracking-[0.1em] mt-4 text-justify">
            at himalayan fair reisen, safety is paramount. Our guides are
            trained in wilderness first aid and possess the expertise to
            navigate the rugged Himalayan terrain safely. Moreover, we
            prioritize responsible tourism. Whether you dream of standing atop
            the world's highest peaks, immersing yourself in the vibrant
            cultures of Himalayan villages, or simply escaping the hustle and
            bustle of daily life, Himalayan Fair Reisen is here to transform
            your dreams into reality. Join us on an unforgettable adventure and
            discover the enchanting beauty of the Himalayas with Himalayan Fair
            Reisen. With our dedicated team of experienced guides and a passion
            for exploration, we're committed to providing personalized and
            immersive adventures that cater to all levels of trekkers.
          </p>
       </div>
        </div>
        <div>
          <img
            src={Trek}
            alt="Mountain Trekking"
            className=" ml-10 md:w-[550px] md:h-[340px] object-cover mt-5"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Trekking;
