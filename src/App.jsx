import { useEffect, useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  let count = useMemo(() => {
  console.log("memo got called");
  let finalCount = 0
  for (let i = 1; i <= inputValue; i++) {
    finalCount = finalCount + i;
  }
  return finalCount;
  }, [inputValue] );         // useMemo reduces number of state variables when compared to useEffect
  

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;