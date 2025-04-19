import React from "react";
import { IoStorefront } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { GrCreditCard } from "react-icons/gr";
import Title from "./Title";

const HowItWorksData = [
  {
    id: 1,
    title: "Step 1",
    desc: "Create an Account or Connect Wallet.",
    icon: <FaShoppingBag />,
    delay: 0.9,
  },
  {
    id: 1,
    title: "Step 2",
    desc: "Mint/Browse NFTs.",
    icon: <IoStorefront />,
    delay: 0.9,
  },
  {
    id: 1,
    title: "Step 3",
    desc: "Collect, Tip, and Join Creator Groups/Clans.",
    icon: <GrCreditCard />,
    delay: 0.9,
  },
];
const HowItWorks = () => {
  return (
    <div className="container py-10">
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        
        {HowItWorksData.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center bg-secondary/15 hover:text-gray-100 drop-shadow-md space-y-4 p-6 hover:bg-primary/50   rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.12)] cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
              <div className="text-4xl  hover:text-gray-200">{item.icon}</div>
              <p className="text-2xl font-semibold ">{item.title}</p>
              <p className="text-gray-500 text-sm hover:text-primary">{item.desc}</p>
            </div>
          );
        })}
        <div className="space-y-4 p-5">
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800 block"></p>
            <Title text1="How It " text2="Works" />
            <p className="text-gray-500 text-sm">A 3-steps guide to using AnimeNexa.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
