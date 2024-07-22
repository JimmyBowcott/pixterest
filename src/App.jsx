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
    </div>
  )
}

export default App
