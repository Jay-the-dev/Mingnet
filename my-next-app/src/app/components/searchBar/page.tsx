import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="searchBox flex items-center border border-r-0 border-gray-300 rounded-full w-[350px] ">
      <input type="text" name="search" id="search" placeholder='What are you looking for?' className='border-none outline-none p-3 w-[290px]' />
      <button className='searchIcon bg-green-500 p-2 rounded-full h-full w-[60px] flex items-center justify-center cursor-pointer hover:bg-green-800 transition ease-in-out delay-200'>
        <BsSearch className='text-white' />
      </button>
    </div>
  )
}

export default SearchBar