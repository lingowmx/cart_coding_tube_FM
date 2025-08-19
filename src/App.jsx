import './App.css'
import { CardsContainer } from './components/CardsContainer'
import { Cart } from './components/Cart'
import { CartConfirmation } from './components/CartConfirmation'

function App() {

  return (
    <>
      <main className='flex justify-center'>
        <section className='p-2'>
          <h1 class="text-3xl">Desserts</h1>
          <div className='desktop:flex desktop:gap-8 desktop:items-start'>
            <CardsContainer />
            <Cart />
          </div>
        </section>
        <CartConfirmation/>
      </main>
    </>
  )
}

export default App
