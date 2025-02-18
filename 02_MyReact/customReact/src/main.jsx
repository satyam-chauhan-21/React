// in this document:
// yaha per ham react internally kese kaam karta hai vo banayenge.
// creating cunstom component in this file direclty
// creating bable converted(parsed) element in this file direclty
// React.createElement()
// expression(variable) in XML

// import { StrictMode } from 'react' // old: jiske vajah se React.createElement() run nahi ho rha tha
import React, { StrictMode } from 'react' // new: now React.createElement() run ho raha hai.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


//-----------------------------------------------------------------------------------------------------------------//
//                                 creating cunstom component in this file direclty
//-----------------------------------------------------------------------------------------------------------------//
// yaha ham ek App naam se ek component ko inport karva rahe hai joki actual me hai to ek function hi.
// so vo function inport kavane ki jagah par ham usse issi file me create kar dete hai means vo App name se nahi but koi new name se ek function banate hai joki react ke uss App component jesa hi ho.
// function MyApp(){
//   return(
//     <h1>This is From MyApp function </h1>
//   )
// }

// // createRoot(document.getElementById('root')).render(
// //     MyApp() // ese bhi ham isse run karva skte hai but ye sahi practice nahi hai. production me dikkat aa skti hai.
// //     // but iske uper niche jese hamne niche vale me strictMode likha hai vese nahi likh skte error deta hai.
// // )

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//       <MyApp/>
//     </StrictMode>
// )

/**
 * so hamne yaha per ek function means component banaya but vo component ham kahi se import na karke issi file me bana kar usse use kar rahe hai joki same kaam kar raha hai.
 * but yaha ek baat note karne jesi hai ki hamne jab customReact.js banayi thi tab hamne use html se link kiya tha then html ka root element ko pakda tha,
 * but yaha esa kuch nahi kiya yaha to direct ek MyApp component banaya then usko createRoot ke andar likh ke render karva diya. 
 * yaha hamne koi root element nahi pakda ahi but jab vite ne project create kiya tha tab ussi ne html me main.jsx ko link karke uska root element pakd liya tha.
 * 
 * but yaha main baat ye dekhni hai ki customReact.js me hame khud customRender() method banaya tha, hamne khud react internally element ko kese dekhta hai vo banaya tha yaha hame ye kaam karne ki koi jaroorat nahi padi,
 * kyo ki yaha ek middle man(bundler) aata hai "BABLE" vo sab kaam kar deta hai.
 * means yaha per ham MyApp() ke andar se jo <h1> return kar rahe hai uske liye hamne customReact.js me jese reactElement banaya hai vo internally "bable" create karke usse root me add kar deta hai.
*/


//-----------------------------------------------------------------------------------------------------------------//
//                             creating bable converted(parsed) element in this file direclty
//-----------------------------------------------------------------------------------------------------------------//
// hamne upper dekha ki hame component inport karvana pdta tha to vo hamne issi file me hi bana diya,
// noe hame pata hai ki bable internally component ko cunstReact.js ke reactElement jese hi convert(parse) karta hai to ham directly usse hi yaha bana dete hai na, sidha component ka kaam khatam then bable jo converting kar rha hai uska kaam khatam. direct react element hi react ko dete hai.
// so pehle hamne component ka kaam issi file me function bana kar khatam kar diya, then ye component means yaha par function ko bable internally react element me convert karta hai to ham directly vo react element hi bana denge to convert(parse) karne ke liye kuch bachega hi nahi so bable kabhi kaam khatam. so ese karte karte ham ek ek step bacha rahe hai.
// componet -> function -> bable -> reactElement 

// so chalo hame pehle vo reactElement vala object le kar aate hai.
// const reactElement = { // ye nahi chalega uska reason niche likha hai.
//   type: 'a',
//   props: {
//       href: 'http://youtube.com',
//       target: '_blank'
//   },
//   children: 'click to visit gooogle'
// }
// // now ye element ko hame root ke andar atech karvate hai

