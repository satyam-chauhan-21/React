// in this document:
// useEffect
// useCallback
// useRef


/**
 * project me ham kab, kya and kyu karenge vo yaha likhte hai.
 * sabse pehle apna environment se kar lete hai, jo bhi chahiye v download kar lenge.
 * 
 * hame password generate karvna hai usme lenght, numbers, and sapecial character ese parameters bhi rakhne hai.
 * to inn sabka ek ek state bana lete hai. jis se ham inko track kar paye.
 * 
 * now, ab password bhi to ham generate karvayenge na to usko bhi kahi store karna padega. and usse bhi track karna padega, to uske liye bhi ek useState hook bana lete hai. and uski kuch initial value nahi rakhna chahte hai to usme empty string hi pass kar denge.
 * 
 * ab ham password generate kese karvayenge ye sochte hai. uske liye hamne ek function legega, so vo banate hai.
 * so yaha par ek dikkat hai ki hamne ye passwordGeneratr() function ko har baar run karvana hai, means if lenght me kuch change kiya hai tab, ya fir number or character me se kuch select ya unselect kiya ho tab, ye function run hona hi chahiye.
 * to ye sab functionality ke liye hamare pass useCallback() hook hai joki ek function and dependencyArray as parameter leta hai and iss array me if koi bhi element ki value change hogi to use function ko rerender karega.
 * 
 * ab itna karne ke baad ham apna UI bhi bana lete hai.
 * 
 * yaha hamne input ke andar jo bhi likha hai vo react ki vajah se likha hai means ham react ke andar ese likh skte hai isiliye itne attribute add kiye hai.
 * dono inputs me jo value attribute likha hai, input jisko point karega uske liye likha hai.
 * 
 * range vale input ko bana kar hamne jo expected output tha vo to mil raha hai but vo jo line mili hai vo aage pichhe nahi ho rahi hai, vo problem iss liye ho rahi hai kyoki hamne range input bana kar usse lenght se link nahi kiya hai. to uske solution ke liye ham onChange() ka use karenge.
 * 
 * abhi ham copy function banate hai. and useRef() hook ka use karte hai.
 * so hamne passwordRef karke ek useRef hook bana liya hai jisme ham input filed ka reference store karenge.
 * now button me ek onClick() laga kar usme copy karne vale function ka reference dete hai.
 * 
 * 
 * 
 * iss project e hamne kuch chijo ka overUse kiya hai uske baare me export ki line ke baad kikha hai.
 */


import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pswd = '' // isme ham generated password store karenge
    let str = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*(){}_+-=[]'

    for (let i = 0; i <= length; i++) {
      // let indexOfStr = Math.floor((Math.random() * str.length) + 1) // AI ne +1 ko redendant bataya hai and uss se kabhi kabhi "undefined" bhi aa skta hai.
      let indexOfStr = Math.floor(Math.random() * str.length)
      pswd = pswd + str.charAt(indexOfStr)
    }

    setPassword(pswd)
    // }, [length, numberAllowed, charAllowed, setPassword]) // React ke setState functions stable hote hain aur dependency me nahi dalne chahiye jab tak kisi special case ki zaroorat na ho.
  }, [length, numberAllowed, charAllowed])

  const copyPswdToClip = useCallback(() => {
    // isme bhi hamne useCallback ka use kiya hai pata nahi kyu? baad me find kar lena yrr

    // hamne ye jo Ref hook liya hai vo UI ko thoda achhe se dikhane ke liye liya hai, jisse ham referenced object ya jo bhi ho uss par kuch operation kar paaye.
    passwordRef.current?.select() // ye code password copy karne ke liye jab ham copy button per click karenge tab jobhi password hoga vo select ho jayega. ab isme hamne "?" ye kyu use kiya hai vo pata nahi lekin iske bina bhi kaam ho jata hai


    // now ham ye selection ki renge bhi set ka skte hai.
    // passwordRef.current?.setSelectionRange(0,9) // so ye 8 character tak select kar lega. doesn't metter password ki length 8 se badi ho. lekin yaha par ek catch hai kionly selection hi selected range tak dikhayega but copy pura password karega.
    window.navigator.clipboard.writeText(password)
  })

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black bg-gray-700'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='overflow-hidden w-full flex shadow-lg mb-5 rounded-lg border border-gray-500 bg-white'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPswdToClip} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className=' cursor-pointer'
              // onChange={(e) => {setLenght(e.target.value)}} // e.target.value hamesha string hota hai, to use parseInt() karna best practice hai.
              onChange={(e) => { setLenght(parseInt(e.target.value)) }}
            />
            <label>Lenght: {length}</label>
          </div> 
          <div className="flex items-center gap-x-1">
            <input
              type= "checkbox"
              defaultChecked={numberAllowed}
              id= 'numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type= "checkbox"
              defaultChecked= {charAllowed}
              id= 'characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


