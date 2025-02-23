const express = require('express');
const Blog = require('../models/blog.model');


const router =  express.Router();

router.get('/', (req, res) => {
    res.send(' Form MERN Meta blog Routes is running....')
  })
  // post a new blog
  router.post('/add-post', async(req, res) => {
  
    const newBlog = new Blog({
      ...req.body
    })
         const blog = await newBlog.save();
          res.status(200).send({message: "Post create Successfully",blog})
        //console.log(newBlog);
        
  })

module.exports = router;
