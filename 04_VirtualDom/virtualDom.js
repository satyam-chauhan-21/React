// in this document:
// Virtual Dom
// Virtual Dom - DeepSeek
// Virtual Dom, Fibre, Reconciliation - ChatGPT

//-------------------------------------------------------------------------------------------------------------------//
//                                                   Virtual Dom
//-------------------------------------------------------------------------------------------------------------------//
// abhi React me virtual dom ka use nahi hota hai.
// react me createRoot() hi hai jo Browser vale DOM ke jaisa hi ek Dom structure create karta hai. fir main DOM and khud ke DOM ko compare karta hai and if koi change hua hota hai to unhi chij ko change karta hai jo main DOM me nahi hai ya fir update huyi hai.
// normal brower ka DOM koi change hua hota hai to pura DOM fir se re-create karta hai. issi ko ham page re-loading keh skte hai.


// for more on react fibre: https://github.com/acdlite/react-fiber-architecture


//-------------------------------------------------------------------------------------------------------------------//
//                                               Virtual Dom - DeepSeek
//-------------------------------------------------------------------------------------------------------------------//
/**
 * **Virtual DOM** React ka ek core concept hai jo performance optimization ke liye use hota hai. Chaliye ise puri detail mein samajhte hain:

---

### **1. Virtual DOM Kya Hai?**
- **Virtual DOM** ek lightweight copy hai **real DOM** ka.
- Ye ek JavaScript object hai jo real DOM ke structure ko represent karta hai.
- React Virtual DOM ka use karke UI updates ko efficiently handle karta hai.

---

### **2. Virtual DOM Kaise Kaam Karta Hai?**

#### **Steps:**
1. **Initial Render:**
   - Jab app pehli baar load hoti hai, React ek Virtual DOM tree create karta hai.
   - Ye tree real DOM ke structure ko represent karta hai.

2. **State Change:**
   - Jab state ya props change hote hain, React ek naya Virtual DOM tree create karta hai.

3. **Diffing Algorithm:**
   - React purane aur naye Virtual DOM trees ko compare karta hai (**diffing**).
   - Is process ko **reconciliation** kehte hain.

4. **Efficient Updates:**
   - React sirf unhi elements ko real DOM mein update karta hai jo change hue hain.
   - Isse unnecessary re-renders aur expensive DOM operations se bacha jaata hai.

---

### **3. Virtual DOM Ke Fayde:**

1. **Performance Improvement:**
   - Real DOM operations expensive hote hain. Virtual DOM inhe minimize karta hai.

2. **Efficient Updates:**
   - Sirf necessary changes real DOM mein apply hote hain.

3. **Declarative UI:**
   - Developers ko directly DOM manipulate karne ki zarurat nahi hoti. React khud changes handle karta hai.

4. **Cross-Platform:**
   - Virtual DOM ka concept React Native mein bhi use hota hai, jisse mobile apps bhi efficiently update ho sakte hain.

---

### **4. Virtual DOM Ka Example:**

Maano humare paas yeh component hai:

```javascript
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### **Process:**
1. **Initial Render:**
   - Virtual DOM tree create hoga:
     ```html
     <div>
       <p>Count: 0</p>
       <button>Increment</button>
     </div>
     ```

2. **State Change (Button Click):**
   - Naya Virtual DOM tree create hoga:
     ```html
     <div>
       <p>Count: 1</p>
       <button>Increment</button>
     </div>
     ```

3. **Diffing:**
   - React purane aur naye Virtual DOM trees ko compare karega.
   - Sirf `<p>` tag ki text content change hua hai.

4. **Real DOM Update:**
   - React sirf `<p>` tag ki text content ko update karega, pure component ko re-render nahi karega.

---

### **5. Virtual DOM Ab Kyu Kam Use Hota Hai?**

#### **a. Modern Browsers:**
- Modern browsers (Chrome, Firefox, etc.) ne apni performance bahut improve kar li hai.
- Real DOM operations ab itne expensive nahi rahe.

#### **b. New Libraries/Frameworks:**
- **Svelte** jaise frameworks direct DOM updates use karte hain, Virtual DOM ki zarurat nahi hoti.
- **Solid.js** jaise libraries bhi Virtual DOM ko bypass karke directly DOM ko update karte hain.

#### **c. Compiler-Based Approaches:**
- Modern frameworks (e.g., Svelte) compile time par hi efficient code generate kar dete hain, jisse runtime par Virtual DOM ki zarurat nahi hoti.

#### **d. React Fiber:**
- React 16 mein **Fiber architecture** introduce hua, jisme Virtual DOM ka use kam ho gaya.
- Fiber mein **incremental rendering** aur **priority-based updates** hote hain, jisse performance aur bhi improve hoti hai.

---

### **6. Virtual DOM vs Real DOM:**

| Feature               | Virtual DOM                          | Real DOM                              |
|-----------------------|--------------------------------------|---------------------------------------|
| **Speed**             | Faster (Lightweight JavaScript object) | Slower (Heavyweight browser API)      |
| **Updates**           | Efficient (Only necessary changes)   | Expensive (Full re-render)            |
| **Manipulation**      | Easy (React handles it)              | Complex (Manual DOM manipulation)     |
| **Performance**       | Optimized for frequent updates       | Not optimized for frequent updates    |

---

### **7. Virtual DOM Ka Future:**
- **React 18** aur **Concurrent Mode** ke saath, React aur bhi efficient ho gaya hai.
- **Server Components** jaise features se client-side rendering aur Virtual DOM ka use kam ho raha hai.
- Modern frameworks (e.g., Svelte, Solid.js) Virtual DOM ko replace kar rahe hain.

---

### **8. Conclusion:**
- Virtual DOM React ka ek powerful feature hai jo performance optimization ke liye use hota hai.
- Modern browsers aur frameworks ki wajah se Virtual DOM ka use kam ho raha hai, lekin ye abhi bhi React ka ek important part hai.
- Agar aap React use kar rahe hain, toh Virtual DOM ka concept samajhna bahut zaruri hai.😊🚀
 */


