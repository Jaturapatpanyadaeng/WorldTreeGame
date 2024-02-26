import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { getToken } from "./services/authorize";

const EditComponent=()=>{
    const [state,setState] = useState({
        title:"", 
        author:"",
        slug:""
    })
    const{slug} = useParams()
    const {title,author} = state
    const [content,setContent] = useState('')

    const submitContent=(event)=>{
        setContent(event)
    }

    //ดึงข้อมูลบทความที่ต้องการแก้ไข
    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_API}/blog/${slug}`)
        .then(response=>{
            const {title,content,author,slug} = response.data
            setState({...state,title,author,slug})
            setContent(content)
        })
        .catch(err=>alert(err))
        // eslint-disable-next-line
    },[])

    const showUpdateForm=()=>(
        <form onSubmit={submitForm}>
            <title>หน้าแก้ไข - WorldTree</title>
                <div className="form-group">
                    <label>ชื่อบทความ</label>
                    <input type="text" className="form-control" 
                    value={title} 
                    onChange={inputValue("title")}/>
                </div>
            
            <div className="form-group">
                    <label>เนื้อหาบทความ</label>
                    <ReactQuill 
                        value={content}
                        onChange={submitContent}//ใช้ฟั่งขั่น
                        theme="snow"
                        className="pb-5 mb-3"
                        style={{border:'1px solid #666'}}
                    />
            </div>
            <br />
            <input type="submit" 
            value="อัพเดต" 
            className="btn btn-primary"/>
            <a href="/blogs">ยกเลิก</a>
            </form>
    )

    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL",process.env.REACT_APP_API)
        axios
        .put(`${process.env.REACT_APP_API}/blog/${slug}`,{title,content,author},{
            headers:{
                Authorization:`Bearer ${getToken()}`
            }
        })
        .then(response =>{
            Swal.fire(
                'แจ้งเตือน',
                'อัพเดตข้อมูลเรียบร้อย',
                'success'
            )
            const {title,author,slug} = response.data//ใส่ทับกับข้อมูลเดิม
            setState({...state,title,author,slug})
            setContent(content)
        })
        .catch(err=>{
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
            )
        })
    }
    const [Blogs,setBlogs] = useState([]);

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
            <h1>แก้ไขบทความ</h1>
            {showUpdateForm()}
        </div>

    );
}
export default EditComponent;