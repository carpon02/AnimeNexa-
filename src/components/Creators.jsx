import React from 'react'
import Title from './Title'
import { assets, featuredCreators } from '../assets/assets'


const Creators = () => {
  return (
    <div  className="flex flex-col md:items-center items-start  my-10 text-gray-900  md:mx-10">
      <Title text1="Featured " text2="Creators" />

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
       
        <div className="">
            {
                featuredCreators.map((item, index) => (
                    <div key={index} className="flex justify-between w-[350px] h-[80px] p-4 border border-gray-200 rounded-xl  cursor-pointer hover:translate-y-[-10px] transition-all duration-500 relative  ">
                        <img className="bg-green-50 rounded-full w-66" src={item.avatar} alt="" />
                        <p className='text-[9px] text-gray-400 absolute left-12 bottom-4 bg-white w-4 text-center rounded-full'>{item.nftCount}</p>
                        <div className="flex flex-col items-start  ">
                            <p className="text-gray-700 text-md font-medium">{item.name}</p>
                            <p className="text-gray-400 text-sm font-medium cursor-pointer hover:bg-gray-200 t ">{item.collection}</p>
                        </div>
                        <div className="flex flex-col relative">
                            <div className="flex items-center gap-2 text-gray-00">
                                <img src={assets.solana} alt="" className=''/>
                                <p>{item.floorPrice} {item.currency}</p>
                            </div>
                            <p className='absolute bottom-[-10px] right-[-2px] text-sm text-green-500'>{item.priceChange}</p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
       
        
      </div>
    </div>
  )
}

export default Creators
