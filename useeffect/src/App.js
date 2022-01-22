import React, { useState, useEffect } from  'react';

const App = () =>{
  const[count,setCount] = useState(0);
  useEffect(()=>console.log(count),[count])
  return(
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>Click me to increse count</button>
    </div>
  )
}
export default App;