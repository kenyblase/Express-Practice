import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'
const port = process.env.PORT || 9000
const app = express()

//Get Directory Name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Logger Middleware
app.use(logger)

//setup static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/api/posts', posts)


//Error Handler
app.use(notFound)
app.use(errorHandler)


app.listen(port, ()=> console.log(`server is running on port ${port}`))