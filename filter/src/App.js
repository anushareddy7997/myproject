import React from 'react';

const App = () => {
 const arr=[10,20,30,40,50,60,70,80]
  const filtered = arr.filter((num)=>num>40)
  return(
    <div>
      {
      filtered.map(item=><li>{item}</li>)
      }   
    </div>
  );
}
export default App;