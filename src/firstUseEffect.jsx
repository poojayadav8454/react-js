import { useState, useEffect } from 'react';


function Timer() {
  const [count, setCount] = useState(0);
  const [claculate, setcalculate] = useState(0)

  useEffect(() => {
    setcalculate(()=>count*3)
  },[count]);

  return (
  <>
  <h1>count: {count}</h1>
  <button onClick={() => setCount((c) => c + 1)}>click</button>
  <h3>{claculate}</h3>
  </>
  );

}
export default Timer;