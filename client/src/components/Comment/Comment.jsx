import React, { useEffect, useState } from 'react'
import { getComments } from '../../api/CommentRequest'

const Comment = ({postId}) => {
    console.log(postId)
    const [ comments,setComments] = useState([])

    useEffect(()=>{
        getComments(postId).then((res)=>{
            setComments(res.data)

        }).catch((err)=>{
            console.log(err);
        })
        
    },[postId])
    return (
        <div>
            <div style={{ background: "#0A0A0A" }} className={`h-24 grid break-all  overflow-scroll rounded-sm bg-gray-800 p-2`}>
                <div className=' space-y-2'>
                   {comments.map((comment)=>(
                     <p> {comment?.comment}</p>
                   
                   ))}
                </div>
            </div>

        </div>
    )
}

export default Comment
