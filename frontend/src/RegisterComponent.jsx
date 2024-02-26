import React,{ useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

function RegisterComponent() {
  const [value,setValue]= useState({
      username:"",
      password:"",
      email:"",
      firstname:"",
      lastname:""
  })
  const handleChange = (e) =>{
    setValue({
      ...value,
      [e.target.name]:e.target.value,
    })
  }
const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(value)
  if(value.password !== value.password1){
    alert('รหัสผ่านไม่ตรงกัน')
  }else{
        console.log("API URL",process.env.REACT_USER_API)
        axios
        .post(`http://localhost:3002/api/register`,value)
  }
}
  return (
    <div className='p-5'>
        <Navbar/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1>สมัครสมาชิก</h1><br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input type="text"  name='username' onChange={handleChange}/><br /><br />
          <label htmlFor="">Password</label>
          <input type="password"  name='password' onChange={handleChange}/><br /><br />
          <label htmlFor="">Confirm Password</label>
          <input type="password" name='password1' onChange={handleChange}/><br /><br />
          <label htmlFor="">Email</label>
          <input type="email" name='email' onChange={handleChange}/><br /><br />
          <label htmlFor="">Fristname</label>
          <input type="text" name='firstname' onChange={handleChange}/><br /><br />
          <label htmlFor="" >Lastname</label>
          <input type="text"  name='lastname' onChange={handleChange}/><br /><br />
          <br />
          <input type="submit" 
            value="เข้าสู่ระบบ" 
            disabled={value.password.length < 6}
            className="btn btn-primary"/>
            </form>
    </div>
  )
}

export default RegisterComponent