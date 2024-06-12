import React from 'react'
import { ProductInterface as CardProps } from '../../interfaces'
import { Link } from 'react-router-dom'

export default function Card({ category, description, id, image, price, rating, title }: CardProps) {

  return (
    <Link to={`/${id}`} className='flex flex-col gap-6 border-b pb-2 border-[1xp] cursor-pointer'>
      <div className='flex justify-center'>
        <img className="h-60 transition hover:scale-110" src={image}></img>
      </div>
      <div>
        <div className='flex justify-between gap-12'>
          <div className='text-sm font-medium font-poppins'>{title}</div>
          <div className='font-poppins text-sm font-medium'>${price}</div>
        </div>
        <div className='text-[#737373] font-poppins text-sm'>{category[0].toString().toUpperCase()}{category.slice(1)}</div>
      </div>
    </Link>
  )
}
