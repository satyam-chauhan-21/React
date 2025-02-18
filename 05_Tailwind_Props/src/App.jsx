// in this document:
// tailwind uses : tailwind ke liye alag se ham padhenge, uske class ke baare me konsi class kiske liye use hoti hai vesa. 
// props : props means argument pass in main.jsx while calling a component and jo hamne argument pass kari hai vo component ke parameters me jati hai fir ham usko component me kahi bhi use kar skte hai.

import { useState } from 'react'
import './App.css'


//----------------------------------------------------------------------------------------------------//
//                                         tailwind uses
//----------------------------------------------------------------------------------------------------//
// us function ke h1 me ham tailwind ka use karenge.
// react me html tags ke andar class ki jagah par className likh jata hai.
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-sky-500 text-violet-700 inset-ring-4 inset-ring-blue-500/50 p-10 rounded-xl'>Hello Tailwind</h1>

    </>
  )
}

export default App