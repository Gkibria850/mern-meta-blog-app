const Blog = require("../models/blog.model");

//get all blogs
const getAllBlogs = async(req, res) => {
    try{
      const blogs = await Blog.find().sort({createdAt:-1})
      res.status(200).send({message: "Bloge fetch create successfully",blogs})
      console.log(blogs)
      
    } catch(error){
      console.error("Error create a new blog",error);
        res.status(500).send({message: "Error create Bloge fetch",error});
    }
    }
// get a single blog by id
  const getBlogById = async(req, res) => {
    try{
      const {id} = req.params;
      // console.log(id)
      const blog = await Blog.findById(id);

      if(!blog) {
        return res.status(404).send({message: "Blog not found"
        })
      }
      
      res.status(200).send({message: "Blog fetch create successfully",blog})
    } catch(error){
      console.error("Error find a blog by id",error);
      res.status(500).send({message: "Error find a blog by id"})
    }
    
  }
  // post a new blog
  const postNewBlog = async(req, res) => {
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
     
        
  }
// delete a blog
  const deleteABlogById = async(req, res) => {
    try{
      const {id} = req.params
      const deletedBlog = await Blog.findByIdAndDelete(id);

      if(!deletedBlog) {
        return res.status(404).send({message: "Blog not found"
        })
      }
      
      res.status(200).send({message: "Blog deleted successfully", blog: deletedBlog})
    } catch(error){
      console.error("Error delete a blog",error);
      res.status(500).send({message: "Error delete a blog"})
    }
    
  }
// update a blog
  const updateABlogById = async(req, res) => {
    try{
      const {id} = req.params;
      const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {new: true});
      
      if(!updatedBlog) {
        return res.status(404).send({message: "Blog not found"
        })
      }
      
      res.status(200).send({message: "Blog updated successfully", blog: updatedBlog})
    } catch(error){
      console.error("Error update a blog",error);
      res.status(500).send({message: "Error update a blog"})
    }
    
  }

  module.exports ={
    getAllBlogs,
    getBlogById,
    postNewBlog,
    deleteABlogById,
    updateABlogById,
  }  