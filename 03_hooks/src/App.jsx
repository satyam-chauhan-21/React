// in this document:
// creating counter using useState Hook
// extra about setter function of useState()
// useState()-old
// useState()-detailed

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//------------------------------------------------------------------------------------------------------------//
//                                  creating counter using useState Hook
//------------------------------------------------------------------------------------------------------------//
function App() {
  // let counter = 5 // iss se kaam calculation ho rahi hai UI change nahi ho raha means state change nahi ho rha.
  let [counter, setCounter] = useState(0)
  // useState ek array return karta hai: [currentState, setStateFunction]
  // useState(0) => mein 0 initial state hai.
  // counter => current state hai.
  // setCounter => function hai jo state ko update karta hai. iss function ka name jaroori nahi ki ham setCounter hi rakhe ham kuch bhi rakh skte hai, ye kaam same hi karge. means ham kuch bhi reference de de vo work same hi karge. but "setState" means vo bhi state(variable) ka name hai uske aage "set" likh kar hi reference ka name banana sahi practice hai.

  function addValue(){
    // counter = counter+1
    // console.log(counter); 
    // // ese karne se value to add ho rahi hai joki ham console me dekh skte hai but UI me change nahi ho rahi hai. means counter variable ka UI me state change nahi ho raha hai.
    // because react me UI change karne ke liye React hi responsible hota hai.
    // means react me React, UI ko control karta hai


    // so ab ham Hook ke bare me dekhte hai kyuki hamari problem hook hi solve kar skta hai.
    // Hooks functions hote hain jo humein functional components mein state aur lifecycle features use karne ki permission dete hain.
    // Ye React ke built-in functions hote hain, jaise: useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef etc.
    // so jab bhi ham koi hook ko use kare to uske baare me detail me knowledge le le.


    // so yaha par hamri problem ko useState() hook solve kar skta hai to ham uska use karte hai.
    // useState hook ka use state manage karne ke liye kiya jata hai.
    // useState Returns a stateful value, and a function to update it.
    // useState ek array return karta hai: [currentState, setStateFunction]
    // useState(intialValue) pass karte hai

    // // so ab if hame value change karni hai to ham kuch ese likh skte hai,
    // counter = counter + 1
    // setCounter(counter) // bilkul sahi se work kar raha hai

    // upper ki counter updation ko ham directly bhi likh skte hai,
    // setCounter(counter + 1)

    // ab yaha per ek ye chij dekhne jesi hai ki hamne koi getElementById() ya fir querySelecter() jese kisi method ka use nahi kiya fir bhi  "setCounter()" ne internally jaha jaha par counter ka evaluatedExpression(variable in JSX) hoga usse update kar diya.

    // assignment counter ki value 20 se badi nahi honi chahiye,
    if(counter < 20){
      setCounter(counter + 1)
    }

    //-------------------------------------------------------------------------------------------------------------------------//
    //                                        extra about setter function of useState()
    //-------------------------------------------------------------------------------------------------------------------------//
    // yaha ek extra interview perpose se likha hai so uske pehle ham upper vala comment kar dete hai.
    // to hamare paas ek setCunter() method hai joki state ko update karta hai so what if ham iss method ko ek sath bohot baar call karva de,
    // for example,
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // ab hamne itni baar iss method ko call kar diya hai to hame lagta hai ki counter ki value jitni baar hamne ye method call kari hai utni baar badh jayegi. but esa nahi hota hai.
    // fir bhi counter ki value hamesha 1 se hi badhti hai.
    // to esa iss liye hota hai kyo ki react me execution ke liye ek concept hai "batching" means bohot saare task ko ek sath execute karvana.
    // so iss batching me react update ke baad ham keh skte hai ki fibre ye dekhta hai ki ek jese kitne task ho rahe hai and if vo ekdam same hi hai to vo unn process ko ek hi baar karta hai, so yaha par saare setCounter() method call ek hi kaam kar rahe hai to fibre last vali process ko hi execute karva dega sab process ko individual run karvane ke karta.

    // so if ham chahte hai ki har setCounter() ke call par uski value badhe to uske liye inn useState() ke return kiye gaye setter function ke baare me ek baat or jaan lete hai ki 
    // ye setter function parameter me only value ya fir variable hi nahi lete hai 
    // but ek callback function bhi le skte hai.
    // and inn callback function me hame old state ki value bhi mil skti hai callback ke parameter ke andar
    // ye ek example se samjhte hai,

    // setCounter( prevCounter => prevCounter + 1)


    // ab haya par esa hua ki jab hamne setCounter() ko call kiya to uske andar ke callback function ne uss se "counter" ka reference le liya and usko "prevCounter" ke andar storekava diya.
    /**
     *  ↑↑↑↑ upper vaali line ke liye ChatGPT ne correction diya hai. 
     * ❌ Ye line thodi confusing ho sakti hai:
     * 
     * "so haya par esa hua ki jab hamne setCounter() ko call kiya to uske andar ke callback function ne uss se counter ka reference le liya and usko prevCounter ke andar store kar diya."
     * 
     * ✅ Actual Working:
     * Callback function (prevCounter => prevCounter + 1) React ke andar ka mechanism use karta hai jo previous state ko internally track karta hai.
     * Ye prevCounter koi reference nahi hota, balki React state queue me latest update ka access deta hai.
     * Har setCounter(prevCounter => prevCounter + 1) React ke state queue me add hota hai aur ek ek karke process hota hai, is wajah se sab updates apply hote hain.
     */
    /**
     * DeepSeek se ye thod kaam ki chije mili hai,
     * 4. React Fiber & Batching:
     * Fiber Architecture: React Fiber (React 16+ ka core) updates ko prioritize aur batch karne ke liye use hota hai.
     * Batching Logic: Agar multiple state updates ek hi event loop mein hote hain, React unhe ek saath process karta hai taaki performance improve ho.
     * 
     * 5. Key Takeaways:
     * Stale State: Direct setCounter(counter + 1) mein counter ki value stale (purani) rehti hai.
     * Functional Updates: setCounter(prev => prev + 1) latest state ko pakadta hai.
     * Batching: React performance ke liye updates ko batch karta hai.
     * Best Practice: Jab bhi new state previous state par depend kare, functional updates ka use karein.
     */
    // fir uss prevCounter ke andar 1 add kar diya jis se counter ki value ke bhi 1 add ho jayega.
    // so issi tarah ham jab bhi setCounter ko ese prevCounter ke callback ke sath call karenge tab tab uski value me 1 add hota chala jayega.
    // setCounter( prevCounter => prevCounter + 1)
    // setCounter( prevCounter => prevCounter + 1)
    // setCounter( prevCounter => prevCounter + 1)
    // setCounter( prevCounter => prevCounter + 1)
    // so pehel jab ham setter ke iss tarah "setCounter(counter+1)" call kar rahe the tab vo previous value nahi le pa raha tha and saare calls me vo sab ek hi counter ke reference ko badhane ki koshis kar rahe the but fibre saare ko redundent samjh kar last vale ko ya fir sab me se ek ko hi execute karva deta tha.
    // but callback vale setter me esa nahi ho raha hai. vo previous counter ke pakd bhi raha hai and har baar uski value ko update bhi kar raha hai.
    /**
     * and ye callback vaala issi tarah kaam kar raha hai may be,
     * counter = counter + 1
     * setCounter(counter)
     * counter = counter + 1
     * setCounter(counter)
     * counter = counter + 1
     * setCounter(counter)
     * counter = counter + 1
     * setCounter(counter)
     * counter = counter + 1
     * setCounter(counter)
     * 
     * iss tarah bhi counter ki value har baar update hoti jaa rahi hai means badhti ja rahi hai. kyoki yaha per ham baar baar uss variable ko padk ke usme plus 1 kar rahe hai and fir usse steCounter() ko only set karne ke liye means uska state update karne ke liye de rahe hai.
     * but callback vala setCounter() ye ek sath hi kar de raha hai.
     */

    // so more info about setter of useState me itna hi rakhte hai 😊
    // 📝 Note:
    // Callback approach hamesha use karna chahiye jab tumhe state update karni ho jo previous state pe depend karti ho. 🚀
  }

  function removeValue(){
    // now abhi hame hooks ke baare me pata hai to ham directly uska use karte hai,
    // setCounter(counter - 1)
    
    // ab jo hame assigment mila hai vo karte hai,
    // hamse kaha gaya hai ki counter ki value nagetive me nahi jaani chahiye
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter : {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <button style={{marginLeft: "10px"}} onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App



//------------------------------------------------------------------------------------------------------------//
//                                              useState()-old
//------------------------------------------------------------------------------------------------------------//
/**
 * abhi ham jese normally functions ka use karke React component banate hai,
 * vese pehle "Component" class ka use karke component banate hai. and ye Component class React me se import hoti hai.
 * 
 * jiska ek example niche hai,
 * example_01:
 *    import React, { Component } from "react";
 *    
 *    class MyComponent extends Component {
 *      render() {
 *        return <h1>Hello, Class Component!</h1>;
 *      }
 *    }
 *    
 *    export default MyComponent;
 * 
 * ab isko function component me ese likhenge,
 *    function MyComponent() {
 *      return <h1>Hello, Functional Component!</h1>;
 *    }
 *    
 *    export default MyComponent;
 * 
 * 
 * 
 * 
 * example_02:
 * 
 *    import React, { Component } from "react";
 *    
 *    class Counter extends Component {
 *      constructor(props) {
 *        super(props);
 *        this.state = { count: 0 }; // State initialize ki
 *      }
 *    
 *      increment = () => {
 *        this.setState({ count: this.state.count + 1 }); // State update
 *      };
 *    
 *      render() {
 *        return (
 *          <div>
 *            <p>Count: {this.state.count}</p>
 *            <button onClick={this.increment}>Increment</button>
 *          </div>
 *        );
 *      }
 *    }
 *    
 *    export default Counter;
 * 
 * now isko function component me ese likhenge,
 *    import { useState } from "react";
 *    
 *    function Counter() {
 *      const [count, setCount] = useState(0); // useState Hook ka use
 *    
 *      return (
 *        <div>
 *          <p>Count: {count}</p>
 *          <button onClick={() => setCount(count + 1)}>Increment</button>
 *        </div>
 *      );
 *    }
 *    
 *    export default Counter;
 *    
 * yaha per class vale examples me hamne dekha ki hamne kahi bhi useState() ya fir koi bhi dusre hooks ka use nahi kiya hai
 * vo issliye kyoki,
 *     Hooks will not work in React class components.
 */


//------------------------------------------------------------------------------------------------------------//
//                                              useState()-detailed
//------------------------------------------------------------------------------------------------------------//

/**
 * **`useState` Hook** React ka ek fundamental hook hai jo functional components mein **state** manage karne ke liye use hota hai. Chaliye ise puri detail mein samajhte hain:

---

### **1. `useState` Kya Hai?**
- `useState` ek **React hook** hai jo functional components mein **state** add karne ki permission deta hai.
- Ye ek function hai jo **array** return karta hai, jisme do values hoti hain:
  1. **Current State:** State ki current value.
  2. **State Updater Function:** Ek function jo state ko update karne ke liye use hota hai.

---

### **2. `useState` Ka Syntax:**
```javascript
const [state, setState] = useState(initialState);
```
- **`initialState`:** Ye state ki initial value hai. Ye koi bhi data type ho sakta hai (number, string, array, object, etc.).
- **`state`:** State ki current value.
- **`setState`:** Ek function jo state ko update karne ke liye use hota hai.

---

### **3. `useState` Ka Use Kaise Karein?**

#### **Example 1: Simple Counter**
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state = 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- `count` state ki current value hai.
- `setCount` function `count` ki value ko update karta hai.

#### **Example 2: Input Field**
```javascript
import React, { useState } from 'react';

function InputField() {
  const [inputValue, setInputValue] = useState(''); // Initial state = empty string

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
```
- `inputValue` state input field ki current value store karta hai.
- `setInputValue` function input ki value ko update karta hai.

---

### **4. `useState` Internally Kaise Kaam Karta Hai?**

#### **a. State Storage:**
- React internally ek **state storage** maintain karta hai, jisme har component ke liye alag-alag state store hota hai.
- `useState` hook isi state storage se state ko fetch aur update karta hai.

#### **b. State Update:**
- Jab hum `setState` function call karte hain, toh React component ko **re-render** karta hai aur updated state ko use karta hai.
- React **batching** use karta hai, matlab multiple state updates ko ek saath process karta hai taaki performance improve ho.

#### **c. State Persistence:**
- Functional components mein, `useState` ka state component ke re-renders ke dauraan persist rehta hai.
- Ye state component ke lifecycle ke saath juda hota hai.

---

### **5. `useState` Ke Parameters:**
- `useState` ek **single parameter** leta hai:
  - **`initialState`:** State ki initial value. Ye koi bhi data type ho sakta hai (number, string, array, object, etc.).
  - Example:
    ```javascript
    const [count, setCount] = useState(0); // Number
    const [name, setName] = useState('John'); // String
    const [todos, setTodos] = useState([]); // Array
    const [user, setUser] = useState({ name: 'John', age: 25 }); // Object
    ```

---

### **6. `useState` Kya Return Karta Hai?**
- `useState` ek **array** return karta hai jisme do values hoti hain:
  1. **Current State:** State ki current value.
  2. **State Updater Function:** Ek function jo state ko update karne ke liye use hota hai.
- Example:
  ```javascript
  const [count, setCount] = useState(0);
  ```
  - `count` → Current state (0).
  - `setCount` → Function jo `count` ki value ko update karta hai.

---

### **7. `useState` Ke Best Practices:**

1. **State Ko Directly Mutate Na Karein:**
   - State ko directly change nahi karna chahiye. Always `setState` function ka use karein.
   - Example:
     ```javascript
     // ❌ Galat
     count = count + 1;

     // ✅ Sahi
     setCount(count + 1);
     ```

2. **Functional Updates:**
   - Agar state update current state par depend karta hai, toh functional form ka use karein.
   - Example:
     ```javascript
     setCount((prevCount) => prevCount + 1);
     ```

3. **Complex State Ko Manage Karne Ke Liye `useReducer` Ka Use Karein:**
   - Agar state bahut complex hai, toh `useReducer` ka use karein.

4. **Multiple `useState` Hooks Ka Use Karein:**
   - Agar ek se jyada states manage karne hain, toh alag-alag `useState` hooks ka use karein.
   - Example:
     ```javascript
     const [name, setName] = useState('John');
     const [age, setAge] = useState(25);
     ```

---

### **8. `useState` Ke Advanced Use Cases:**

#### **a. Object State:**
```javascript
const [user, setUser] = useState({ name: 'John', age: 25 });

// Update karte waqt puri state replace nahi karein
setUser({ ...user, age: 30 });
```

#### **b. Array State:**
```javascript
const [todos, setTodos] = useState(['Learn React', 'Build a project']);

// New item add karna
setTodos([...todos, 'Deploy the project']);
```

#### **c. Lazy Initialization:**
- Agar initial state calculate karna expensive hai, toh ek function pass karein.
- Example:
  ```javascript
  const [count, setCount] = useState(() => {
    const initialCount = someExpensiveCalculation();
    return initialCount;
  });
  ```

---

### **9. `useState` Ke Baare Mein Kuch Important Baatein:**
1. **Hooks Ko Sirf Top Level Par Use Karein:**
   - Hooks ko loops, conditions, ya nested functions mein use nahi karna chahiye.
   - Example:
     ```javascript
     if (condition) {
       const [state, setState] = useState(); // ❌ Galat
     }
     ```

2. **Hooks Ko Sirf Functional Components Mein Use Karein:**
   - Hooks ko class components ya regular JavaScript functions mein use nahi karna chahiye.

3. **State Updates Asynchronous Hote Hain:**
   - `setState` function asynchronous hai, matlab state update hone mein thoda time lag sakta hai.

---

### **10. Conclusion:**
- `useState` hook functional components mein state manage karne ka sabse simple aur powerful tarika hai.
- Ye ek array return karta hai jisme current state aur state updater function hota hai.
- `useState` ko use karke hum dynamic aur interactive components bana sakte hain.

Umeed hai ab `useState` hook puri tarah se samajh aa gaya hoga! 😊 Agar aur koi sawal ho, toh pooch sakte hain. 🚀
 */