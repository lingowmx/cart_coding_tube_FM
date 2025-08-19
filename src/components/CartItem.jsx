export const CartItem = () => {
  return (
    <div className="p-3 relative">
      <p className="text-Rose-900">Classic Tiramissu</p>
      <div className="flex flex-row justify-between">
        <div className="flex justify-between w-[144px]">
          <span className="text-Red">1x</span>
          <span className="text-Rose-400">@ precio</span>
          <span className="text-Rose-500">total</span>
        </div>
        <img className="border border-Rose-400 rounded-full w-5 h-5 cursor-pointer absolute right-3 top-7" src="/assets/images/icon-remove-item.svg"/>
      </div>
    </div>
  )
}
