const obj = {
    href :  'http://youtube.com',
    target:  '_blank'
}

for (const key in obj) {
    // console.log(key, obj[key]);   
    console.log(key, obj.key);   
}

console.log(obj['href']); // output: http://youtube.com
// console.log(obj.href == obj['href']); // output: true
// console.log(obj.href === obj['href']); // output: true


//--------------------------------------------------------------------------------------------//
//                                      AI Explaination
//--------------------------------------------------------------------------------------------//
/**
 * Problem_01:
 * const obj = {
    href :  'http://youtube.com',
    target:  '_blank'
}

for (const key in obj) {
    console.log(key, obj[key]);   
}

console.log(obj['href']);

ye mujhe samjho ki loop me to hamne bina kisi quote ke object ki key ke through value ko access kar liya but jab normally console.log ke andar quote nahi lagaye to error de raha hai

 */
/**
 * Bohot sahi observation hai! Iska reason **object properties ka access mechanism** hai. Chalo ekdum clear way me samajhte hain.  

---

## 🔹 **Loop ke andar object key se value kaise access ho rahi hai?**
 
```js
const obj = {
    href: 'http://youtube.com',
    target: '_blank'
};

for (const key in obj) {
    console.log(key, obj[key]);
}
```

👉 Yahaan `for...in` loop **dynamically object ke keys** ko iterate karta hai.  

### **Loop Execution:**
| Iteration | `key` ka Value | `obj[key]` ka Value |
|-----------|---------------|----------------------|
| 1️⃣       | `'href'`       | `'http://youtube.com'` |
| 2️⃣       | `'target'`     | `'_blank'` |

Matlab:
```js
console.log('href', obj['href']);  // href http://youtube.com
console.log('target', obj['target']);  // target _blank
```

📌 **Important Point:**  
- `key` ek **string hota hai**, jo **dynamically keys ko store kar raha hai**.  
- Jab hum `obj[key]` likhte hain, to `key` ka actual value (`'href'` ya `'target'`) **bracket notation (`[]`) ke andar pass ho jata hai**, jo valid syntax hai.  

---

## 🔹 **Direct `console.log(obj.href)` me quotes kyun chahiye?**

Agar tum yeh likhoge:

```js
console.log(obj[href]);  
```

🚨 **Error aayega:**  
```
Uncaught ReferenceError: href is not defined
```

👉 **Reason:**  
- `href` ek **variable ki tarah treat ho raha hai**, but tumne `href` naam ka koi variable declare nahi kiya hai.  
- JavaScript samajhta hai ki `href` ek variable hai, jo exist hi nahi karta.  

✅ **Sahi Tarika:**  
```js
console.log(obj['href']);  // ✅ Works fine
console.log(obj.href);     // ✅ Works fine
```

📌 **Key Takeaway:**  
- **Dot Notation (`obj.key`)** tabhi kaam karega jab key **valid variable name ho (no spaces, no special characters except `_`, `$`)**.
- **Bracket Notation (`obj['key']`)** **hamesha work karega**, chahe key me space ho, special character ho, ya dynamic ho.🚀
 */

//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//

/**Problem_02:
 * const obj = {
    href :  'http://youtube.com',
    target:  '_blank'
}

for (const key in obj) {
    console.log(key, obj.key);   
}

console.log(obj['href']);
// loop ke andar obj.key kar diya to ab undefined de raha hai.

*/
/**
 * Haan, bilkul sahi pakda! Agar tum `obj[key]` ki jagah `obj.key` likhoge, to **`undefined` milega**. Chalo, iska **reason dry-run karke samajhte hain**. 🚀  

---

## 🔹 **Code Execution Analysis**
```js
const obj = {
    href: 'http://youtube.com',
    target: '_blank'
};

for (const key in obj) {
    console.log(key, obj.key);  // ❌ Undefined milega
}
```

### **Step-by-Step Execution:**
| Iteration | `key` ka Value | `obj.key` ka Meaning | Output |
|-----------|---------------|----------------------|--------|
| 1️⃣       | `'href'`       | `obj.key` → `obj['key']` (jo exist hi nahi karta) | `undefined` |
| 2️⃣       | `'target'`     | `obj.key` → `obj['key']` (exist nahi karta) | `undefined` |

---

## 🔹 **`obj.key` vs `obj[key]` ka Difference**

### ✅ **`obj[key]` (Correct)**
```js
for (const key in obj) {
    console.log(key, obj[key]); // ✅ Works fine
}
```
✔️ Yahan `key` ek **string value hai** (`'href'` or `'target'`), to `obj[key]` ka matlab hota hai:  
- `obj['href']` → `http://youtube.com`
- `obj['target']` → `_blank`  

---

### ❌ **`obj.key` (Wrong)**
```js
for (const key in obj) {
    console.log(key, obj.key);  // ❌ Undefined
}
```
🚨 **Problem:**  
- JavaScript `obj.key` ko **literally `"key"` property dhundhne** bolega.
- But `obj` ke andar `"key"` naam ka **koi property hi nahi hai**.
- Isliye result **undefined** aayega.

🛑 **Incorrect Assumption:**  
Tum shayad soch rahe ho ki `obj.key` me `key` ki jagah `href` ya `target` aayega, **but aisa nahi hota**.  
- JavaScript `key` ko **ek fixed property name** maan leta hai, **variable nahi**.

---

## 🔹 **Key Takeaways**
| **Notation** | **Kaam karega?** | **Reason** |
|-------------|----------------|------------|
| `obj.key`   | ❌ Nahi karega  | `key` ek **fixed property name** ban jata hai, variable nahi |
| `obj[key]`  | ✅ Kaam karega  | `key` ka value (`'href'` ya `'target'`) dynamically property ko access karega |

---

## 🔹 **Final Working Code**
```js
const obj = {
    href: 'http://youtube.com',
    target: '_blank'
};

for (const key in obj) {
    console.log(key, obj[key]);  // ✅ Correct output
}
```
🔹 **Output:**
```
href http://youtube.com
target _blank
```

🛠 **Always use `obj[key]` inside loops to access dynamic properties!** 😎
 */