import React from 'react'
import contactImg from "../../../assets/contact-animation.gif"
import InputField from './InputField'
import TextAreaField from './TextAreaField'
import { useForm } from "react-hook-form"
import axios from 'axios'

const AddBlog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) => {
        const blogData= {
            title: data.title,
            description: data.description,
            image: data.image,
            author: {
                name: data.authorName,
                image: data.authorImage
            }
        }
        //console.log(blogData);
        try{
          const response = await axios.post(`http://localhost:8000/blogs/add-post`, blogData)
          console.log(response.data)
              if(response.status === 200){
                alert("Blog added successfully")
                reset()
                } else{
                alert("Error adding blog")
      
              }

                  } catch(error){
                    console.log("Error posting a new blog",error)
                  }
              };
  return (
    <div className='container max-w-7xl mx-auto px-4 py-24'>
        <h2 className='text-2xl font-bold mb-6'>Add New blog</h2>
       
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                       
        
                        <div>
                         <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-6 rounded-lg shadow-md space-y-4'>
                            <InputField label="Blog Title"
                            id="title"
                            type="text"
                            register={register("title", { required: true })}
                            placeholder="Blog Title"/>


                            <TextAreaField
                             label="Blog Description"
                             id="description"
                             type="text"
                             register={register("description", { required: true })}
                             placeholder="Blog Description"/>

                            <InputField label="Author Name"
                            id="authorName"
                            type="text"
                            register={register("authorName", { required: true })}
                            placeholder="Author Name"/>
                            <InputField label="Author Image URL"
                            id="authorImage"
                            type="url"
                            register={register("authorImage", { required: true })}
                            placeholder="Author Image URL"/>
                            <InputField label="Blog image URL"
                            id="image"
                            type="url"
                            register={register("image", { required: true })}
                            placeholder="Blog Image URL"/>
                           
                            <div>
                                <button
                                type='submit'
                                className='w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Send Message</button>
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

export default AddBlog