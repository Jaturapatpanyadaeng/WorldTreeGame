import React from 'react'
import { useRef } from "react";
import {withRouter} from "react-router-dom"
import {getUser,logout} from "./services/authorize"
import './Navbar.css'


const Navbar=({history})=> {
  const navRef = useRef();
  
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header class="header">
    <a href="/" class="logo">
        <img src="/img/world_tree-removebg-preview.png" alt=""/>
        <h1 className='Text-navbar'>World Tree</h1>
    </a>
    <nav class="navbar">
        <a href="https://worldtree-b252d.web.app/game.html">เกมส์</a>
        <a href="/creator">จัดทำโดย</a>
        <a href="/blogs">ข่าวสารเว็บไซต์</a>
        {
          !getUser() && (
            <a href="/login">เข้าสู่ระบบ</a>
          )
        }
        {
        }
        {
          getUser() && (
            <a href="/login" onClick={()=>logout(()=>history.push("/"))}>ออกจากระบบ</a>
          )
        }
    </nav>
    <div class="icon">
        <div onClick={showNavbar} class="fas fa-bars" id="menu-btn">
        </div>
    </div>
    </header>
  )
}

export default withRouter(Navbar)