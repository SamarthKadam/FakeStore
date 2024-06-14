import React from 'react'
import Card from '../components/Cart/Card'
import useStore from '../store/useStore'
import { Link } from 'react-router-dom';

export default function Cart() {

  const { cart } = useStore();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='py-12'>
      <div className='text-3xl font-semibold font-poppins tracking-tight '>Your Shoppping Cart</div>
      {cart.length === 0 && (<>
        <div className='text-sm font-poppins my-8 text-[#737373]'>Looks like you haven’t added any items to the cart yet.</div>
        <div><Link to='/' className='bg-black hover:bg-[#1C1C1C] px-20 font-medium py-3 text-md font-poppins text-white rounded'>Explore products</Link></div>
      </>)}
      {cart.length > 0 && (<>
        <div className="border-t border-gray-300 mt-14"></div>
        {cart.map((val) => <Card key={val.id}
          category={val.category}
          description={val.description}
          id={val.id}
          image={val.image}
          price={val.price}
          rating={val.rating}
          title={val.title}></Card>)}
        <div className='bg-[#FAFAFA] border-[1px] rounded border-gray-300 my-6 flex justify-between px-2 py-4'>
          <div className='flex flex-col '>
            <div className='font-poppins font-semibold'>Your Total</div>
            <div className='text-[#686868]  font-poppins text-sm'>Shipping will be calculated in the next step</div>
          </div>
          <div className='flex font-poppins font-medium justify-center items-center'>${totalPrice.toFixed(2)}</div>
        </div>
        <div className='flex justify-center'>
          <button className='bg-black hover:bg-[#1C1C1C] px-40 py-3 max-[500px]:px-28 text-md font-poppins text-white rounded'>Checkout</button>
        </div>
      </>)}
    </div>
  )
}
