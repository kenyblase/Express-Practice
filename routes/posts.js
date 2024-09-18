import express from 'express'
import { CreatePost, deletePost, getAllPosts, getSinglePost, updatePost } from '../controllers/postController.js'
const router = express.Router()


// Get All Posts
router.get('/', getAllPosts)

//Get Single Post
router.get('/:id', getSinglePost )

// Create a New Post
router.post('/', CreatePost)

// Update Post 

router.put('/:id', updatePost)

//Delete Post
router.delete('/:id', deletePost)


export default router