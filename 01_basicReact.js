// in this document: ham jo bhi kuch esa sikhenge joki react me nahi likh skte vo yaha likh denge
// installation using npx
// package.json
// installation using vite


// react ki websites jyada SEO friendly nahi hoti hai.
//------------------------------------------------------------------------------------------------//
//                                      installation using npx
//------------------------------------------------------------------------------------------------//
// react ko use karne ke liye usse node.js ke jaise install nahi karna padta hai if hamne node.js install kar rakha hai to niche vali command se hi react project start karke react ka use kar skte hai.
/**
 * dekho react app banane ke defferent ways hai,
 * first is using,
 * "npx create-react-app ProjectName" :  
 *      npx(node package executor)
 *      create-react-app: ye ek utility hai
 *      ProjectName: ye ek folder hota hai jisme hamare project ki sari jaroori files pehle se hi install ho kar aati hai.
 * if ham ye command run karrnge to ProjectName me jo bhi name diya hoga ussi name ka ek folder ban jayega and uske andr bhi bohot folders and files ban jayenge.
 * jaise nodeModule, public, src jaise folders and gitIgnore, package.json jaisi files
 * 
 * but ye tarika use karna sahi nahi rahega memory ke liye kyoki iss se bohot saari bina kaam ki files bhi download ho jati hai.
 * 
 * 
 * lekin fir bhi ham kuch file ki info le hi lete hai jo ki kaam me aayengi.
 */

//------------------------------------------------------------------------------------------------//
//                                         package.json
//------------------------------------------------------------------------------------------------//
/**
 * jaise hi hamne react ka project create kar liya,
 * fir hame iss pakage.json file me saare module ki info mil jayegi. means module ka version and name.
 * 
 * jisme hame dependencies ke andar kuch kaam ki info milti hai joki "vite" me may be different ho skti hai. but,
 * iss dependencies me react and react-dom hame bohot kaam hi module hai naam padh ke pata chal gaya hoga ki kya kaam hai unka.
 * uske and testing ke bhi kuch modules hote hai joki baad me kabhi kaam me aayenge.
 * react-scripts and web-vitals bhi milte hai jiske baar me abhi nahi baad me kabhi ChatGPT kar lena.
 */

// react app ko run karne ke liye package.json me "scripts" object ke andar "start" command hota hai. uss se run kar skte hai.
// command: npm run start // iss se react app start hota hai.
// command: npm run build // iss command se ek folder create hota hai jisme hame CSS, JS files and or bhi kuch kaam ke files milte hai.
// and yahi folder actual me production me saare user ko milta hai.



//------------------------------------------------------------------------------------------------//
//                                      installation using vite
//------------------------------------------------------------------------------------------------//
/**
 * ab dekho ki upper hamne dekha ki npx create-react-app command memory friendly nahi 😊 so isiliye hamne dusre option "vite" ke baare me socha,
 * so vite ek buldeler hai joki react app ko fastly build karne ke liye use hota hai
 * if ham upper vala command use karte hai to usse download hone me hi bohot der lagti hai(faltu ki files bhi download karni hai na usko 😁)
 * but isi place par ham vite ka use karke react app ko fast build kar skte hai.
 * 
 * uske liye command hai: npm create vite@latest
 * jisse run karne par hamse ye command KBC khelta hai then project create karke deta hai.
 * 
 * run hone ke baad ye bhi ek folder structure create karke deta and ye first vaali command se thoda alag hota hai but kaam same hi hota hai.
 * isme nodemodule folder nahi milta hai. 
 * jisse download karne ke liye "npm install" command ka use hota hai. isse download karne baad ham project ko achhe se run kar skte hai.
 * iske package.json me dependencies ke andar only do hi name hote hai, react and react-dom kyoki react app me yahi dono main hote hai.
 * vite vale project ko run karne ke liye,
 * "npm run dev" command ka use hota hai
 */

//------------------------------------------------------------------------------------------------//
//                                         vite vs npx
//------------------------------------------------------------------------------------------------//
// ab dono me major difference to nahi hai but file structure ka hai thoda
// and vite me file ka name .jsx hi dena padta hai if hamne usme JS and HTML sath me likha hai. npx vale me esi koi problem nahi hai.
// dono me hi component ka name capitalize tarike se likhna pdta hai. joki achi practice hai.


//------------------------------------------------------------------------------------------------//
//                                           src
//------------------------------------------------------------------------------------------------//
// most of the work isi oflder ke andar hota hai.
// npx vale me index.js and App.js hi kaam ki files hoti hai. jisme App.js may be ek component hai.
// vite vale me main.jsx and App.jsx kaam hi files hai. jisme App.jsx bhi shayad ek component hoga.



//------------------------------------------------------------------------------------------------//
//                              JS react ke Html me inject kese hota hai
//------------------------------------------------------------------------------------------------//
/**
 * react me JS(jaya per me index.js ki baat kar raha hu), HTML ke andar npx vaali method me to "react-scripts" ke through internally setting karke ho jati hai.
 * 
 * and vite me ye kaam, direct script tag ka use karke ho jata hai, means index.html me hi script tag laga ke uske andar main.jsx ka path de dete hai.
 * 
 */