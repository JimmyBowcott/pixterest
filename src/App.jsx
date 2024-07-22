import { useState } from 'react'
import './css/App.css'
import Nav from './components/Nav'
import SlideshowHandler from './components/SlideshowHandler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Nav />
      <SlideshowHandler />
      <div className="h-48 absolute bottom-14 bg-gradient-to-t from-white to-transparent w-full"></div>
      <div className="h-14 flex items-center justify-center gap-2 bg-pale-yellow absolute bottom-0 right-0 w-full">
      <p className="cursor-pointer">Here's how it works</p>
      <img src="./src/assets/icons/arrow-down.png" className="h-2 pixelated cursor-pointer" alt="" />
      </div>
    </div>
  )
}

export default App
