import { useState } from "react"


export const ProductCard = ({ name, image, category, price }) => {
  const [quantity, setQuantity] = useState(0)

  const addOne = () => {
    setQuantity(quantity + 1)
  }
  const substractOne = () => {
    setQuantity(quantity - 1)
  }
  return (
    <div className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={image.tablet}/>
        <source media="(min-width: 1440px" srcSet={image.desktop}/>
      <img
        src={image.mobile}
        alt="waffleMobile"
        className="rounded-lg mb-[32px]"
      />
      </picture>

      {quantity === 0 ? (<button className="bg-rose-50 border border-red-600 rounded-full 
      flex justify-center p-2 w-40 gap-3 absolute top-44 inset-x-0 mx-auto 
      cursor-pointer" onClick={addOne}>
        <img src="/assets/images/icon-add-to-cart.svg"
          alt="icon-add-to-cart"
          className="" />
        <h3>Add to Cart</h3>
      </button>) :
        (<div className="bg-Red border rounded-full flex justify-between items-center p-3   w-40
          gap-3 absolute top-44 inset-x-0 mx-auto cursor-pointer">
          <img
            className="border border-Rose-50 size-[18px] p-1 rounded-full hover:bg-Rose-50 "
            src="/assets/images/icon-decrement-quantity.svg"
            alt="icon-decrement-quantity"
            onClick={substractOne} />
          <p className="text-rose-50">{quantity}</p>
          <img
            className="border border-Rose-50 size-[18px] p-1 rounded-full hover:bg-Rose-50 "
            src="/assets/images/icon-increment-quantity.svg"
            alt="icon-increment-quantity"
            onClick={addOne} />
        </div>)}

      <section>
        <p className="text-Rose-300">{category}</p>
        <p className="font-semibold">{name}</p>
        <p className="text-Red">${price}</p>
      </section>
    </div>
  )
}
