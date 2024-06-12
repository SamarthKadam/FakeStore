import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer,Bounce } from 'react-toastify'

export default function Root() {
  return (
    <div className='px-36'>
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Header />
      <Outlet></Outlet>
    </div>
  )
}
