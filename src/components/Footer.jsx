import React from 'react'
import { GiNigeria } from "react-icons/gi";
import { assets } from '../assets/assets';
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaDiscord, FaInstagram } from "react-icons/fa";


const Footer = () => {

    // const navigate = useNavigate()
  return (
    <div className="md:mx-10  ">
      <div className="flex flex-col items-center sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 my-10 mt-20 text-sm">
        {/* logo section */}
        <div className='flex flex-col justify-center'>
            <img src={assets.logo} alt="" className='w-52 cursor-pointer'/>
            <p className="w-full md:w-2/3 text-gray-600 leading-5">
                Where Anime meets Web3.
            </p>
        </div>

        {/* Quick Nav section */}
        <div>
          <p className="text-xl font-medium mb-5">Quick Nav</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className='py-1 hover:text-primary hover:font-bold'><a href="/" className='hover:text-primary hover:font-bold cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>Marketplace</a></li>
            <li className='py-1 hover:text-primary hover:font-bold '><a href="/">Drops</a></li>
            <li className='py-1 hover:text-primary hover:font-bold'><a href="/wallet">Wallet</a></li>
            <li className='py-1 hover:text-primary hover:font-bold'><a href="/*">About</a></li>
            
          </ul>
        </div>

        {/* Policies section */}
        <div>
          <p className="text-xl font-medium mb-5">Policies</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className='py-1 hover:text-primary hover:font-bold'><a href="/">Terms</a></li>
            <li className='py-1 hover:text-primary hover:font-bold'><a href="/">Privacy</a></li>
            <li className='py-1 hover:text-primary hover:font-bold'><a href="/">Support</a></li>
          </ul>
        </div>
        
        {/* Social Links section */}
        <div className='flex flex-col items-center'>
          <p className="text-xl font-medium mb-5">Social Links</p>
          <ul className="flex  gap-5 text-gray-600">
            <li className='py-1'><a href="/"><FaSquareFacebook size={40} className='hover:bg-primary p-2 rounded-full hover:text-gray-200 hover:translate-y-[-10px] transition-all duration-500 '/></a></li>
            <li className='py-1 '><a href="/"><BsTwitterX size={40} className='hover:bg-primary p-2 rounded-full hover:text-gray-200 hover:translate-y-[10px] transition-all duration-500 '/></a></li>
            <li className='py-1'><a href="/"><FaInstagram size={40} className='hover:bg-primary p-2 rounded-full hover:text-gray-200 hover:translate-y-[-10px] transition-all duration-500 '/></a></li>
            <li className='py-1'><a href="/"><FaDiscord size={40} className='hover:bg-primary p-2 rounded-full hover:text-gray-200 hover:translate-y-[10px] transition-all duration-500 '/></a></li>
          </ul>
        </div>
      </div>

      {/* copyright section */}
      <div>
        <hr />
        <p className="my-5 text-sm text-center text-gray-600">
          @ 2024 code with Gambo.All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer