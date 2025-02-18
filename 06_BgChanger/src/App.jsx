// in this document:
// iss file me ham ek mini project type banayenge joki bg ko change kar raha hoga.
// problem of onClick()

import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')


  // yaha per hame tailwind ki unn class ke baare me likhenge jo ham use kar rahe hai.
  // w : width ke liye use hota hai. iski value me ham kya kya likh skte hai vo yaha padh lo: https://tailwindcss.com/docs/width
  // h : height ke liye use hota hai. for more info -> https://tailwindcss.com/docs/height
  // inset-x-0 : iss property ki vajah se element bich me aa gaya hai. This is useful for centering elements horizontally within their parent container.


  //-------------------------------------------------------------------------------------------------------//
  //                                          problem of onClick()
  //-------------------------------------------------------------------------------------------------------//
  // yaha par ek chij smjhte hai ki yaha per hamne color change karne ke liye onclick() lagana padega.
  // and onclick() ek callback mangta hai. if ham uske parameter me ese onclick(setColor) callback pass kar denge means stter ka reference de denge to hamne jo color dena hai vo nahi de payenge. kyoki ham yaha par bata hi nahi paaye ki hamne ye color ka bg chahiye.
  // and if ham iss tarah onclick(setColor('red')) parameter me setter likhenge to setter parameter me hi execute ho jayega and setter apne execution ke baad jo bhi return karega vo onclick() ke parameter me pass ho jayega.
  // isiliye ham onclick() ke parameter me na to stter ka reference pass kar skte hai ya naa hi setter ko parameter me execute karva skte hai kyoki vo to or bhi galat ho jayega iss situation ke liye.

  // so iss problem ka solution ye hai ki ham onClick() ke andar ek callback function banaye and iss callback function se setter function setColor() ke call karvaye.
  // so iss se ye hoga ki ab ham iss setColor() ke andar color ko parameter me pass kar sakenge. 
  // kuch iss tarah onClick(() => setColor('red'))

  // ab ye solution iss liye kaam karega kyoki onclick() function ek callback hi mangta hai fir baad me vo internally work karke setColor() ka use karke state ko update kar dega.
  // jab bhi ham uss button ko click karenge tab ye onclick event trigger hoga then iske andar ka callback function fire hoga means execute hoga joki setColor() ko call kerke chala jayega.

  /**
   * Step-by-Step Breakdown:
   *  Button Click Hoti Hai → onClick event trigger hota hai.
   *  Event Handler Execute Hota Hai → onClick={() => setColor('red')}
   *  Callback Function Fire Hota Hai → () => setColor('red') execute hota hai.
   *  setColor('red') Call Hota Hai → State (color) update ho jati hai. 
   *  React Component Re-render Hota Hai → Kyunki state change ho chuki hai.
   *  Naya Background Color Apply Ho Jata Hai → Jo color state me update hua hai.
   * Ek Line Me:
   *  👉 Click → onClick Trigger → Callback Execute → State Update → Re-render → UI Change! 🚀
   */
  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-red-500/50 rounded-xl  " style={{ backgroundColor: "red" }} onClick={() => setColor('red')}>
            Red
          </button>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-green-500/50 rounded-xl  " style={{ backgroundColor: "green" }} onClick={() => setColor('green')}>
            Green
          </button>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-blue-500/50 rounded-xl  " style={{ backgroundColor: "blue" }} onClick={() => setColor('blue')}>
            Blue
          </button>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-indigo-500/50 rounded-xl  " style={{ backgroundColor: "indigo" }} onClick={() => setColor('indigo')}>
            Indigo
          </button>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-orange-500/50 rounded-xl  " style={{ backgroundColor: "orange" }} onClick={() => setColor('orange')}>
            Orange
          </button>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-violet-500/50 rounded-xl  " style={{ backgroundColor: "violet" }} onClick={() => setColor('violet')}>
            Violet
          </button>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-lime-500/50 rounded-xl  " style={{ backgroundColor: "lime" }} onClick={() => setColor('lime')}>
            Lime
          </button>
          <button className="outline-none px-4 py-1 text-white shadow-lg shadow-black-500/50 rounded-xl  " style={{ backgroundColor: "black" }} onClick={() => setColor('black')}>
            Default
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
