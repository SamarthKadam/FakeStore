import React from 'react'

export default function Product() {
  return (
    <div className='grid my-5 grid-cols-[2fr,1fr]'>
      <div className='flex justify-center items-center'><img className='h-[75vh]' src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'></img></div>
      <div className='flex flex-col p-4'>
        <div className='font-poppins font-medium text-3xl my-2'>Saleor Dark Polo Shirt</div>
        <div className='font-poppins text-md my-2'>$45.00</div>
        <div><button className='bg-[#5C5C5C] px-6 my-4 py-2 text-white font-poppins rounded-md font-medium'>Add to cart</button></div>
        <div className='font-poppins text-sm'>Ever have those days where you feel a bit geometric? Can't quite shape yourself up right? Show your different sides with a Saleor styles.</div>
      </div>
    </div>
  )
}
