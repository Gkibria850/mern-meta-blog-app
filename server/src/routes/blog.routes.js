const express = require('express');
const Blog = require('../models/blog.model');
const { getAllBlogs, getBlogById, postNewBlog, updateABlogById, deleteABlogById } = require('../controllers/blog.controllers');


const router =  express.Router();
//get all blogs
router.get('/',  getAllBlogs)
  //get a single blog by id
  router.get('/:id', getBlogById)

  // post a new blog
  router.post('/add-post', postNewBlog)
  //delete a blog
  router.delete('/:id',deleteABlogById )
  
  // PUT use the replace all data
  // PATCH use the parsial data update
//update a blog (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

  router.put('/:id', updateABlogById)

module.exports = router;
