import { CartItemConfirmed } from "./CartItemConfirmed"
import { CartButton } from "./CartButton"
import { OrderTotalConfirmation } from "./OrderTotalConfirmation"


export const CartConfirmation = () => {
  return (
    <dialog open className="bg-black/50 w-full fixed h-screen grid place-content-center">
      <div className="bg-white w-[375px] rounded-lg px-4 py-6">
        <img src="/assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" />
        <h2 className="font-bold text-Rose-900 text-4xl w-[200px] pt-8">Order Confirmed</h2>
        <p className="text-sm text-Rose-300 py-2">We hope you enjoy your food</p>
        <div className="rounded-md bg-Rose-50">
          <CartItemConfirmed />
          <CartItemConfirmed />
          <OrderTotalConfirmation />
        </div>
        <CartButton text="Start New Order" />
      </div>
    </dialog>
  )
}
