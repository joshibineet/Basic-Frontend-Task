import React from 'react'
import map from '../assets/map.png';;
import { IoLocationSharp } from "react-icons/io5";

const Map = () => {
  return (
    <>
      <div className='absolute top-[1180px] ml-40'>
        <h2 className=' font-semibold text-3xl font-merriweather leading-10'>Find Us On Google Map</h2>
      </div>
      <div className='absolute top-[1230px] '>
        <IoLocationSharp className='text-red-700 text-3xl absolute ml-[800px] top-[330px] w-14' />
        <div className='w-40 h-16 bg-red-700 absolute ml-[830px] top-[265px] rounded-r-2xl rounded-tl-3xl'>
         <p className='text-white p-2 ml-2'>we are here. <br />Himalaya fair Resin</p>
        </div>
        <img src={map} alt="" className='w-[1500px] '/>
      </div>
    </>
  )
};

export default Map;
