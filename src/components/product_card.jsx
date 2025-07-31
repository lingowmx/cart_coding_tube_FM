

export const ProductCard = () => {
  return (
    <div>
      <img src="/assets/images/image-waffle-mobile.jpg" alt="waffleMobile" 
      className="rounded-lg mb-[32px]"/>
      <button className="bg-rose-50 border border-red-600 rounded-full flex justify-center p-2 w-40 gap-3">
        <img src="/assets/images/icon-add-to-cart.svg"
          alt="icon-add-to-cart"
          className="" />
        <h3>Add to Cart</h3>
      </button>
      <section class="">
        <p className="">Waffle</p>
        <p>Waffle with Berries</p>
        <p>$6.50</p>
      </section>
    </div>
  )
}
