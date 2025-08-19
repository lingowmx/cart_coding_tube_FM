

export const CartButton = ({text}) => {
  return (
    <div className="flex justify-center w-full h-8 mt-4 text-Rose-100 text-xs rounded-2xl bg-Red cursor-pointer">
      <button className="cursor-pointer">
        {text}
      </button>
    </div>
  )
}
