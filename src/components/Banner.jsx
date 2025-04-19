import React, { useContext } from "react";
import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Banner = () => {
//   const navigate = useNavigate();
  const { token } = useContext(AppContext);
  return (
    <div className="flex bg-custom-gradient rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10" >
      {/* left side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white max-w-[450px]">
          <p>A Home of Anime lovers in Web3.</p>
          <p className="mt-4 text-sm md:text-lg font-light font-mono">
            Connect with fellow otaku and share your  art with the world.
          </p>
        </div>
        <button
        //   onClick={() => {
        //     navigate("/login");
        //     // scrollTo(0, 0);
        //   }}
          className={` ${
            token ? " hidden " : " block "
          } bg-primary text-sm sm:text-base text-white px-8 py-3 rounded-xl mt-6 hover:scale-105 transition-all duration-300`}
        >
          Create Account
        </button>
      </div>

      {/* right side */}
      <div className="hidden  md:flex justify-center items-center md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-17 max-w-md"
          src={assets.bannerLogo}
          alt=""
        />
        <div className="">
            <img src={assets.backpack} alt="" className="w-10 absolute bottom-14 right-60" />
            <img src={assets.ellipse1} alt="" className="w-10 absolute top-20 right-20" />
            <img src={assets.ellipse2} alt="" className="w-10 absolute left-0" />
            <img src={assets.ellipse3} alt="" className="w-10 absolute bottom-3 right-32" />
            <img src={assets.bitcoin} alt="" className="w-10 absolute right-0" />
            <img src={assets.bitcoin} alt="" className="w-10 absolute left-5 top-20" />
            <img src={assets.solana} alt="" className="w-10 absolute right-0 bottom-9 " />
            <img src={assets.bitcoin} alt="" className="w-10 absolute right-0" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
