import axios from 'axios'


export const register = async(value)=>
await axios.post(`${process.env.REACT_USER_API}/register`,{value})

export const login = async(value)=>
await axios.post(`${process.env.REACT_USER_API}/login`,{value})