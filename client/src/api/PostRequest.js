import axios from "axios"

const API = axios.create({baseURL:"http://localhost:3000"})

export const uploadPost = (data )=> API.post('/post',data)
export const getAllPost = ()=> API.get(`/post`)
