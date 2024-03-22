import { useState } from 'react'
import Navigation from './components/Navigation'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Sidebar/>
    </>
  )
}

export default App
