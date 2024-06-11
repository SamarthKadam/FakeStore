import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='px-36'>
    <Header />
    <Outlet></Outlet>
    </div>
  )
}
