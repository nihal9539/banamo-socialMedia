import React, { useEffect, useState } from 'react'
import { getAllPost } from '../../api/PostRequest'
import Posts from '../../components/Posts/Posts'

const Home = () => {
    const [imageArraay,setImageArraay] =useState([])
    useEffect(()=>{
        getAllPost().then((res)=>{
            setImageArraay(res.data)
        }).catch((err)=>{
            console.log(err);
        })

    },[])
    console.log(imageArraay);
  return (
    <div className=' px-14 p-4 gap-6 sm:ml-64 h-screen overflow-scroll flex flex-col' >
      {imageArraay.map((data)=>{
        return(
            <Posts data={data}/>
        )
      })}
    </div>
  )
}

export default Home
