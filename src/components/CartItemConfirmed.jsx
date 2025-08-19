import React from 'react'

export const CartItemConfirmed = () => {
  return (
    <div className="p-3">
      <div className="flex flex-row justify-between px-4">
        <img className="border border-Rose-400 rounded-sm w-12 h-12 cursor-pointer" src="/assets/images/image-cake-thumbnail.jpg" />
        <div className="flex flex-col w-[144px]">
          <p className="text-Rose-900 font-semibold">Classic Tiramissu</p>
          <div className='flex w-[100px] justify-between'>
            <span className="text-Red font-semibold">1x</span>
            <span className="text-Rose-400">@precio</span>
          </div>
        </div>
        <div className='my-auto'>
          <span className="text-Rose-500">$5.00</span>
        </div>
      </div>

    </div>
  )
}
