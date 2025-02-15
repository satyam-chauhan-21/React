// in this document
// tailwind css : iski alag alag class ke baare me padhna 
// props : iske baare me hamne car.jsx me likha hai.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Card from './component/Card.jsx' // yaha per ye line error de raha hai pata nahi kyu? but if ham Card.jsx ko small later me likh de to  ye error solve ho jata hai.
// pehel vali error se optput to dikh raha hai uss per koi fark nahi pad raha hai.
import Card from './component/card.jsx'

// yaha hamne App.jsx component ko call kiya hai jisme hamne tailwind ka use kiya hai.
// now isme ham card componet ko call karenge.

const obj = {
  userName: 'hiteshi',
  age: 21
}

const arr = [1,2,3,4,5]

/**
 * props me argument ese pass karte hai
 * <Card username='kaali' salary='100000'/> // iss type se kuch values bhej di hai joki component me object type me jayengi.
 * // isme username key banega and uski value "kaali" uss key ki value banega.
 * <Card obijecty={obj} />
 * // iss type se hame object create karke bhi bhej skte hai. so jab ye component me jayega tab "obijecty" key banega and jo bhi object ham bhej rahe hai usse sendigObj point karega.
 */
createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <App />  */}
    {/* <Card />
    <Card /> */}

    <div className="flex space-x-4">
      <Card username='kiran' salary='100000'/>
      <Card username='manavi' salary='100000'/>
      <Card  salary='100000'/>
      {/* <Card obijecty={obj} />
      <Card arr={arr} /> */}
    </div>
  </StrictMode>,
)