/** overused things,
 * 1. useRef Ka Use
 * passwordRef ka use humne sirf password input field ko select karne ke liye kiya hai, jab user "Copy" button click kare.
 * useRef ka use yaha required nahi hai. Tu directly input field ka select() method use kar sakta hai bina useRef ke. Agar tujhe UI element ko directly manipulate karna ho, tab useRef ka use karna sahi hota hai.
 *
 * 2. useCallback Ka Use
 * useCallback ki zaroorat sirf tab hoti hai jab hum ek function ko kisi child component ko pass kar rahe ho aur wo function har re-render pe dobara na ban jaye. generatePassword aur copyPswdToClip functions ko useCallback ke saath wrap kiya gaya hai, jo is case mein overkill hai, kyunki ye functions directly App component ke andar hi use ho rahe hain.
 * Toh yaha useCallback ka use optional hai, bas ye performance optimization ke liye hota hai jab function bahut complex ho ya bohot baar run ho.
 */




//----------------------------------------------------------------------------------------------------------//
//                                          by chatGPT
//----------------------------------------------------------------------------------------------------------//
/**
 * ### 🔥 `useEffect`, `useCallback` aur `useRef` Hook: Ekdam Deep Explanation Hinglish Me

---

## 🔹 **useEffect Hook: Full Detail**

### ❓ **useEffect kya hota hai?**
`useEffect` ek React Hook hai jo **side effects** ko handle karta hai. Side effects matlab:
- API se data fetch karna
- DOM manipulation (document.title change karna, classes add/remove karna)
- Event listeners add/remove karna
- `setTimeout`, `setInterval` jaise timers chalana

Class components me hum `componentDidMount`, `componentDidUpdate`, aur `componentWillUnmount` lifecycle methods use karte the. **Functional components me inka replacement `useEffect` hai**.

---

### 🔹 **useEffect ka kaam kaise hota hai?**
`useEffect` render ke **baad** chalta hai. Ye **2 parameters** leta hai:

```jsx
useEffect(callback, [dependencies])
```

1. **callback** – Function jo effect ko perform karega
2. **dependencies** – Ye batata hai ki effect **kab re-run hoga**

---

### 🔥 **useEffect ke 4 Main Use Cases**

### ✅ **1. Sirf Ek Baar Chale (componentDidMount Alternative)**
Agar hum **empty dependency array** dete hain, to `useEffect` sirf **component mount hone par** chalega:

```jsx
useEffect(() => {
    console.log("Component mounted");
}, []);  // Empty dependency array -> Sirf ek baar chalega
```

**Kab Use Karein?**
- API se data fetch karna
- Event listeners setup karna
- DOM manipulate karna

---

### ✅ **2. State/Props Change Hone Par Chale (componentDidUpdate Alternative)**
Agar hum kisi **dependency** ko array me daal dete hain, to jab bhi wo change hogi, effect re-run hoga:

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
    console.log(`Count badal gaya: ${count}`);
}, [count]); // Jab `count` change hoga tab chalega
```

**Kab Use Karein?**
- Jab API ko state change hone par re-fetch karna ho
- Jab animation ya log update karna ho

---

### ✅ **3. Cleanup Karna Jab Component Unmount Ho (componentWillUnmount Alternative)**
Agar `useEffect` ek function return kare, to React **component unmount hone par usse call karega**:

```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log("Timer running...");
    }, 1000);

    return () => {
        clearInterval(timer);
        console.log("Cleanup: Timer stopped");
    };
}, []);
```

**Kab Use Karein?**
- Event listeners hataane ke liye
- API subscriptions close karne ke liye
- Timers (`setTimeout`, `setInterval`) clear karne ke liye

---

### ✅ **4. Har Render Ke Baad Chale**
Agar hum **dependency array nahi dete**, to `useEffect` har render ke baad chalega:

```jsx
useEffect(() => {
    console.log("Component re-render hua");
});
```

🚨 **Warning:** Ye optimize nahi hai, **har render pe chalega**, jo slow kar sakta hai.

---

### 🔹 **React useEffect Kaise Work Karta Hai Internally?**
React ke andar **Fiber Reconciliation Algorithm** chalta hai jo ye steps follow karta hai:

1. **Component render hota hai.**
2. **useEffect run hota hai** agar dependencies change hui hain ya nahi di hain.
3. **Cleanup function run hota hai** agar return kiya gaya hai.
4. **Agar state update hoti hai, component dobara render hota hai** aur process repeat hoti hai.

---

## 🔥 `useCallback` Hook: Full Detail

### ❓ **useCallback kya hai?**
`useCallback` ek React Hook hai jo **functions ko memoize** karta hai. Iska matlab hai ki agar function unnecessary baar create ho raha hai, to `useCallback` usi function ka **same reference** return karega.

---

### ❓ **Problem Without useCallback (Unnecessary Function Creation)**
```jsx
const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("Button clicked!");
    };

    return <Child onClick={handleClick} />;
};
```
⚠️ **Issue:** Har render ke saath `handleClick` function **naya create ho raha hai**, jisse **Child component unnecessary re-render hota hai**.

---

### ✅ **Solution: useCallback Se Function Memoize Karna**
```jsx
const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []); // Empty dependency → Function same hi rahega

    return <Child onClick={handleClick} />;
};
```

✅ **Ab `handleClick` sirf tabhi recreate hoga jab dependencies change hongi.**
❌ Pehle har render pe `handleClick` naya ban raha tha.

**Kab Use Karein?**
- **Functions as props pass karte time**
- **Expensive calculations wale functions optimize karne ke liye**

---

## 🔥 `useRef` Hook: Full Detail

### ❓ **useRef kya hai?**
- **Ek mutable object create karta hai** jo renders me persist karta hai.
- **State ke unlike, iska update render trigger nahi karta.**
- **DOM elements ko reference karne ke liye bhi use hota hai.**

---

### ✅ **1. DOM Elements Ko Access Karna**
```jsx
const InputFocus = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
};
```
✅ **Jab `focusInput()` call hota hai, `inputRef.current.focus()` input field ko focus kar deta hai.**

---

### ✅ **2. Previous State Ko Store Karna**
```jsx
const Counter = () => {
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    return (
        <>
            <h1>Current: {count}</h1>
            <h2>Previous: {prevCount.current}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};
```
✅ **Har render ke saath, `prevCount.current` purani state store kar raha hai bina extra re-render trigger kiye.**

---

## 🎯 **Final Summary**
| Hook        | Purpose |
|------------|---------------------------------------------------|
| **useEffect**  | Side effects handle karna (API, events, DOM manipulation) |
| **useCallback** | Functions ko unnecessary re-creation se bachana |
| **useRef**  | DOM elements ya mutable variables store karna bina re-render ke |

---

## 🎯 **Kab Kaunsa Hook Use Karna Chahiye?**
- **Side Effects ke liye** → `useEffect`
- **Functions ko optimize karne ke liye** → `useCallback`
- **DOM elements ya previous state store karne ke liye** → `useRef`

---

🔥 🚀
*/



