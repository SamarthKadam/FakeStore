import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'low to high', 'high to low'
];
const defaultOption = options[0];


export default function Header() {


  const {cart,setSearchInput,sort}=useStore();

  const searchHandler=(e:any)=>{
    setSearchInput(e.target.value)
  }

  const sortHandler=(option:any)=>{
    console.log(option.value);
    const ans=option.value===options[0]?true:false;
    sort(ans);
  }

  return (
    <div className='bg-[#F9F9F9] sticky top-0 z-10  py-4 px-2  flex justify-between'>
      <div className='flex gap-8 max-[520px]:gap-4 items-center font-roboto'>
        <div className='text-lg font-bold font-poppins'>FakeStore</div>
        <Link to='/' className=' text-[#7A7A7A] font-poppins cursor-pointer'>All</Link>
        {/* <div className=' text-[#7A7A7A] font-poppins cursor-pointer'>Sort to Price</div> */}
        <Dropdown className='text-sm max-[400px]:hidden text-[#7A7A7A]' options={options} onChange={sortHandler} value={'Sort Price'} placeholder="Select an option" />
      </div>
      <div className='flex gap-6 items-center'>
        <div className="flex items-center border max-[780px]:hidden border-gray-300 rounded overflow-hidden w-72">
          <input
            type="text"
            placeholder="Search for products"
            onChange={searchHandler}
            className="flex-grow p-2 border-none outline-none"
          />
          <button type="submit" className="p-2 bg-white">
            <CiSearch size={22} color='#8F8F8F' />
          </button>
        </div>
        <div className='flex'>
          <Link className='relative' to='/cart'>
            <RiShoppingBag3Line size={30} />
            {cart.length>0&&<div className='bg-black rounded right-0 top-[75%] text-xs font-poppins w-4 text-center font-medium text-white absolute'>{cart.length}</div>}
          </Link>
        </div>
      </div>
    </div>
  )
}
