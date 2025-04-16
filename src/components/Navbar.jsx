import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const [token,setToken]=useState(true)

  const [visible,setVisible] = useState(false)

  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between text-sm py-3 mb-5 border-b border-gray-400'>

      {/* logo */}
      <img src={assets.logo} alt="" className='w-44 cursor-pointer'/>

      {/* nav link */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1 text-primary font-semibold'>Home</li>
          <hr className='h-0.5 w-3/5 bg-secondary  rounded-full border-none outline-none m-auto hidden '/>
        </NavLink>

        <NavLink to='/explore'>
          <li className='py-1 text-primary font-semibold'>Explore</li>
          <hr className='h-0.5 w-3/5 bg-secondary  rounded-full border-none outline-none m-auto hidden '/>
        </NavLink>

        <NavLink to='/groups'>
          <li className='py-1 text-primary font-semibold'>Groups</li>
          <hr className='h-0.5 w-3/5 bg-secondary  rounded-full border-none outline-none m-auto hidden '/>
        </NavLink>

        <NavLink to='/messages'>
          <li className='py-1 text-primary font-semibold'>Messages</li>
          <hr className='h-0.5 w-3/5 bg-secondary  rounded-full border-none outline-none m-auto hidden '/>
        </NavLink>
      </ul>

      {/* Cta button */}
      <div className='flex items-center gap-4'>
        {
          token
          ? <div className='group relative'>
          
              <CgProfile  className='hidden md:block text-[25px] cursor-pointer'/>
              <div className="group-hover:block hidden absolute right-0 pt-4 ">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 font-semi-bold ">
                  <p onClick={()=>navigate('/profile/:userId')} className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={()=>navigate('/wallet')} className="cursor-pointer hover:text-black">My Wallet</p>
                  <p onClick={()=>setToken(false)} className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
          </div>
          :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-9 py-3 rounded-xl font-medium hover:shadow-lg hover:bg-secondary hidden md:block hover:text-primary transition-all duration-300'>Login</button>
        }
        
      </div>

      {/* menu bar */}
      <div className='flex gap-5 md:hidden items-center'>
        <button onClick={()=>navigate('/wallet')} className='bg-primary text-white px-9 py-3 rounded-xl font-medium hover:shadow-lg hover:bg-secondary  hover:text-primary transition-all duration-300'>Connect Wallet</button>
        <IoMenu onClick={()=> setVisible(true)} className='text-[30px] cursor-pointer '/>
      </div>


      {/* side menu for small screens */}
      <div className={`absolute top-0 ring-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600 my-2">
          <div onClick={()=> setVisible(false)} className="flex items-center gap-2 p-3 my-5">
            <IoChevronBackSharp className='text-lg'/>
            <p className='font-normal text-[15px]'>Back</p>
          </div>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-5 border text-primary font-bold rounded-md hover:bg-primary hover:text-gray-50' to='/'>Home</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-5 border text-primary font-bold rounded-md hover:bg-primary hover:text-gray-50' to='/explore'>Explore</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-5 border text-primary font-bold rounded-md hover:bg-primary hover:text-gray-50' to='/groups'>Groups</NavLink>
          <NavLink onClick={()=> setVisible(false)} className='py-2 pl-5 border text-primary font-bold rounded-md hover:bg-primary hover:text-gray-50' to='/messages'>Messages</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
