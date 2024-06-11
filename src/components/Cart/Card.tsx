import React from 'react'

export default function Card() {
  return (
    <div className='flex flex-col justify-center mt-4'>
        <div className='flex justify-between '>
            <div className='flex gap-4'>
            <div className=' border-[#D4D4D4] rounded border-[1px] px-4 py-4'>
  <img className='h-28' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='Ecommerce'></img>
</div>

                <div className='flex flex-col box-border py-2 justify-between'>
                  <div>
                  <div className='font-poppins'>Saleor Monospace</div>
                  <div className='text-[#737373] font-poppins text-sm'>T shirts</div>
                  </div>
                  <div className='font-semibold font-poppins'>Qty: 2</div>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='font-medium font-poppins'>$20.00</div>
              <div className='text-[#737373] font-poppins text-sm'>Remove</div>
            </div>
        </div>
        <div className="border-t border-gray-300 mt-4"></div>
    </div>
  )
}