//----------------------------------------------------------------------------------------------------------//
//                                          by deepseek
//----------------------------------------------------------------------------------------------------------//
/**
 * **React Hooks Deep Explanation in Hinglish**  

### 1. **`useEffect` Hook**  

#### **Kya hai useEffect?**  
`useEffect` ek React Hook hai jo functional components mein **side effects** ko handle karne ke liye use hota hai. Side effects jaise:  
- API calls (data fetching)  
- Event listeners add/remove karna  
- DOM ko manually update karna  
- Timer set karna (setInterval/setTimeout)  

#### **Kyu use karte hai?**  
- Functional components mein lifecycle methods (like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) nahi hote. `useEffect` in sabko ek saath handle karta hai.  
- **Rendering phase** ke baad side effects ko run karne ke liye.  

---

#### **Parameters kya accept karta hai?**  
`useEffect` do parameters leta hai:  
1. **Effect Function**: Ye woh function hai jo side effects ko run karega.  
2. **Dependency Array (optional)**: Yeh array batata hai ki effect kab re-run hoga.  

```javascript
useEffect(() => {
  // Effect Logic here
  return () => { /* Cleanup Logic  }; // Cleanup function (optional)
}, [dependencies]);
```

**Dependency Array ke hisab se behavior**:  
- **No Dependency Array**: Har render ke baad effect run hoga.  
  ```javascript
  useEffect(() => { ... }); // Runs on every re-render
  ```
- **Empty Array (`[]`)**: Sirf **first render** ke baad run hoga (mounting phase).  
  ```javascript
  useEffect(() => { ... }, []); // componentDidMount ki tarah
  ```
- **With Dependencies**: Jab bhi dependencies change hoti hai, effect re-run hoga.  
  ```javascript
  useEffect(() => { ... }, [count]); // Runs when `count` changes
  ```

---

#### **Kaise kaam karta hai?**  
- **Mounting Phase**: Pehli baar component render hone ke baad effect function run hota hai.  
- **Updating Phase**: Agar dependencies change hui, pehle cleanup function (if any) run hoga, phir naya effect.  
- **Unmounting Phase**: Component DOM se hatate waqt cleanup function run hota hai.  

**Example with Cleanup**:  
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running!");
  }, 1000);

  // Cleanup function: Component unmount pe ya fir next effect se pehle chalega
  return () => clearInterval(timer);
}, []);
```

---

#### **Kab use karna chahiye?**  
- API se data fetch karne ke liye.  
- Event listeners (click, scroll) add/remove karne ke liye.  
- Direct DOM manipulations (e.g., focus on input).  
- Subscriptions (WebSocket, Firebase) manage karne ke liye.  

**Common Mistakes**:  
- **Missing Dependencies**: Agar effect mein koi state/prop use ho, toh use dependencies array mein add karo.  
- **Infinite Loops**: Agar effect mein state update karo aur usko dependency mein na dalo, toh loop ban jayegi.  

---

### 2. **`useCallback` Hook**  

#### **Kya hai useCallback?**  
`useCallback` ek memoized function return karta hai. Yeh performance optimization ke liye use hota hai, especially jab functions ko child components mein pass karte ho.  

#### **Kyu use karte hai?**  
- **Unnecessary Re-renders rokne ke liye**: Agar parent component re-render hota hai, toh child components ko unnecessary re-render se bachane ke liye.  
- **Memoized functions** ki reference same rakhta hai, jab tak dependencies change nahi hoti.  

---

#### **Syntax aur Parameters**  
```javascript
const memoizedFunction = useCallback(() => {
  // Function logic
}, [dependencies]);
```  
- **Dependencies Array**: Agar koi value change hui, tabhi naya function banega.  

---

#### **Kaise kaam karta hai?**  
- **Memoization**: Har baar re-render pe, `useCallback` check karta hai ki dependencies change hui hai ya nahi. Agar nahi, toh purani function reference return karta hai.  

**Example without useCallback**:  
```javascript
const handleClick = () => { ... }; // Har render pe naya function banta hai
```  
**With useCallback**:  
```javascript
const handleClick = useCallback(() => { ... }, []); // Same function reference
```

---

#### **Kab use karna chahiye?**  
- Child components ko memoized functions pass karte waqt (especially with `React.memo`).  
- Agar function ko dependency array mein use kiya ho (like in `useEffect`).  

**Example with Child Component**:  
```javascript
const Child = React.memo(({ onClick }) => { ... });

function Parent() {
  const handleClick = useCallback(() => { ... }, []);
  return <Child onClick={handleClick} />;
}
```  

---

### 3. **`useRef` Hook**  

#### **Kya hai useRef?**  
`useRef` ek mutable object return karta hai jiska `.current` property kisi bhi value ko hold kar sakta hai. DOM elements ko directly access karne ke liye bhi use hota hai.  

#### **Kyu use karte hai?**  
- **DOM Access**: Input fields ko focus karna, element ki height/width get karna.  
- **Mutable Values**: Aisi values store karna jo re-render pe preserve rahe (e.g., previous state, timer IDs).  

---

#### **Syntax aur Parameters**  
```javascript
const ref = useRef(initialValue);
// Access value using ref.current
```  

---

#### **Kaise kaam karta hai?**  
- **Persists Across Renders**: `ref.current` ki value re-renders ke beech mein preserve rahti hai.  
- **No Re-render Trigger**: `ref.current` update karne se component re-render nahi hota.  

**Example 1: DOM Access**  
```javascript
function TextInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // Mount pe input focus
  }, []);

  return <input ref={inputRef} />;
}
```  

**Example 2: Mutable Value**  
```javascript
function Timer() {
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => { ... }, 1000);
    return () => clearInterval(intervalRef.current); // Cleanup
  }, []);
}
```  

---

#### **Kab use karna chahiye?**  
- Direct DOM manipulations ke liye.  
- Previous state ya props ko track karne ke liye.  
- Timer IDs, animation frames ko store karne ke liye.  

**Note**: `useRef` ki value change hone pe component re-render nahi hota. Agar UI update karna hai, toh `useState` use karo.  

---

### **Final Tips**  
- **`useEffect` vs `useLayoutEffect`**: `useLayoutEffect` ka use tab karo jab DOM mutations ko measure karna ho aur UI update user ko dikhne se pehle karna ho.  
- **`useCallback` vs `useMemo`**: `useMemo` memoized **value** return karta hai, jabki `useCallback` memoized **function** return karta hai.  
- **`useRef` for Previous State**:  
  ```javascript
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count; // Store current count
  });
  const prevCount = prevCountRef.current; 😊
 */