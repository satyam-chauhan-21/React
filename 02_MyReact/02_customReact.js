// in this document:
// creating custom react
// internal react consvertion


//------------------------------------------------------------------------------------------------//
//                                    creating custom react
//------------------------------------------------------------------------------------------------//
/**
 * issme hum ek custom react means react jo bhi kaam karta hai vese khud se banane ki koshish karenge pura react se same to nahi hoga but uske similar hoga.
 * isko vese hi maan lo jese hamne jab class nahi hoti thi JS me tab function se "Object Cunstructor" ka use karke class banate the vese hi.
 * 
 */

// // so sabse pehle hame html file jisme ham react ke through manipulation ya fir keh skte hai kaam karvana chahte hai usko pakdna hoga.
// const mainRoot = document.getElementById('root')


// customRender() ki body yaha par likhi hai
// function customRender(jisseAddKarnaHaiVo, jissmeAddKarnaHaiVo){
function customRender(reactElement, container){

    /*
        // so sabse pehle hame react ka vo dom element reactElement se lekar create karna padega,
        const domElement = document.createElement(reactElement.type) // yaha se vo element create ho jayega.
        // but ab ye jo hamne element create kiya hai vo create to ho gaya hai but khali hai, means jaise ham HTML me koi element bana dete hai usme kuch likhe bina usse dekh nahi skte na, and jab tak usse koi border na de ya fir usse padding-margin deke color full na kare ham usse dekh nahi skte hai, 
        // vese hi ye element create hua hai so isme hame kuchh insert karna padega
        domElement.innerHTML = reactElement.children // iss se hamne jo text children me likha hai uski vajah se ye dikhne lagega.
        // ab haya par hame pata hai ki vo element ek "a" tag hai to uske attribute bhi set karne padenge.
        domElement.setAttribute('href', reactElement.props.href) // iss setAttribute(joAttributeSetKarnaHoUskaName, AttributeKiValue) // yaha Attribute ki value hame mil rahi hai means dynamic value hai
        domElement.setAttribute('target', reactElement.props.target)
        // so ese hamne ye hamne element bana liya.
        // ab iss element ko hame html tree me add bhi karna hoga uske liye hame "container" mil rha hai jisme hame ye element add karna hai.
        container.appendChild(domElement)
    */

    // upper ke code ko ham aur achhe se likh skte hai aur optimise tarike se so usse comment karte hai.
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // so yaha par ham attributes ko set karne ke liye loop ka use karenge
    // usse i think thoda code kar likhna pade may be, kyo ki upper to hame pata tha ki hamre pass "a" tag hai and uske 2 hi attributes hai, but waht if hamare pass jyada attributes hote to uske liye hi loop ka use karenge.
    for (const prop in reactElement.props) {
        if( prop === 'children') continue; // means childer aaye to skip kar do nahi to attribute set karo
        // but iss if statement ko comment kar de fir bhi code chal rha hai.
        domElement.setAttribute(prop, reactElement.props[prop])
        // mujhe ye samjh me nahi aa raha tha "reactElement.props[prop]" joki mujhe "loopUnderstad.js" file me samjh aa gaya
        // yaha ham props object ki values ko access karna chahte hai.
        // and object ki value access karne ke two type hai object.propName and object['propName']
        // yaha per hamne second type object['propName'] use kiya hai
    }
    container.appendChild(domElement)

    //iske baad hamm customrReact karke react ka ek project create kar ke uske andar kese react kaam karta hai vo dekhenge.
    /**
     * upper vali loop ka execution
     * Samajhne ka sahi tareeka hai, tu code ko properly dry run kar raha hai. Chalo, ek ek step me samajhte hain ki ye loop kaise execute ho raha hai.  

        ---

        ## **Loop Execution Dry Run**  

        Ye raha hamara `reactElement` object:  

        ```js
        const reactElement = {
            type: 'a',
            props: {
                href: 'http://youtube.com',
                target: '_blank'
            },
            children: 'click to visit gooogle'
        };
        ```

        Isme `props` ek object hai jo attributes store kar raha hai.  

        ### **Step-by-step execution:**  

        1️⃣ **Loop Start hota hai:**  

        ```js
        for (const prop in reactElement.props) { }
        ```

        👉 **`reactElement.props` object ke andar do properties hai:**  
        ```js
        {
            href: 'http://youtube.com',
            target: '_blank'
        }
        ```

        ### **Loop Iteration 1 (prop = 'href')**  
        👉 `prop = 'href'`  
        - `if( prop === 'children')` condition false hogi kyunki `prop` ka value `"href"` hai.  
        - Is line ka execution hoga:  

        ```js
        domElement.setAttribute('href', reactElement.props['href'])
        ```
        Equivalent to:
        ```js
        domElement.setAttribute('href', 'http://youtube.com')
        ```
        **Effect:**  
        - DOM me `<a>` tag ke andar `href="http://youtube.com"` set ho gaya.

        ---

        ### **Loop Iteration 2 (prop = 'target')**  
        👉 `prop = 'target'`  
        - `if( prop === 'children')` condition fir se false.  
        - Is line ka execution hoga:

        ```js
        domElement.setAttribute('target', reactElement.props['target'])
        ```
        Equivalent to:
        ```js
        domElement.setAttribute('target', '_blank')
        ```
        **Effect:**  
        - DOM me `<a>` tag ke andar `target="_blank"` bhi set ho gaya.

        ---

        ### **Loop Finish**  
        - Ab `props` object me aur koi key nahi hai, to loop exit ho jayega.  
        - `domElement.appendChild(domElement)` call hone ke baad ye `<a>` element browser ke actual DOM me inject ho jayega.

        ---

        ## **Final Generated HTML**
        Yaha tak ka execution complete hone ke baad jo final HTML DOM me create hoga wo kuch aisa dikhega:

        ```html
        <a href="http://youtube.com" target="_blank">click to visit gooogle</a>
        ```

        Yahi reason hai ki loop ke bina code manually attributes set kar raha tha, but loop lagane se chahe jitne attributes ho, sab dynamically set ho sakte hain.🚀
    */

}

