
import "./login.css"
import { useState ,useEffect} from "react";
import axios from "axios"
import Swal from "sweetalert2";
import { authenticate, getUser } from "./services/authorize";
import {withRouter} from "react-router-dom"
import {logout} from "./services/authorize"
import './Navbar.css'


const LoginComponent=(props)=>{
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
        axios
        .post(`${process.env.REACT_APP_API}/login`,{username,password})
        .then(response=>{
            //login สำเร็จ
            Swal.fire(
                'แจ้งเตือน',
                'รหัสผ่านเสร็จสิ้น',
                'success'
            )
            authenticate(response,()=>props.history.push("/create"))//ไม่เด้งไปหน้า create ทันที
        }).catch(err=>{
            Swal.fire('แจ้งเตือน',err.response.data.error,'error')
        })
    }
    useEffect(()=>{
        getUser() && props.history.push("/")
    },[])
    return(
        <>
        <header class="header-login">
    <a href="/" class="logo">
        <img src="/img/world_tree-removebg-preview.png" alt=""/>
        <h1 className='Text-navbar'>World Tree</h1>
    </a>
    <nav class="navbar">
        <a href="https://worldtree-b252d.web.app/game.html">เกมส์</a>
        <a href="/creator">จัดทำโดย</a><br />
        <a href="/blogs">ข่าวสารเว็บไซต์</a><br />
        {
          !getUser() && (
            <a href="/login">เข้าสู่ระบบ</a>
          )
        }
        {
        }
        {
          getUser() && (
            <a href="/login" onClick={()=>logout(()=>props.push("/"))}>ออกจากระบบ</a>
          )
        }
    </nav>
    <div class="icon">
        <div class="fas fa-bars" id="menu-btn">
        </div>
    </div>
    </header>
        <div className="Login-page">
        <title>ล็อคอิน - WorldTree</title>
        <div className="container login-container login-box">
            <center><h1 className="Header-login">เข้าสู่ระบบสำหรับ Admin</h1></center>
            <form onSubmit={submitForm}>
                <div className="form-group">
                <center><label className="Text-login">ชื่อผู้ใช้</label></center>
                    <center><input type="text" className="form-control" 
                        value={username} 
                        
                        onChange={inputValue("username")}
                    /></center>
                </div>
                <div className="form-group">
                <center><label className="Text-login">รหัสผ่าน</label></center>
                    <center><input type="password" className="form-control" 
                        value={password}
                        onChange={inputValue("password")}
                    /></center>
                </div>
                <br/>
                <center><input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary"/></center>
            </form>
        </div>
        <footer/>
    </div>
    </>
    )
    
}

export default withRouter(LoginComponent)