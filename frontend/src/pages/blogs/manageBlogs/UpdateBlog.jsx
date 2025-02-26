import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../addBlog/InputField';
import TextAreaField from '../addBlog/TextAreaField';
import contactImg from "../../../assets/contact-animation.gif"
import { useNavigate, useParams } from 'react-router-dom';
import axios  from 'axios';

const UpdateBlog = () => {
  const{id} = useParams();
  //console.log(id);
  const navigate = useNavigate();
  const { register, handleSubmit,reset, setValue, formState: { errors } } = useForm();
  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}`);
        console.log(response.data.blog)
        const blog = response.data.blog
        setValue('title', response.data.blog?.title);
        setValue('description', response.data.blog?.description);
        setValue('image', response.data.blog?.image);
        setValue('authorName', response.data.blog?.author.name);
        setValue('authorImage', response.data.blog?.author.image);
      } catch (error) {
        console.error("Failed to fetch single blog",error);
      }
    }
    fetchSingleBlog();

  },[]);
  const onSubmit = async (data) => {
    const blogData = {
        title: data.title,
        description: data.description,
        image: data.image,
        author: {
            name: data.authorName,
            image: data.authorImage
        }
    }
    try{
      const response = await axios.put(`http://localhost:8000/blogs/${id}`, blogData);
      console.log(response.status)
      if(response.status ===200){
        alert("Blog updated successfully")
      }
      reset();
      navigate('/')
    }catch(error){
      console.log("Error updating blog Data",error)
    }

    console.log(blogData)
  };
  return (
    <div className='container max-w-7xl mx-auto px-4 py-24'>
    <h2 className='text-2xl font-bold mb-6'>Update Blog</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
    {/* form */}
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white max-w-3xl p-6 rounded-lg shadow-md space-y-4'>
           <InputField 
           label="Blog Title"
           id="title"
           type="text"
           register = {register("title", { required: true })}
           placeholder="Blog Title"
           />

           {/* text-are */}
           <TextAreaField
            label="Blog Description"
            id="description"
            type="text"
            register = {register("description", { required: true })}
            placeholder="Blog Description"
           />

           <InputField 
           label="Author Name"
           id="authorName"
           type="text"
           placeholder="Author Name"
           register = {register("authorName", { required: true })}
           />
           <InputField 
           label="Author Image URL"
           id="authorImage"
           type="url"
           register = {register("authorImage", { required: true })}
           placeholder="Author Image URL"
           />
           <InputField 
           label="Blog Image URL"
           id="image"
           type="url"
           register = {register("image", { required: true })}
           placeholder="Blog Image URL"
           />
            
            
            <div>
                <button
                    type='submit'
                    className='w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Update</button>
            </div>
        </form>
    </div>
               <div className='space-y-4'>
                            <img src={contactImg} alt="" className='w-44' />
                             <h3 className='text-xl font-semibold '>Contact Information</h3>
                           <p>Feel free to reach out to us through the form or the contact information below:</p>
                          <p><strong>Email:</strong> info@example.com</p>
                          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                          <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
                  </div>

      </div>
</div>
  )
}
export default UpdateBlog