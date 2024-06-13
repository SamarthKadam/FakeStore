import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer, Bounce } from 'react-toastify'
import { useEffect } from 'react'
import useStore from '../store/useStore'
import { setItemToLocalStorage, getItemFromLocalStorage } from '../utility'

export default function Root() {

  const { cart, initializeCart } = useStore();


  useEffect(() => {
    const storedCart = getItemFromLocalStorage();
    if (storedCart&&storedCart.length > 0) {
      initializeCart(storedCart);
    }
  }, []);

  useEffect(() => {
    setItemToLocalStorage(cart);
  }, [cart])


  return (
    <div className='px-36 max-[970px]:px-12 max-[450px]:px-6'>
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
