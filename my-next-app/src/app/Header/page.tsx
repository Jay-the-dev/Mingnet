"use client"
import React from 'react'
import { CiFacebook ,  CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter , FaArrowLeftLong, FaAngleDown  } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import Image from 'next/image';
import Logo from "../../../public/Logo.png"

const header = () => {
  return (
    <header className='w-full fixed top-0'>
        <div className="socialLinks-top w-full bg-[#2B2B2A] text-white grid grid-cols-[1.8fr_1.5fr] p-[10px_50px_10px_20px]">
            <div className="brand flex justify-end">
                <p className="text-orange-300 text-[16px]">
                    Sell on Mingnets
                </p>
                <span className='flex items-center ml-3'>
                    <FaArrowLeftLong color='grey' fontSize={20} fontWeight={200}/>
                </span>
            </div>
            <div className="linkIcons flex justify-end">
                <a href="" className='mr-3.5'>
                    <CiFacebook color='#fff' size={18} />
                </a>
                <a href="" className='mr-3.5'>
                    <CiInstagram color='#fff' size={18} />
                </a>
                <a href="" className='mr-3.5'>
                    <FaTiktok color='#fff' size={16} />
                </a>
                <a href="">
                    <FaXTwitter color='#fff' size={16} />
                </a>
            </div>
        </div>

        <nav className="flex justify-between p-[25px_50px] bg-white shadow-md w-full">
            <a href="#" className="logoBanner w-1/6">
                <Image src={Logo} alt="Mignet Logo" className='w-full'/>
            </a>
            <div className="userProfile items-center flex">
                <span>
                    <LuUserRound fontSize={28}/>
                </span>
                <span className="ml-3.5">
                    Hi, Central Hub 
                </span>
                <span className="ml-4.5">
                    <FaAngleDown fontSize={12} fontWeight={300}/>
                </span>
            </div>
        </nav>
    </header>
    
  );
}

export default header
