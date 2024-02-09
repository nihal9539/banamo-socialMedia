import axios from "axios"

const API = axios.create({baseURL:"http://localhost:3000"})

export const uploadPost = (data )=> API.post('/post',data)
export const getAllPost = ()=> API.get(`/post`)
export const getPost = (id)=> API.get(`/post/${id}`)
export const deletePost = (postId,userId)=> API.delete(`/post/${postId}`,userId)