// const anotherElement = (
//   <a href="http://youtube.com" target='_blank'>YouTube</a>
// )

// createRoot(document.getElementById('root')).render(
//   // reactElement // ye reactElement ek object hai to object kar reference pass kiya taha hai kisi method ke parameter me yaha render ek method hi hai jiske andar hame ye reactElement object ko paas kar rahe hai.

//   // but ese reactElement pass karne par hame koi output nahi mil raha hai 
//   // kyuki cunstomReact.js ke andar hamne apna khud ka customRender method create kiya tha uske andar kya pass karna hai vo ham par tha 
//   // but yaha ye render() method hamne nahi create kari hai ye react ki method hai usne create ki hai to iske parameter me ham jo react ne final kiya hoga vahi pass kar skte. means kisi component ka reference, ya fir jese hamne issi file me conponent banaya tha function se uska reference etc. but usne ese object pass karne ka koi parameter may be na babaya ho.
//   // means iss reander() ke andar value pass karke ka koi proper syntax hai hamne uske hisab se hi value pass karni chahiye.
//   // isiliye ham upper vale reactElement object ki jaha par ek new elemnt bana kar pass karte hai
//   anotherElement
// )

//---------------------------------------------------------------------------------------------------------//
//                                  solution of above problem using AI
//---------------------------------------------------------------------------------------------------------//
/* 
const reactElement = { // ye nahi chalega uska reason niche likha hai.
  type: 'a',
  props: {
      href: 'http://youtube.com',
      target: '_blank'
  },
  children: 'click to visit gooogle'
}

createRoot(document.getElementById('root')).render(
  reactElement
)

iss code nahi work karne ka reason and solution niche hai.
*/
/**
 * Haan, ye error dega kyunki `reactElement` ek **plain JavaScript object hai, React element nahi**. React ka `render()` function **React elements** ko hi render karta hai, jo **React.createElement()** ya JSX se bane hote hain.  

---

### ❌ **Tumhara Approach (Jo Error Dega)**
```jsx
const reactElement = {  
  type: 'a',
  props: {
      href: 'http://youtube.com',
      target: '_blank'
  },
  children: 'click to visit gooogle'
}

createRoot(document.getElementById('root')).render(
  reactElement  // ❌ Ye error dega
);
```
### 🔴 **Error Reason**
- Ye **React element nahi hai, sirf ek normal JS object hai**.  
- `render()` function **React.createElement() se bane objects ya JSX elements ko accept karta hai**.
- Tumhara `reactElement` sirf ek **JS object hai, jo React ko samajh nahi aayega**.

---

### ✅ **Sahi Approach 1 (React.createElement use karke)**
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = React.createElement(
  "a",
  { href: "http://youtube.com", target: "_blank" },
  "Click to visit Google"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);  // ✅ Ab yeh sahi se render hoga
```
☝ **Explanation:**  
- `React.createElement("a", {...props}, children)` ek valid React element banata hai.  
- Ab `render()` function isse accept karega.  

---

### ✅ **Sahi Approach 2 (JSX use karke)**
```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = (
  <a href="http://youtube.com" target="_blank">Click to visit Google</a>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);  // ✅ JSX ko Babel React.createElement() me convert karega
```
☝ **Explanation:**  
- JSX internally **React.createElement() me convert ho jata hai**.  
- Is wajah se ye properly render hoga.  

---

### 🔥 **TL;DR: Tumhare approach me error kyun aayi?**
1. Tum `reactElement` ko manually ek **plain JS object** bana rahe the, lekin React ke `render()` function ko **React element** chahiye hota hai.  
2. React element **React.createElement() ya JSX se banta hai**, sirf manually object banane se kaam nahi hoga.  
3. Agar manually hi JS object banana hai, to tumhe React.createElement() ka format **bilkul accurately** follow karna padega.

😃 
 */


