import React from 'react'
import { ProductInterface as StateProps } from '../../interfaces'
import useStore from '../../store/useStore'

export default function Card({ category, description, id, image, price, rating, title }:StateProps) {

const {remove}=useStore();

const removeHandler=()=>{
  remove(id);
}

  return (
    <div className='flex flex-col justify-center mt-4'>
      <div className='flex justify-between '>
        <div className='flex gap-4'>
          <div className=' border-[#D4D4D4] max-[850px]:w-28  w-48 h-32 flex justify-center items-center rounded border-[1px] px-4 py-4'>
            <img className='h-28 max-[850px]:h-20' src={image} alt='Ecommerce'></img>
          </div>

          <div className='flex flex-col box-border py-2 justify-between'>
            <div>
              <div className='font-poppins max-[700px]:text-sm'>{title}</div>
              <div className='text-[#737373] font-poppins text-sm'>{category[0].toUpperCase()}{category.slice(1)}</div>
            </div>
            <div className='font-semibold font-poppins'>Qty: 1</div>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='font-medium font-poppins'>${price}</div>
          <div onClick={removeHandler} className='text-[#737373] cursor-pointer hover:text-[#525252] font-poppins text-sm'>Remove</div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4"></div>
    </div>
  )
}
