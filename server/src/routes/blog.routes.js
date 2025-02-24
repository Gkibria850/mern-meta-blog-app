const express = require('express');
const Blog = require('../models/blog.model');


const router =  express.Router();
//get all blogs
router.get('/',  async(req, res) => {
  try{
    const blogs = await Blog.find().sort({createdAt:-1})
    res.status(200).send({message: "Bloge fetch create successfully",blogs})
    console.log(blogs)
    
  } catch(error){
    console.error("Error create a new blog",error);
      res.status(500).send({message: "Error create Bloge fetch",error});
  }
    
  })
  //get a single blog by id
  router.get('/:id',  async(req, res) => {
    try{
      const {id} = req.params
      // console.log(id)
      const blog = await Blog.findById(req.params.id)
      if(!blog) {
        return res.status(404).send({message: "Blog not found"
        })
      }
      
      res.status(200).send({message: "Blog fetch create successfully",blog})
    } catch(error){
      console.error("Error find a blog by id",error);
      res.status(500).send({message: "Error find a blog by id"})
    }
    
  })

  // post a new blog
  router.post('/add-post', async(req, res) => {
    try{
      const newBlog = new Blog({
        ...req.body
      })
      const blog = await newBlog.save();
      res.status(200).send({message: "Post create Successfully",blog})
    
    }catch(error){
      console.error("Error create a new blog",error);
      res.status(500).send({message: "Error create a new blog"})
    }
     
        
  })

module.exports = router;
