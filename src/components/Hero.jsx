import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px] relative'>
        {/* Hero Text */}
      <div className=" flex flex-col justify-center py-10 md:py-0 ">
        <div className="text-center md:text-left space-y-6">
            <h1 className='text-5xl lg:text-6xl font-bold leading-normal '>Your Gateway to the Anime <span className='text-primary'>Universe</span> </h1>
            <p className='text-gray-600 '>Discover Anime, Connect with fans, and Earn Rewards for Your Passion</p>
        </div>

        {/*  CTA buttons  */}
       <div className="flex justify-center items-center gap-8 my-8 md:justify-start">
            <button className='primary-btn flex items-center gap-2'>Connect Wallet</button>
            <button className='flex border border-primary rounded-md py-3 px-8 font-normal items-center gap-2'>Explore</button>
        </div>

      </div>

      {/* Hero Image */}
      <div className="flex justify-center items-center">
        <img src={assets.onboardingImage} className='w-[350px] md:w-[400px] xl:w-[450px] drop-shadow'  alt="" />
      </div>
    </div>
  )
}

export default Hero
