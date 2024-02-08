import express from "express"
import { createPost ,deletePost, getAllPost, getPost, likePost, updatePost} from "../controller/PostController.js"
const router = express.Router()


router.post('/',createPost)
router.get('/',getAllPost)
router.get('/:id',getPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
router.put('/:id/like',likePost)

export default router