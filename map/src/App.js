import React from 'react';
const App = () => {
  const arr = ["React Js","Angular Js","Express Js","Node Js"];
  return(
    <div>
     {
       arr.map(
         (value,index) => <li key={index}>{value}</li>
         )
     }
    </div>
  )
}
export default App;