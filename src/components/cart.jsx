import { CarbonNeutral } from "./CarbonNeutral"
import { CartItem } from "./CartItem"
import { CartButton } from "./CartButton"
import OrderTotal from "./OrderTotal"

export const Cart = () => {
  return (
    <div className="bg-Rose-50 rounded-lg">
      <p>Your cart 9</p>
      <CartItem/>
      <CartItem/>
      <OrderTotal/>
      <CarbonNeutral/>
      <CartButton text="Confirm Order"/>
    </div>
  )
}
