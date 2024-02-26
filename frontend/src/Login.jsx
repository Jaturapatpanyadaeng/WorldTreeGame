import Navbar from "./Navbar"
import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2";
import { authenicate } from "./services/authorize";

const Login=(props)=>{
    const [state,setState] = useState({
        username:"",
        password:""
    })
    const {username,password} = state
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/login`,{username,password})
        .then(response=>{
            //loginสำเร็จ
            authenicate(response,()=>props.history.push("home"))
        }).catch(err=>{
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
            )
        })
    }

    return(
        <div className="container p-5">
            <title>ล็อคอิน - WorldTree</title>
            <Navbar/>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>เข้าสู่ระบบ | Admin</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" 
                    value={username} 
                    onChange={inputValue("username")}/>
                </div>
            <div className="form-group">
                    <label>Password</label>
                    <input type="password"className="form-control" 
                    value={password}
                    onChange={inputValue("password")}/>
            </div>
            <br />
            <input type="submit" 
            value="เข้าสู่ระบบ" 
            className="btn btn-primary"/>
            </form>

            <Navbar></Navbar>

        </div>
    )
}
export default Login