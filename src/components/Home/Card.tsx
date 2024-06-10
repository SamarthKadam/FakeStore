import React from 'react'
import { ProductInterface as CardProps } from '../../interfaces'
import { Link } from 'react-router-dom'

export default function Card({category,description,id,image,price,rating,title}:CardProps) {

  return (
    <Link to='/product' className='flex flex-col gap-3 cursor-pointer'>
    <div className='flex justify-center'>
    <img className="h-60" src={image}></img>
    </div>
    <div>
    <div className='flex justify-between'>
        <div className='text-md font-medium'>{title}</div>
        <div>${price}</div>
    </div>
    <div className='text-[#737373]'>{category.toString().toUpperCase()}</div>
    </div>
    </Link>
  )
}
