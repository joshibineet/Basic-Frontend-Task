import React from "react";
import Img from "../assets/Oval.png";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Review = () => {
  return (
    <div>
      <div className="absolute top-[4180px] ml-[120px]">
        <div className="flex items-center justify-start ml-1">
          <div className="border border-[#C22932] w-8"></div>
          <h2 className="text-sm text-[#C22932] mb-1 ml-2 font-medium">
            TOURS REVIEWS
          </h2>
        </div>

        <h3 className="text-3xl font-semibold mb-8">
          What other Travellers has to <br /> says?
        </h3>
      </div>
      <div className="absolute top-[4280px] ml-[967px] ">
        <button className="border font-semibold border-[#235789] text-[#235789] w-[150px] mr-10 h-[43px] rounded-md hover:text-white hover:bg-[#235789]">
          Submit
        </button>
        <button className="w-[200px] font-semibold h-[43px] text-white bg-[#235789] rounded-md hover:bg-red-700">
          Write a Review
        </button>
      </div>
      <div className="absolute w-[1210px] h-[180px] top-[4360px] border border-[#E7E7E8] rounded-md ml-[145px]">
        <img src={Img} alt="" className="p-7" />
        
          <input
            placeholder="Write your valuable thought......."
            className=" w-[1010px] h-[85px] border rounded absolute bottom-[60px] ml-[170px]"
          />
        
        <div>
            <p className="absolute ml-[170px] bottom-[35px] text-gray-400">Cameron Williamson</p>
            <div className="flex text-red-700 absolute ml-[170px] bottom-4 text-lg">
            <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />

            </div>
            <p className="absolute text-gray-400 text-sm right-7 bottom-[35px]">16 Jan, 2024</p>

        </div>
      </div>

      <div className="absolute w-[1210px] h-[180px] top-[4570px] border border-[#E7E7E8] rounded-md ml-[145px]">
        <img src={Img} alt="" className="p-9" />
        <p className="absolute bottom-[90px] ml-[168px] text-xl tracking-wider">"OMG! I cannot believe that I have so much fun on my trip. It was super good and <br /> fantastic."</p>

        <div>
            <p className="absolute ml-[170px] bottom-[35px] text-gray-400">Isaac Olson</p>
            <div className="flex text-red-700 absolute ml-[170px] bottom-4 text-lg">
            <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarHalf /><MdOutlineStarOutline /><MdOutlineStarOutline />

            </div>
            <p className="absolute text-gray-400 text-sm right-7 bottom-[35px]">16 Jan, 2024</p>

        </div>
      </div>

      <div className="absolute w-[1210px] h-[180px] top-[4780px] border border-[#E7E7E8] rounded-md ml-[145px]">
        <img src={Img} alt="" className="p-9" />
        <p className="absolute bottom-[118px] ml-[165px] text-xl tracking-wider">"OMG! I cannot believe that I have so much fun on my trip. It was super good and fantastic."</p>
        <div>
            <p className="absolute ml-[170px] bottom-[35px] text-gray-400">Isaac Olson</p>
            <div className="flex text-red-700 absolute ml-[170px] bottom-4 text-lg">
            <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarHalf /><MdOutlineStarOutline /><MdOutlineStarOutline />

            </div>
            <p className="absolute text-gray-400 text-sm right-7 bottom-[35px]">16 Jan, 2024</p>
        </div>
      </div>
      <button className="absolute top-[4990px] right-32 underline text-[#235789]">Load More</button>
    </div>
  );
};

export default Review;
