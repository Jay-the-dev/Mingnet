"use client"
import React from 'react'
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import NavBar from "../Header/page"
import SideBar from '../components/sideBar/page'
import banner from '../../../public/Storebanner.jpg'
import Image from 'next/image'
import popupImage from '../../../public/popup.png'

const Store = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <NavBar />
      </header>

      <main className="z-0 mt-35 p-[0_56px_50px_56px]">
        <section className='flex gap-10'>
          <SideBar />
          <div>
            {showPopup && (
              <div className="popUp bg-transparent p-4 rounded-lg relative grid grid-cols-[3fr_.5fr]">
                <p className="text-gray-700 text-[16px] pl-8">
                  Delivery time starts from the day you place your order to the day one
                  of our associates makes a first attempt to deliver to you. Delivery
                  will be attempted 2 times over 5 days (7.00 am to 5.30 pm) after which
                  the item will be cancelled.
                </p>
                <div className="popUpImage">
                  <Image src={popupImage} alt='Image' width={90} />
                </div>
                <button onClick={handleClosePopup} className="absolute top-2 left-2 cursor-pointer">
                  <MdOutlineCancel className="text-2xl text-gray-500 hover:text-gray-700" />
                </button>
              </div>
            )}
            <Image src={banner} alt="Store Banner" className='w-full h-1/2 rounded-lg shadow-md object-cover' />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Store