import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const priceOptions = [
  'Low to High', 'High to Low'
];

const categoryOptions = [
  "All Products", "Men's clothing", "Jewelery", "Electronics", "Women's clothing"
];



export default function Header() {


  const { cart, setSearchInput, sort, setCategory,setCurrentPage} = useStore();

  const searchHandler = (e: any) => {
    setCurrentPage(1);
    setSearchInput(e.target.value)
  }

  const sortHandler = (option: any) => {
    const ans = option.value === priceOptions[0] ? true : false;
    setCurrentPage(1);
    sort(ans);
  }

  const categoryHandler = (option: any) => {
    setCurrentPage(1)
    setCategory(option.value);
  }


  return (
    <div className='bg-[#F9F9F9] sticky top-0 z-10  py-4 px-2  flex justify-between'>
      <div className='flex gap-8 max-[550px]:gap-4 max-[900px]:gap-6 items-center font-roboto'>
        <Link to='/' className='text-lg font-bold font-poppins'>FakeStore</Link>
        <Dropdown className='text-sm max-[400px]:hidden font-poppins max-[900px]:text-xs text-[#7A7A7A]' options={categoryOptions} onChange={categoryHandler} value={'Category'} placeholder="Select an option" />
        <Dropdown className='text-sm max-[540px]:hidden font-poppins max-[900px]:text-xs text-[#7A7A7A]' options={priceOptions} onChange={sortHandler} value={'Sort Price'} placeholder="Select an option" />
      </div>
      <div className='flex gap-6 items-center'>
        <div className="flex items-center border max-[860px]:hidden border-gray-300 rounded overflow-hidden w-72">
          <input
            type="text"
            placeholder="Search for products"
            onChange={searchHandler}
            className="flex-grow p-2 max-[860px]:text-sm border-none outline-none"
          />
          <button type="submit" className="p-2 bg-white">
            <CiSearch size={22} color='#8F8F8F' />
          </button>
        </div>
        <div className='flex'>
          <Link className='relative' to='/cart'>
            <RiShoppingBag3Line size={30} />
            {cart.length > 0 && <div className='bg-black rounded right-0 top-[75%] text-xs font-poppins w-4 text-center font-medium text-white absolute'>{cart.length}</div>}
          </Link>
        </div>
      </div>
    </div>
  )
}
