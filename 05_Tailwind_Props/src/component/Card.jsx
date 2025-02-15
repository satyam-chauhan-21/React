// in this document:
// props
// props type (here object)
// props destructuring (means here object destructuring)
// injecting props values in html
// default values of props

// ye vo component hai jise ham jab bhi iss prject me kahi car ki jaroorat padegi tab use karenge.


// koi bhi component banane se pehle  hame uss component me React ko import karna jaroori hota hai.
import React from "react"

// niche vaali line bina object destructuring ke likhi hai uske baad vali me object destructuring ka use hua hai.
// function Card(props) { // iss tarah se if hame koi props milte hai to vo object type e hote hai.
function Card({username = 'devi', salary, obijecty}) { // iss tarah se if hame koi props milte hai to vo object type e hote hai.
    // console.log(props) // output: {} ye hamne empty mil rha hai because hamne props me kuch pass hi kiya hai. 
    // so ab hame bohot saare alag alag type ki arguments bheji hai usko use karte hai iss card me 
    // console.log(props.username, props.salary, props.obijecty);
    // yaha per ek chij notice karne jesi hai ki first calling me hamne only do hi arguments pass kare hai but yaha upper ham 3 ko print karva rahe hai to yaha printing calling and uss calling me jo jo value mil rahi hai vo print ho rahi hai. baaki jo nahi mil rahi hai usme undefined dikha raha hai.
    
    // upper hame props object ke andar sab values mil rahi hai isiliye hame usse "props.value" karke use karna pad raha hai.
    // to uske solution ke liye hame usse argument me hi object destructuring kar skte hai.
    // abhi normally ese likhte hai: function Card(props) {}
    // destructuring ke time per: function Card({userName, salary, obijecty}) {} // yaha par hame pata hai isiliye ye names liye hai but tequenically jo first aata hai vo first me store ho jata hai, second value second me store, and then ese hi chalte jata hai.
    console.log(username, salary);
    

    // niche jaha par hamne username inject kiya hai vaha par if kisi vajah se username nahi mil rha ho to {username = "devi"} iss tarah se ya fir iss tarah se {username || "devi"} ham default value bhi de skte hai.
    // but iss tarah se default values dena sahi practice nahi hai.
    // iss hame koi default value deni ho to usse jab ham parameter me le rahe hai tab hi ek default value assign kar deni chahiye.
    // so hamne niche se isse {username = "devi"} hata kar upper hi default value assign kar dete hai.
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{salary}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}


export default Card


// component function ke parameters ko props kehte hai.
// prps main.jsx me component calling par pass kiye arguments ko component function ke andar use karne ko allow karte hai.