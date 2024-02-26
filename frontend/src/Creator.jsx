import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

function creator() {
  return (
    <div>
      <title>ข้อมูลติดต่อ - WorldTree</title>
        <Navbar/><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <center><h1>ข้อมูลผู้จัดทำ</h1></center><br /><br />
      <div className='Creator-Content'>
         <div className='card p-5'>
            <img src="" alt="" />
            <h1>นายจตุรภัทร ปัญญาแดง</h1>
            <p>รหัสนักศึกษา : 64202040002</p>
          </div>
          <div className='card p-5'>
            <img src="" alt="" />
            <h1>นายวิทวัส ยี่สุ่นเทศ</h1>
            <p>รหัสนักศึกษา : 64202040011</p>
          </div>
          
          <div className='card p-5'>
            <img src="" alt="" />
            <h1>นายณัฐวุฒิ เชื้อไทย</h1>
            <p>รหัสนักศึกษา : 64202040040</p>
          </div>
      </div><br /><br />
      <center><h1>อาจารย์ที่ปรึกษา</h1></center><br /><br />
      <div className='Creator-Content'>
         <div className='card p-5'>
            <img src="" alt="" />
            <h1>นายดอย ศรีนพคุณ</h1>
          </div><br /><br />
      <center><h1>อาจารย์ผู้เห็นชอบโครงงาน</h1></center><br /><br />
      <div className='card p-5'>
            <img src="" alt="" />
            <h1>นายพันธ์ศักดิ์ งามจารุเลิศไมตรี</h1>
          </div><br /><br />
      <center><h1>หัวหน้าแผนกวิชาเทคโนโลยีธุรกิจดิจิทัล</h1></center><br /><br />
      <div className='card p-5'>
            <img src="" alt="" />
            <h1>นายดอย ศรีนพคุณ</h1>
          </div><br /><br />
      </div>
      <Footer/>
    </div>
  )
}

export default creator