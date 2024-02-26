import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { getUser,getToken } from "./services/authorize";

const FormComponent=()=>{
    const [state,setState] = useState({
        title:"",
        author:getUser()
    })
    const {title,author} = state
    const [content,setContent] = useState('')

    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }
    const submitContent=(event)=>{
        setContent(event)
    }
    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL",process.env.REACT_APP_API)
        axios
        .post(`${process.env.REACT_APP_API}/create`,
        {title,content,author},
        {
            headers:{
                Authorization:`Bearer ${getToken()}`
            }
        }
        )
        .then(response =>{
            Swal.fire(
                'แจ้งเตือน',
                'บันทึกข้อมูลเรียบร้อย',
                'success'
            )
            setState({...state,title:"",author:""})
            setContent("")
        })
        .catch(err=>{
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
            )
        })
    }
    const [blogs,setBlogs] = useState([]);

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
    return(
        <div className="container p-5">
            <Navbar/>
            <br /><br /><br /><br /><br /><br /><br />
            <title>เพิ่มเนื้อหา - WorldTree</title>
            <h1>เขียนบทความ</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label className="Text-label">ชื่อบทความ</label>
                    <input type="text" className="form-control" 
                    value={title} 
                    onChange={inputValue("title")}/>
                </div>
            
            <div className="form-group">
                    <label className="Text-label">เนื้อหาบทความ</label>
                    <ReactQuill 
                        value={content}
                        onChange={submitContent}//ใช้ฟั่งขั่น
                        theme="snow"
                        className="pb-5 mb-3"
                        placeholder="โปรดกรอกรายละเอียดของท่าน"
                        style={{border:'1px solid #666'}}
                    />
            </div>
            <br />
            <input type="submit" 
            value="บันทึกคอมเมนต์" 
            className="btn btn-primary"/>
            </form>

            <div className="container p-5"> 
            <Navbar></Navbar>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {blogs.map((blog,index)=>(
                <div className="row" key={index} style={{borderBottom: '1px solid silver'}}>
                    <div className="col pt-3 pb-2">
                         <Link to={`/blog/${blog.slug}`}>
                         <h2>{blog.title}</h2>
                         </Link>
                        <div>{blog.content.substring(0,250)}</div>
                        <p className="text-muted">ผู้เขียน{blog.author}, เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>

    );
}
export default FormComponent;