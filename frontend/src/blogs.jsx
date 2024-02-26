import Navbar from "./Navbar";
import axios from 'axios'
import './form.css'
import './App.css'
import Footer from "./footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getUser ,getToken} from "./services/authorize";

function App() {
    const [blogs,setBlogs] = useState([]);

    //ดึงข้อมูลมาจาก db
    const fatchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/blogs`)
        .then(response=>{
                setBlogs(response.data)
            })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fatchData()
    },[])

    //ยืนยันปุ่มลบ
    const confirmDelete=(slug)=>{
        Swal.fire({
            title:"คุณต้องการลบข้อความใช่หรือไม่",
            icon:"warning",
            showCancelButton:true
        }).then((result)=>{
            if(result.isConfirmed){
               deleteBlog(slug)
            }
        })
    }
    const deleteBlog=(slug)=>{
        axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`,
        {
            headers:{
                Authorization:`Bearer ${getToken()}`
            }
        })
        .then(response=>{
            Swal.fire(
                "Deleted!",
                response.data.message,
                "success"
               )
            fatchData()
        }).catch(err=>console.log(err))
        
    }


    return(
        <>
        <div className="container p-5"> 
            <Navbar></Navbar>
            <title>แหล่งความรู้ - WorldTree</title>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1 style={{left:"50%"}} className="text-header">ยินดีต้อนรับสู่ข่าวสารของ WorldTree</h1>
            {
                 getUser() &&(
                    <div>
                        <a className="Text-blogs" href="/create">สร้างเนื้อหา</a>
                    </div>
                 )
            }           
            {blogs.map((blog,index)=>(
                <div className="row" key={index} style={{borderBottom: '1px solid silver'}}>
                    <div className="col pt-3 pb-2">
                         <a href={`/blog/${blog.slug}`}>
                         <h2 className="header-blog">{blog.title}</h2>
                         </a>
                         <div className='pt-3 content-group'
                         dangerouslySetInnerHTML={{__html:(blog.content.substring(0,250)+`..`)}}
                        />
                        <p className="text-muteds">ผู้เขียน{blog.author}, เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
                        {
                            getUser() &&(
                                <div>
                                 <a className="btn btn-outline-success" href={`/blog/edit/${blog.slug}`}>แก้ไขบทความ</a> &nbsp;
                                 <button className="btn btn-outline-danger" onClick={()=>confirmDelete(blog.slug)}>ลบบทความ</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            ))}
            
        </div>
        <Footer/>
    </>
    )
}

export default App;