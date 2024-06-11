import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-[#F9F9F9] py-4 px-2  flex justify-between'>
        <div className='flex gap-8 items-center font-roboto'>
            <Link to='/' className='text-lg font-bold font-poppins cursor-pointer'>FakeStore</Link>
            <div className=' text-[#7A7A7A] font-poppins cursor-pointer'>All</div>
            <div className=' text-[#7A7A7A] font-poppins cursor-pointer'>Filter</div>
        </div>
        <div className='flex gap-6 items-center'>
        <div className="flex items-center border border-gray-300 rounded overflow-hidden w-72">
            <input 
                type="text" 
                placeholder="Search for products" 
                className="flex-grow p-2 border-none outline-none"
            />
            <button type="submit" className="p-2 bg-white">
            <CiSearch size={22} color='#8F8F8F' />
            </button>
        </div>
        <div className='flex'>
        <Link to='/cart'>
        <RiShoppingBag3Line size={30}/>
        </Link>
        </div>
        </div>
    </div>
  )
}
