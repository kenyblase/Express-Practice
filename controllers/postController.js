let posts = [
    {id: 1, title:'post one'},
    {id: 2, title:'post two'},
    {id: 3, title:'post three'},
    {id: 4, title:'post four'}
]

// Get all Posts
//Get api/posts
 export const getAllPosts = (req, res, next)=> {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit))
    } else {
        res.status(200).json(posts)
    }
}

// Get single Posts
//Get api/posts/:id
export const getSinglePost = (req, res, next)=> {
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id === id)

    if(!post){
        const error = new Error (`A post with the id of ${id} not found`);
        error.status= 404
        return next(error)
        }
    else{
        res.status(200).json(post)
    }
}

// Create Post
//POST api/posts/:id
export const CreatePost = (req, res, next)=> {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
         const error = new Error ('please include a title');
        error.status= 400
        return next(error)
    } else {
        posts.push(newPost)
        res.status(201).json(posts)
    }
}

// Update Post
//PUT api/posts/:id
export const updatePost = (req, res, next)=> {
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id===id)

   if(!post){
     const error = new Error (`A post with the id of ${id} not found`);
        error.status= 404
        return next(error)
   }else{
        post.title = req.body.title
        res.status(200).json(posts)
    }
}

// delete Post
//DELETE api/posts/:id
export const deletePost = (req, res, next)=> {
    const id = parseInt(req.params.id)
    const post = posts.find((post)=> post.id===id)

   if(!post){
     const error = new Error (`A post with the id of ${id} not found`);
        error.status= 404
        return next(error)
    }
    else{
        posts = posts.filter((post)=> post.id !== id)
        res.status(200).json(posts)
    }
}