// now ham ek react internally kese elements ko dekhta hai vesa hi ek element banate hai, but upper vale root ko pakd ke rakhan padega.
const reactElement = {
    type: 'a',
    props: {
        href: 'http://youtube.com',
        target: '_blank'
    },
    children: 'click to visit gooogle'
}

const mainRoot = document.getElementById('root')

// now ab ham ye chate hai ki hamre pass ek mathod ho jo iss reactElement ko rendar kar de. means "reactElement" element ko root ke andar add kar de. 
customRender(reactElement, mainRoot) 
// ab ye method hamse 2 chij parameter me legi, first: ki kya inject karna chate ho, second: kaha par inject karna chahte ho
// iss method ko hamne yaha par call pehle karvaya hai isse baad me upper design kiya hai means iski defination likhi hai.


//------------------------------------------------------------------------------------------------//
//                                    internal react consvertion
//------------------------------------------------------------------------------------------------//
/**Bhai, React ka **rendering mechanism** samajhna zaroori hai, kyunki ye hi React ki efficiency ka secret hai. Chalo **step-by-step** samajhte hain.  

---

## 🔥 **1️⃣ React Ka Render Process Kaise Kaam Karta Hai?**
React ka render process mainly **3 cheezon** pe based hota hai:  
✅ **Virtual DOM** (Ek JavaScript object jo UI ka representation hota hai)  
✅ **Diffing Algorithm** (Old vs New Virtual DOM compare karta hai)  
✅ **Efficient DOM Update** (Sirf wahi change karta hai jo zaroori ho)  

---

## ⚙️ **Step-by-Step Rendering Flow**

### **Step 1: Component Render Hota Hai**
Jab koi React component render hota hai, toh wo **React Elements** return karta hai.  

```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
```
🛠️ Ye JSX, **React.createElement()** me convert hota hai:  
```js
const element = React.createElement("h1", null, "Hello, React!");
```
👉 Iska output ek **Virtual DOM Object** hota hai:  
```js
{
  type: "h1",
  props: { children: "Hello, React!" }
}
```

---

### **Step 2: Virtual DOM Ka Creation**
React **Virtual DOM** create karta hai, jo ek **lightweight JavaScript object** hota hai. Ye actual DOM ka ek virtual copy hoti hai.  

```js
{
  type: "div",
  props: {
    children: [
      {
        type: "h1",
        props: { children: "Hello, React!" }
      }
    ]
  }
}
```

---

### **Step 3: Diffing Algorithm (Reconciliation Process)**
React **Old Virtual DOM** aur **New Virtual DOM** ko compare karta hai aur dekhta hai ki kya changes aaye hain.

🔍 **Example:**  
Pehle UI:
```jsx
<h1>Hello, React!</h1>
```
Agar change hota hai:
```jsx
<h1>Hello, World!</h1>
```
👉 React ko pata chalega ki sirf `"React"` ko `"World"` se replace karna hai. **Pura DOM replace nahi hoga!**  

---

### **Step 4: Efficiently Real DOM Update Hota Hai**
React sirf **change hua part** ko update karta hai, isliye ye fast hota hai.  
**React DOM API** ka use karke update hota hai:  

```js
document.createElement("h1");
document.appendChild(...);
document.replaceChild(...);
```

---

## 🚀 **2️⃣ React Render Optimization Techniques**
Performance improve karne ke liye kuch techniques use karni chahiye:

1️⃣ **React.memo()** → Component ka unnecessary re-render rokne ke liye.  
2️⃣ **useCallback() & useMemo()** → Expensive calculations avoid karne ke liye.  
3️⃣ **Avoid Unnecessary State Updates** → Jab zaroori ho tabhi state update karo.  
4️⃣ **Use Key Props in Lists** → List rendering optimize karne ke liye.  

---

## 🎯 **3️⃣ Practical Example (React Render Flow)**
```jsx
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
👉 **Step-by-step samjho:**  
✅ `useState(0)` → React ek initial Virtual DOM banata hai.  
✅ `setCount(count + 1)` → Naya Virtual DOM create hota hai.  
✅ React **Diffing Algorithm** se check karta hai ki sirf `<h1>` ka text change hua hai.  
✅ React sirf `"Count: 0"` ko `"Count: 1"` se replace karega. **Pura DOM nahi badlega!**  

---

## 💡 **React Ka Render Mechanism Ka Summary**
- React **Virtual DOM** ka use karta hai.
- **Old vs New Virtual DOM** compare hota hai.
- **Sirf necessary changes** ko update karta hai.
- Isse **performance fast** aur **efficient** hoti hai.

🔥 **React ki power yahi hai ki wo direct DOM manipulation se bachega aur sirf important cheezein hi update karega!** 🚀 */