//-------------------------------------------------------------------------------------------------------------------//
//                                     Virtual Dom, Fibre, Reconciliation - ChatGPT
//-------------------------------------------------------------------------------------------------------------------//
// iss vale me ek Diff Algorithm ke baare me likha hai -> must read that
/**
 * ### **📌 Virtual DOM, React Fiber & Reconciliation (Detailed Notes)**  

---

## **🔹 1. Virtual DOM (VDOM)**
### **📌 What is Virtual DOM?**  
Virtual DOM ek **lightweight JavaScript object** hai jo **Real DOM ka virtual representation** hai.  
React iska use **fast UI updates** ke liye karta hai, taki direct DOM manipulation avoid ho sake.  

### **📌 Why Virtual DOM?**  
Real DOM manipulations slow hote hain kyunki:  
- **DOM Traversal costly hota hai**  
- **Every change triggers reflow & repaint**  
- **Entire component tree re-render hota hai**  

Virtual DOM ye problems solve karta hai by:  
1. **VDOM me state changes apply hoti hain**  
2. **Old VDOM se new VDOM compare hota hai (diffing algorithm)**  
3. **Jo changes detect hote hain sirf wahi Real DOM me update hote hain (reconciliation process)**  

📌 **Example:**  
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Click: {count}</button>;
}
```
- Har click par **VDOM me update hota hai**, fir diffing ke baad sirf **count update hota hai**, pura DOM reload nahi hota.  

---

## **🔹 2. React Fiber**  
### **📌 What is React Fiber?**  
React Fiber **React ka naya reconciliation engine** hai jo Virtual DOM se bhi fast updates provide karta hai.  
React 16 (2017) ke baad **React Fiber ne VDOM ka replacement ban gaya hai**.  

### **📌 Why React Fiber?**  
- **VDOM ka main issue**: Sab kuch sync me update hota hai, koi priority nahi hoti.  
- **Fiber ka solution**: **Priority-based rendering & asynchronous updates**.  

### **📌 Features of React Fiber**
1. **Incremental Rendering** → Updates **step-by-step process** me hote hain, ek saath nahi.  
2. **Task Prioritization** → Zaroori updates ko pehle execute karta hai, baaki ko delay karta hai.  
3. **Concurrency Mode** → Background me rendering allow karta hai without blocking UI.  
4. **Pausing & Resuming Updates** → Agar koi heavy task aa gaya to React updates pause karke **baad me resume** kar sakta hai.  
5. **Error Handling** → Naye lifecycle methods (`getDerivedStateFromError`, `componentDidCatch`) diye gaye hain.  

📌 **Example of Fiber’s Prioritization:**  
```jsx
function App() {
  const [count, setCount] = useState(0);
  console.log("Rendering...");
  return <button onClick={() => setCount(count + 1)}>Click Me</button>;
}
```
- Fiber **background me work karta hai** taki UI smooth rahe.  
- **Less important tasks** (background data fetching) ko **low priority** par daal sakta hai.  

---

## **🔹 3. Reconciliation Process**  
### **📌 What is Reconciliation?**  
Reconciliation **React ka process hai jo Virtual DOM ko Real DOM ke saath sync karta hai.**  
Matlab React check karega ki **kya update karna hai aur kya same rakhna hai**.  

### **📌 Steps of Reconciliation:**  
1. **React naya Virtual DOM create karta hai** (state change hone par)  
2. **Old VDOM aur New VDOM compare hota hai (Diffing Algorithm)**  
3. **Jo elements change hue hain sirf wahi Real DOM me update hote hain**  

### **📌 Diffing Algorithm (Key Concept)**
React 2 cheezein check karta hai:  
1. **Element Type Change** → Agar type (div → p) change ho to pura re-create hoga.  
2. **Children Change** → Agar list elements change ho rahe hain to **Keys ka use** hota hai taaki minimum re-render ho.  

📌 **Example:**  
```jsx
<ul>
  <li key="1">Apple</li>
  <li key="2">Banana</li>
</ul>
```
Agar **keys nahi hongi** to pura list re-render hoga.  

### **📌 Optimizations in Reconciliation:**
✅ **Shallow Comparison** → Agar same reference hai to skip kar deta hai.  
✅ **Efficient Updates** → Minimum DOM changes apply karta hai.  
✅ **Batching Updates** → Multiple state changes ko combine karta hai.  

---

## **📌 Conclusion (Quick Summary)**
| Concept       | Explanation |
|--------------|------------|
| **Virtual DOM** | React ka **Virtual Copy of DOM** jo changes track karta hai aur optimized updates karta hai. |
| **React Fiber** | **Naya Reconciliation Engine** jo **prioritized & async rendering** allow karta hai. |
| **Reconciliation** | **Old VDOM ko new VDOM ke saath compare karke sirf necessary updates apply karta hai.** |

React ab **Fiber aur Concurrent Mode** ka use karta hai, jisme **Virtual DOM internally optimize ho gaya hai**. 🚀
 */