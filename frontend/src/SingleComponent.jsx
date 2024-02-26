import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useState , useEffect } from 'react'
import Navbar from './Navbar'
import footer from './footer'
import './blog.css'

const SingleComponent=()=>{
    const[blog,setBlogs]=useState('')
    const{slug} = useParams()

    useEffect(()=>{
        axios
        .get(`${process.env.REACT_APP_API}/blog/${slug}`)
        .then(response=>{
            setBlogs(response.data)
        })
        .catch(err=>alert(err))
        // eslint-disable-next-line
    },[])


    return(
        <div className='p-5 Single'>
            <title>{blog.title} - WorldTree</title>
            <Navbar></Navbar>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <h1 className='Single-header'>{blog.title}</h1><br />
            <div className='pt-3 Single-Content'
                dangerouslySetInnerHTML={{__html:(blog.content)}}
            >
                
            </div>
            <br />
            <p className="text-muted">ผู้เขียน{blog.author}, เผยแพร่ : {new Date(blog.createdAt).toLocaleString()}</p>
            <footer/>
        </div>
    )
    }
export default SingleComponent