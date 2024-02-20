import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import{ Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <Navbar/>
        </header>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         
         <Routes>

         </Routes>

      </div>
    
      
     
    </>
  )
}

export default App
