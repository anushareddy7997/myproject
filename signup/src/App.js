import React,{useState} from 'react';

export const App = () => {
    const[data,setData]= useState({
      username:"",
      email:"",
      password:"",
      confirmPassword:"",
    });
    const{username,email,password,confirmPassword}=data;
    const changeHandler = e => {
      setData({...data,[e.target.name]:e.target.value})
    }
      const submitHandler = e => {
      e.preventDefault();
        if(username.length<=5){
          alert("username must be more than 5 charecters")
        }else if(password !== confirmPassword){
          alert("Passwords are not matching");
        }else{
          console.log(data);
        }
  }
          
  
  return(
    <div>
      <center>
        <form onSubmit={ submitHandler }>
          <input type="text" name="username" value={username} onChange={ changeHandler }/><br />
          <input type="email" name="email" value={email} onChange={ changeHandler }/><br />
          <input type="password" name="password" value={password} onChange={ changeHandler }/><br />
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={ changeHandler }/><br />
          {password !== confirmPassword ?<p>Passwords are not matching</p>:null}
          <input type="submit" value="submit"/>
        </form>
      </center>
    </div>
  )

}