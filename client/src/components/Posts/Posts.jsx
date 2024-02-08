import React, { useState } from 'react'
import like from "../../assets/images/like.png"
import liked from "../../assets/images/liked.png"
import { FaRegComment } from 'react-icons/fa6'
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa6";


import { BiCommentDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { IoMdSend } from "react-icons/io";




const Posts = ({ data }) => {
    const [liking, setLiking] = useState(false)
    const [accordian, setAccordian] = useState(false)
    const handleLike = () => {
        setLiking(!liking)
    }
    const handleCommentOpen = () => {
        setAccordian(!accordian)
    }
    return (
        <div style={{ background: "#161618" }} className='w-11/12 p-6 self-center rounded-lg flex flex-col gap-4      justify-center bg-transparent backdrop-blur-lg text-white '>
            <img src={data.image} className='h-96 rounded-md border' width={"100%"} alt="" />
            <div className='flex flex-col gap-1'>

                <div className='flex flex-col w-fit items-start gap-1'>
                    <div className='flex flex-row gap-4 w-fit pl-1 items-center'>
                        <div onClick={handleLike}> {liking ? <FcLike size={28} /> : <FaRegHeart size={28} />} </div>
                        <BiCommentDetail onClick={handleCommentOpen} size={28} />
                        <LuSend size={28} />
                    </div>
                    <p className='text-xs'>5 Likes</p></div>
                <span>{data?.description}</span>

                <div className='w-full flex flex-row px-4'><input type="text" className='w-full border-none bg-transparent p-1 outline-none text-gray-200' placeholder='Add a comment..' /><IoMdSend size={25}/></div>
                {
                    accordian ?
                        <div style={{ background: "#0A0A0A" }} className={`h-24 grid break-all  overflow-scroll rounded bg-gray-800 p-2`}>
                            <div className=' space-y-1'>
                                <p>wsxedrcftgyhuwsxedrcftgyhuwsxedyhuwsxedrcftgyhuwsxedrcftgyhuwsxedrcftgyhuwsxedrcftgyhu</p>
                                <p>wsxedrcftgyhu</p>
                                <p>wsxedrcftgyhu</p>
                            </div>
                        </div>
                        :
                        ""
                }

            </div>
        </div>
    )
}

export default Posts
