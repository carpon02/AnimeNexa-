import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px] relative'>
        {/* Hero Text */}
      <div className=" flex flex-col justify-center py-10 md:py-0 ">
        <div className="text-center md:text-left space-y-6">
            <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>Your Gateway to the Anime <span className='text-primary'>Universe</span> </h1>
            <p  className='text-gray-600 '>Discover Anime, Connect with fans, and Earn Rewards for Your Passion</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Hero
