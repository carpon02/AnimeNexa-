import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import Title from './Title';
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { assets } from '../assets/assets';
import { FaArrowRight } from "react-icons/fa6";

const LatestNfts = () => {
    const { nfts } = useContext(AppContext);
   
    const [latestNft, setLatestNft]=useState([])

    const navigate = useNavigate()


    useEffect(()=>{
        console.log("NFTs data:", nfts);
        setLatestNft(nfts.slice(0,5))
    },[nfts])

  return (
    <div className="flex flex-col items-center  mt-10 text-gray-900  md:mx-10">
      <Title text1="Latest " text2="NFTs" />
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        Simply browse through our extensive list of quality and authentic
        artworks
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {latestNft.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 relative"
          >
            <img className="bg-green-50" src={item.image} alt="" />
            <div className="flex gap-2 absolute top-4 text-black-800 right-3">
                <FaRegHeart className='text-xl cursor-pointer'/>
                <p className='font-bold'>{item.likes}</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center gap-5  ">
                <p className="text-gray-900 text-md font-bold">{item.title}</p>
                <p className="text-gray-900 text-2xl font-medium cursor-pointer hover:bg-gray-200 transition-all duration-300 rounded-full ">...</p>
              </div>
              <p className="text-gray-600 text-sm">{item.artistUsername}</p>

              <div className="flex gap-2 items-center text-gray-500 my-2">
                <img src={assets.solana} alt="" className='w-6' />
                <p className='text-sm'>{item.valueInSOL} <span>SOL</span></p>
              </div>
              <div className="primary-btn rounded-xl text-center mt-5">Buy Now</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/explore");
          scrollTo(0, 0);
        }}
        className="primary-btn flex gap-5 items-center justify-center duration-500 text-white px-16 py-3 rounded-xl mt-10"
      >
        View All NFTs <span><FaArrowRight/></span>
      </button>
    </div>
  )
}

export default LatestNfts
