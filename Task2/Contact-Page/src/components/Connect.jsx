import React from "react";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";

const Connect = () => {
  return (
    <div className="px-16">
      <div className="absolute top-[530px] ml-24">
        <div className="flex items-center justify-start ml-1">
          <div className="border border-[#C22932] w-8"></div>
          <h2 className="text-sm text-[#C22932] mb-1 ml-2 font-medium">
            CONNECT WITH US
          </h2>
        </div>

        <h3 className="text-3xl font-semibold mb-8">
          Feel Free To Contact With Us
        </h3>
      </div>
      <div className="absolute top-[620px]  w-[760px] border rounded  ml-24 p-8 shadow-lg">
        <div>
          <form>
            <div className="flex mb-4">
              <div>
                <h2 className="pb-1">First Name</h2>
                <input
                  type="text"
                  placeholder=""
                  className=" h-11 w-[340px] border border-[#86888A] rounded pl-2 "
                  required
                />
              </div>
              <div className="ml-5">
                <h2 className="pb-1">Last Name</h2>
                <input
                  type="text"
                  placeholder=""
                  className="w-[340px] h-11 p-3 border border-[#86888A] rounded flex relative"
                  required
                />
              </div>
            </div>

            <div className="flex">
              <div>
                <h2 className="pb-1">Email</h2>
                <input
                  type="email"
                  placeholder=""
                  className="w-[340px] h-11 p-3 mb-4 md:mb-0 md:mr-4 border-[#86888A] border rounded"
                  required
                />
              </div>
              <div className="ml-1">
                <h2 className="pb-1">Phone number</h2>
                <input
                  type="tel"
                  placeholder=""
                  className="w-[340px] h-11 p-3 border  border-[#86888A] rounded "
                  required
                />
              </div>
            </div>
            <div>
              <h2 className="absolute mt-3">Message</h2>
              <textarea
                placeholder=""
                className="w-[700px] p-10 mb-4 border rounded mt-10"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-red-700 text-white font-semibold rounded hover:bg-gray-300 hover:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="w-96 px-4 absolute top-[615px] ml-[900px]">
        <h4 className="text-xl font-semibold mb-4">Have Any Questions?</h4>
        <p className="mb-8 text-justify ">
          Don't hesitate to contact us with any questions, concerns, or requests
          you may have. Our team is dedicated to providing exceptional service
          and support to ensure your experience with us is enjoyable.
        </p>
        <div className="space-y-4">
          <div className="flex items-center ">
            <h2 className="font-semibold absolute mb-8 ml-14">Call Us</h2>
            <div className="w-12 h-12 border-2 border-red-700 flex items-center justify-center mr-2 ">
              <span className="text-red-700 text-2xl">
                <IoCall />
              </span>
            </div>
            <span className="text-lg mt-6">+977 024032543</span>
          </div>
          <div className="flex items-center">
          <h2 className="font-semibold absolute mb-8 ml-14 mt-6">Visit Us</h2>
          <div className="w-12 h-12 border-2 border-red-700 flex items-center justify-center mr-2 mt-5 ">
              <span className="text-red-700 text-2xl">
                <IoLocationSharp />
              </span>
            </div>
            <span className="text-lg mt-10">Maitidevi, Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center">
          <h2 className="font-semibold absolute mb-8 ml-14 mt-6">Mail Us</h2>
          <div className="w-12 h-12 border-2 border-red-700 flex items-center justify-center mr-2 mt-6 ">
              <span className="text-red-700 text-2xl">
                <AiFillMail />
              </span>
            </div>
            <span className="text-lg mt-10">info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
