import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../../animation/Reveal'

const BlogCard = ({blog}) => {
    //console.log(blog)
  return (
   <Reveal>
     <div className='border rounded-lg p-4 bg-white shadow-md'>
         <Link to={`/blogs/${blog?._id}`}>
        <img src={blog.image} alt={blog.title} className='w-full object-cover h-48 mb-4 hover:scale-105 transition-all duration-200 cursor-pointer rounded-md' />
        </Link>
        <div>
            <p className='bg-secondary/5 inline-block text-sm text-secondary px-3 py-1 rounded-md mb-3 '>Technology</p>
            <Link to={`/blog/${blog?._id}`}>
                <h3 className='font-semibold text-xl text-gray-800 hover:text-secondary  transition-all duration-200 mb-2'>{blog.title}</h3>
            </Link>
            <p className='text-gray-500'>{`${blog.description.substring(0,150)}`}...</p>
            <div className='mt-4 flex items-center'>
                <img src={blog.author.image} alt="" className='size-10 rounded-full mr-3'/>
            <div>
                <p className='text-sm text-gray-600'>{blog.author.name}</p>
                <p className='text-sm text-gray-600'>
                    {
                    blog?.date ? <span>{new Date (blog.date).toLocaleDateString()}</span>
                    : <span>{new Date (blog.createdAt).toLocaleDateString()}</span>
                   }
            
                    </p>
            </div>

            </div>
        </div>
    </div>
   </Reveal>
  )
}

export default BlogCard