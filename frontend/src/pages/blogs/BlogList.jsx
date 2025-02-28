import React, { useContext, useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import { BlogContext } from '../../context/BlogContext';
import Loading from '../../components/Loading'

const BlogList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const{searchTerm} = useContext(BlogContext)
    const [blogs, setBlogs] = useState([]);
    const[showBlogs, setshowBlogs] = useState(6);
    // Fetch blogs from API or local storage
    useEffect(() =>
    {
        fetch('http://localhost:8000/blogs').then(response => response.json())
        .then(data => {
            setBlogs(data.blogs)
            setIsLoading(false)})
        .catch(error=> console.error("Failed to fetch:" + error))
        
    },[]);
    console.log(blogs)

    //filter blogs on the title
    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase())||
        blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //console.log('Blogs:',blogs)
    
    // Load more blogs when user scrolls to the bottom
    const handleLoadMore = () => {
         {
            //setshowBlogs(prevShowBlogs => prevShowBlogs + 3);
            setshowBlogs(prev => prev + 3);

        }
    }
    if(isLoading) return <Loading/>
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
                filteredBlogs.slice(0,showBlogs).map((blog, index) => (
                   <BlogCard key={index} blog={blog}/>
                ))
            }
        </div>
        {
            showBlogs < filteredBlogs.length && (
                <div className='text-center mt-3'>
                    <button onClick={handleLoadMore} className=' bg-secondary hover:bg-secondary/80 text-white rounded-md px-6 py-2 gap-1'>View More</button>
                </div>
            )
        }
    </div>
  )
}

export default BlogList