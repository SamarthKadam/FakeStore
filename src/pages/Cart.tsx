import React from 'react'
import Card from '../components/Cart/Card'

export default function Cart() {
  return (
    <div className='py-12'>
       <div className='text-3xl font-semibold font-poppins tracking-tight '>Your Shoppping Cart</div> 
       <div className="border-t border-gray-300 mt-14"></div>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <div className='bg-[#FAFAFA] border-[1px] rounded border-gray-300 my-6 flex justify-between px-2 py-4'>
        <div className='flex flex-col '>
          <div className='font-poppins font-semibold'>Your Total</div>
          <div className='text-[#686868]  font-poppins text-sm'>Shipping will be calculated in the next step</div>
        </div>
        <div className='flex font-poppins font-medium justify-center items-center'>$120.00</div>
       </div>
       <div className='flex justify-center'>
        <button className='bg-black hover:bg-[#1C1C1C] px-40 py-3 text-md font-poppins text-white rounded'>Checkout</button>
       </div>
    </div>
  )
}
