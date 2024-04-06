import React from "react";
import { IoIosArrowUp, IoIosDownload } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";

const Faq = () => {
  return (
    <div>
      <div className="w-[11000px]  absolute top-[5100px] ml-[120px]">
        <h2 className=" absolute ml-[600px] font-semibold text-2xl   ">
          FAQ's
        </h2>
        <div className="bg-white">
          <div className="border- mt-10">
            <div className="p-6 flex justify-between items-center">
              <p className="font-semibold text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus?
              </p>
              <IoIosArrowUp className="text-gray-400 absolute text-2xl ml-[1185px]" />
              <div className="w-[1210px] border bg-gray-400 absolute mt-16"></div>
            </div>
            <div className="p-2 ml-4 mt-2">
              <p className="text-gray-400 tracking-wide">
                Some dummy text.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo this is some <br/> dummy text.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                nec ullamcorper mattis, pulvinar dapibus leo this is some  <br />dummy
                text.Lorem Some dummy text.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar <br /> dapibus leo this is some dummy
                text.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar <br />dapibus leo
                this is some dummy text.Lorem
              </p>
            </div>
          </div>
          <div className="p-6 flex justify-between items-center">
              <p className="font-semibold text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus?
              </p>
              <IoIosArrowUp className="text-gray-400 absolute text-2xl ml-[1185px]" />
              <div className="w-[1210px] border bg-gray-400 absolute mt-16"></div>
            </div>
            <div className="p-6 flex justify-between items-center">
              <p className="font-semibold text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus?
              </p>
              <IoIosArrowDown className="text-gray-400 absolute text-2xl ml-[1185px]" />
              <div className="w-[1210px] border bg-gray-400 absolute mt-16"></div>
            </div>
            <div className="p-6 flex justify-between items-center">
              <p className="font-semibold text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus?
              </p>
              <IoIosArrowDown className="text-gray-400 absolute text-2xl ml-[1185px]" />
              <div className="w-[1210px] border bg-gray-400 absolute mt-16"></div>
            </div>
            <div className="p-6 flex justify-between items-center">
              <p className="font-semibold text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus?
              </p>
              <IoIosArrowDown className="text-gray-400 absolute text-2xl ml-[1185px]" />
              <div className="w-[1210px] border bg-gray-400 absolute mt-16"></div>
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center top-[5650px] w-12 h-12 rounded-full bg-red-700 relative ml-[1340px] cursor-pointer hover:bg-red-700">
      <ImWhatsapp className="text-white text-2xl" />
    </div>
    </div>
  );
};

export default Faq;
