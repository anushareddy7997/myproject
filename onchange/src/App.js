import React, {useState} from 'react';

const App = () =>{
  const [user,setUser]=useState("");
  const changeHandler = (e) => {
    return setUser(e.target.value);
  }
  return(
    <div>
      <center>
        <input type="text" placeholder="username" value={user} name="user" onChange={ changeHandler } /><br />
        {user}
      </center>
    </div>
  )
}
export default App;