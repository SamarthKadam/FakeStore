import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='flex h-[75vh] justify-center items-center'><InfinitySpin
      width="200"
      color="#000000"
    /></div>
  )
}