//-----------------------------------------------------------------------------------------------------------------//
//                                            React.createElement()
//-----------------------------------------------------------------------------------------------------------------//
// ab hamne upper dekha ki ham direct render ke andar object pass nahi kar skte hai and uske kuch solution bhi dekhe.
// so ussi solutions me se ek solution ye bhi hai ki ham React.createElement() ja use karke react element banaye and usse render karva de.
// React.createElement() method 3 parameter leta hai,
// first: jo element create karna hai uska name, example: 'a', 'h1' etc.
// second: element ke attributes ka object, example: if 'a' element hai to uske attribute ka object esa hoga {href: "http://youtube.com", target: "_blank"} 
// third: element page par kese dikhega, example: hamne 'a' tag liya hai to usme youtube ki link hai to usse webpage per "YouTube" likh kar dikhayenge to vo nahi to is icon se dikhana hai to vo icon daal denge

// const anotherElement = React.createElement(
//   'a',
//   {href: "http://youtube.com", target: "_blank"},
//   'YouTube'
// )

// createRoot(document.getElementById('root')).render(anotherElement)

// upper import me vite ne pura react import nahi kiya tha isiliye ye code run nahi ho rha tha kyuki iss code me ham React.createElement() ka use kar rahe hai and React ko hi import nahi karenge to ye run nahi hoga isiliye hame manually React import karvana padega.
// import { StrictMode } from 'react' // old: jiske vajah se React.createElement() run nahi ho rha tha
// import React, { StrictMode } from 'react' // new: now React.createElement() run ho raha hai.

// so hame yaha se ye pata chala ki react ke version 17+ ke baad se hamne React import karvane ki jaroot nahi padti hai vite, bable jaise bundler unko internally call karke use kar lete hai.
// but yaha hame uska kaam tha isiliye React ko manually call karne ki jaroot padi.







// now App.jsx ke andar variable kese inject karenge vo kal dekhenge.
//-----------------------------------------------------------------------------------------------------------//
//                                       expression(variable) in XML
//-----------------------------------------------------------------------------------------------------------//

createRoot(document.getElementById('root')).render(
  <App/>
)
// upper vale App component me hamne ek evaluated Expression banaya hai.

/**
 * JSX ke andar {} curly braces ke andar JavaScript expressions likh sakte hain. Par iska ek important rule hai:

📌 Jo bhi expression {} ke andar likha hota hai, React uska result render ke time evaluate karta hai


JSX me {} ke andar likha expression evaluate hota hai, agar vo koi function execute karta hai (console.log), to vo execute ho jata hai.
 */

/**
 * reason ki ham evaluated expression me last result hi likh skte hai koi expression nahi.
 * 
 * hame pata hai ki react element last me JS ke andar ReactElement ke object me convert hote hai.
 * const reactElement = { 
 * type: 'a',
 * props: {
 *     href: 'http://youtube.com',
 *     target: '_blank'
 * },
 * children: 'click to visit gooogle'
 * }
 * 
 * so let suppose hamne abi React.createElement() ka use karke ek react element banaya tha usme hamne tagName, AttributeObject, Children pass kiya tha.
 * so if hamne koi ese expression(variable) banaya hota to usse kese pass karte vo niche code se dekhte hai,
 */

// const nameVariable = ' I am variable or EvaluatedExpression'
//  const reactEle = React.createElement(
//   'a',
//   {href: 'http://youtube.com', target: '_blank'},
//   'YouTube => ',
//   nameVariable // so ye nameVariable me jo value store hai vo YouTube ke baaju me aa jayegi

//   // but yaha dekhne jesi je baat hai ki ye jitni bhi value hamne pass ki hai vo sabko bable reactElement jese object me convert kar dega
//   // and hame pata hai ki ham object ke if-else jese expression, loops etc jesi chije store nahi kar skte instead of inn sab se mile huye final result ko store karte hai.
//   // isiliye hame ye evaluated expression me final result vala variable pass karte hai.
//  )

// createRoot(document.getElementById('root')).render(reactEle)