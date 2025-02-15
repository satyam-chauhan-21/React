// in this document:
// creating new component and its rules
// fregnent

//--------------------------------------------------------------------------------------------------------//
//                                 creating new component and its rules
//--------------------------------------------------------------------------------------------------------//
// react component kuch nahi bas ek function hai joki kuch return kar raha hoga main.jsx file ke liye.
// yaha ham ek function banayenge joki kuch return kar raha hoga and baad me usko export kar denge. so isse hum other files me use kar paaye
// fisrtly component banane ke kuch rule dekh lete hai,
// conponet ka name hamesh capital hona chahiye.
// vite me component ka extention .jsx hi hona chahiye, normally npx me .js ho to chalta hai.


// // so let's create that funciton,

// function NewComponent(){
//     return(
//         <h1>this is a new component </h1>
//     )
// }
// // ye hamne function means ek component bana liya
// // ab isko export bhi kar dete hai

// export default NewComponent

//--------------------------------------------------------------------------------------------------------//
//                                              Fregment
//--------------------------------------------------------------------------------------------------------//
// fregment samjhne se pehle ek problem samjhte hai ki react ke component means vo jo function jo hamne upper likha hai usme ek problem hai.
// usme ek time per ham ek hi element ko return kar skte hai means,
// if hamne function kuch iss tarah se likh diya to
// function NewComponent(){
//     return(
//         <h1>this is a new component </h1>
//         <h1> hello </h1>
//     )
// }
// ye error dene lagta hai, upper vale code ko uncomment karke dekh lena pata chal jayega

// so iss error ko solve karne ke liye ek solution ye hai ki ham koi element ke andar bohot sare elements likh kar return kar de means ek bada element jaise ki <div> ke andar bohot saare element wrap karke return kar de, so technically hamne ek hi element return kiya hai.
// function NewComponent(){
//     return(
//         <div>
//             <h1>this is a new component </h1>
//             <h1> hello </h1>
//         </div>
//     )
// }
// so ye function ab error nahi dega.

// but in react ham upper vale solution ko thoda modify kar skte hai and jaha par ham <div> ke andar sab elements ko wrap karke return kar rahe hai vaha par ham <div> ki jagah par <> empty tag ke andar bhi return kar skte hai, and issi empty tag ko fregment kehte hai.

function NewComponent(){
    return(
        <>
            <h1>this is a new component </h1>
            <h1> hello </h1>
        </>
    )
}

export default NewComponent