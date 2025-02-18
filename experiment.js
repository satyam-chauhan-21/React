// state ka means may be variable hota hoga.
// ham normal JS me bhi useState ka use kar skte hai ye check kar raha hu.

const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
  console.log(count); // Yaha old value aayegi!
};

// ye upper vala code "ReferenceError: useState is not defined" error de raha hai. jisse pata chalta hai ki ham JS me directly useState ka use nahi kar skte hai.
// if hame use karna ho to customState bana kar dekh skte hai jaise hamne customReact.js banaya tha vese.