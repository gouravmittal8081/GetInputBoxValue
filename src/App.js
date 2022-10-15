import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // yha state define karenge ab ki hame kya krna  new set
  let [data, setData] = useState(null);
  // ye button ke liye hai
  let [print, setPrint] = useState(false);

  // ye wala function , input onChange ke liye hai
  function getData(val) {
    // val.target.value yha hame input ki value ko console me pur karega
    console.log(val.target.value);
    setData(val.target.value);
    // ye setPrint us screen ke data ko remove kr dega jese hi ham use input se remove karenge
    setPrint(false);
  }
  return (
    <div className="App">
      <h1>Get input box value</h1>
      {
        //  iska agar 'print' wala true hai to vo 'data' ko put karega agar nhi hai to vo 'null' dega
        print ? <h1>{data}</h1> : null
      }

      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>submit button</button>
    </div>
  );
}

// this is my
