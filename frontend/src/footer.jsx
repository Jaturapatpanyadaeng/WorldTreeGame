import React from 'react'
import {getUser,logout} from "./services/authorize"
import './home.css'

function footer({history}) {
  return (
    <div className='footer'>
         <div class="share">
        <a href="/" class="fab fa-facebook-f"></a>
        <a href="/" class="fab fa-twitter"></a>
        <a href="/" class="fab fa-line"></a>
        <a href="/" class="fab fa-instagram"></a>
    </div>

    <div class="links">
    <a href="https://worldtree-b252d.web.app/game.html">เกมส์</a>
        <a href="/creator">จัดทำโดย</a>
        <a href="/blogs">ข่าว</a>
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
    </div>
    <div class="credit">creded by | all right reserved</div>
    </div>
  )
}

export default footer