import React, { useEffect, useState } from 'react'
import { getAllPost } from '../../api/PostRequest'
import Posts from '../../components/Posts/Posts'

const Home = () => {
    const [post,setPost] =useState([])
    useEffect(()=>{
        getAllPost().then((res)=>{
            setPost(res.data)
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

    },[])
  return (
    <div className=' px-14 p-4 gap-6 sm:ml-64 h-screen overflow-scroll flex flex-col' >
      {post.map((data,index)=>{
        return(
            <Posts key={index} data={data}/>
        )
      })}
    </div>
  )
}

export default Home
