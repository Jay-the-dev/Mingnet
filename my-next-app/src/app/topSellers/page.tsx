"use client"

import React from 'react'
import Image from 'next/image'
import car from "../../../public/topSeller-image.png"
import star from "@/../../public/star.png"

type CardProps = {
    borderBottom?: boolean;
}

const page = ( {borderBottom = true}:CardProps) => {
  return (
    <div className='grid grid-cols-[1fr_2.5fr] gap-5 p-[15px_0_12px_0] border-b border-b-gray-500'>
        <Image src={car} alt="" width={100} className='object-cover' />
        <div className="content">
            <p className="font-light text-[13px]">
                Lexus RX BWD 2024 with Extra Battery & Tires.
            </p>
            <div className="flex">
                <span className="bg-gray-300 font-bold mr-2 text-gray-900 rounded-full text-[8px] p-[3px_10px]">Red</span> 
                <span className='text-[12px] font-light'>sold 120</span>
            </div>
            <div className="flex justify-between">
                <p>N165,500</p>
                <div className="starImage flex justify-around pr-3.5">
                    <Image src={star} alt="" className='w-full object-cover' />
                    <Image src={star} alt="" className='w-full object-cover' />
                    <Image src={star} alt="" className='w-full object-cover' />
                    <Image src={star} alt="" className='w-full object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page