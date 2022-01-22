import React,{useEffect,useState} from 'react';


export const App = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      response => response.json()
    ).then(json => setData(json))

  },[])
  return(
    <div>
     
      Hello World!!
  
    </div>
  )
}