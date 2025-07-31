import { useState } from 'react'
import './App.css'
import { CardsContainer } from './components/cards_container'

function App() {

  return (
    <>
    <main className='flex justify-center'>

      <section className='border-2 border-Red w-[327px] p-2'>
        <h1 class="text-3xl">Desserts</h1>
        <CardsContainer />
      </section>
    </main>
    </>
  )
}

export default App
