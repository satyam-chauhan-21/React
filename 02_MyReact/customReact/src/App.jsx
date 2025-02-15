// in this document:
// expression(variable) in XML

import { useState } from 'react'
import './App.css'

function App() {
  const name = 'kaali'
  return (
    <>
      <h1>My name is {name}</h1> 
      <h1>My name is {1+2}</h1>
      <h1>My name is {true ? console.log('1') : console.log('2')}</h1>
    </>
  )
}

export default App

// ab yaha per hamne ek variable create kiya "name" then usko {} ka use karke XML me use kiya.
// so ese hi XML ke andar ham variable use kar skte hai. and isse ham expression kehte hai. and react me evaluated expression kehte hai.
// evaluated ka means hai ki ham iss me last value hi rakh skte hai means yaha per ham ese,
// <h1>My name is {if(1>0) hello}</h1> nahi likh skte hai.
/**
 * uske reason ye hai ki last me JSX, JS me hi convert ho raha hai and ese ham variable bana denge to vo kaha par jayega ?
 * ek example se smjhte hai, customReact.js ke andar hamne ek reactElement banaya tha 
 * const reactElement = { 
  type: 'a',
  props: {
      href: 'http://youtube.com',
      target: '_blank'
  },
  children: 'click to visit gooogle'
}

iske aage ki kahani ham main.jsx me dekhenge.
 */