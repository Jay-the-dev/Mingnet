"use client"
import React from 'react'
import { useState } from "react";
import { MdOutlineCancel, MdOutlineFilterList } from "react-icons/md";
import NavBar from "../Header/page"
import SideBar from '../components/sideBar/page'
import SearchBar from '../components/searchBar/page'
import Slider from '../components/slider/page'
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
        <section className='grid grid-cols-[1fr_3fr] gap-10'>
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

        <section className='mt-0'>
          <div className="searchBar w-full flex justify-end">
            <SearchBar />
          </div>
          <div className="grid grid-cols-[1.2fr_3fr] gap-7 mt-2.5">
            {/* Filter */}
            <div className="filter flex flex-col p-[20px_25px] border-r-gray-300 bg-[#fffefe] border-r-1 justify-center rounded-r-md">
              <h2 className='flex gap-3 mb-10'>
                <MdOutlineFilterList className='text-gray-500 text-[25px]' />
                <span className='text-gray-900 uppercase'>Filter</span>
              </h2>
              <div className="categories">
                <div className='gap-4 flex items-center'><input type="radio" name="freeShipping" id="categories" style={{ accentColor: "#01a2ff", width: "20px", height: "20px" }} /> <label htmlFor="categories" className='text-gray-500'>Free Shipping</label></div>

                <div className="flex flex-col mt-8">
                  <h3 className='text-gray-900 mb-4 font-extrabold'>Color</h3>
                  <div className="colorCategories flex flex-col p-2">
                    <label htmlFor="colorBlack" className='flex items-center gap-5 mb-4'><input type="radio" name="color" id="colorBlack" style={{ accentColor: "black", width: "20px", height: "20px" }} /> <span className='text-gray-500'>Black</span></label>

                    <label htmlFor="colorBlue" className='flex items-center gap-5 mb-4'><input type="radio" name="color" id="colorBlue" style={{ accentColor: "blue", width: "20px", height: "20px" }} /> <span className='text-gray-500'>Blue</span></label>

                    <label htmlFor="colorRed" className='flex items-center gap-5 mb-4'><input type="radio" name="color" id="colorRed" style={{ accentColor: "red", width: "20px", height: "20px" }} /> <span className='text-gray-500'>Red</span></label>

                    <label htmlFor="colorBrown" className='flex items-center gap-5 mb-4'><input type="radio" name="color" id="colorBrown" style={{ accentColor: "brown", width: "20px", height: "20px" }} /> <span className='text-gray-500'>Brown</span></label>

                    <label htmlFor="colorWhite" className='flex items-center gap-5 mb-4'><input type="radio" name="color" id="colorWhite" style={{ accentColor: "white", width: "20px", height: "20px" }} /> <span className='text-gray-500'>White</span></label>
                  </div>
                  <Slider />
                  <div className="disCount mt-8">
                    <h3 className='text-gray-900 mb-4 font-extrabold'>Percentage Discount</h3>
                    <div className="discountCategories flex flex-col p-2">
                      <label htmlFor="discount50+" className='flex items-center gap-4 mb-1'><input type="checkbox" name="discount" id="discount50+" style={{ width: "20px", height: "18px" }} /> <span className='text-gray-500'>50% and above</span></label>
                      <label htmlFor="discount50-" className='flex items-center gap-4'><input type="checkbox" name="discount" id="discount50-" style={{ width: "20px", height: "18px" }} /> <span className='text-gray-500'>50% and below</span></label>
                    </div>
                  </div>

                  <div className="material mt-8">
                    <h3 className='text-gray-900 mb-4 font-extrabold'>Material</h3>
                    <div className="flex flex-col p-2">
                      <label htmlFor="pattern" className='flex items-center gap-4 mb-1'><input type="checkbox" name="material" id="pattern" style={{ width: "20px", height: "18px" }} /> <span className='text-gray-500'>Pattern</span></label>
                      <label htmlFor="animalPrint" className='flex items-center gap-4'><input type="checkbox" name="material" id="animalPrint" style={{ width: "20px", height: "18px" }} /> <span className='text-gray-500'>Animal Print</span></label>
                      <label htmlFor="plain" className='flex items-center gap-4 mb-1'><input type="checkbox" name="material" id="plain" style={{ width: "20px", height: "18px" }} /> <span className='text-gray-500'>Plain</span></label>
                      <label htmlFor="Leather" className='flex items-center gap-4'><input type="checkbox" name="material" id="Leather" style={{ width: "20px", height: "18px" }} /> <span className='text-gray-500'>Leather</span></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-10">
                <button className='bg-gray-100 px-4 py-2 rounded-full cursor-pointer text-gray-950 font-bold'>Clear</button>
                <button className='bg-green-500 text-white px-4 py-2 rounded-full font-bold cursor-pointer'>Apply</button>
              </div>
            </div>

            {/* Products Display */}
          </div>
        </section>

      </main>
    </div>
  )
}

export default Store