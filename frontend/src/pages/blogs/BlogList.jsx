import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const BlogList = () => {
    const[searchTerm] = useState('');//todo: use blog context
    const [blogs, setBlogs] = useState([]);
    const[showBlogs, setshowBlogs] = useState(6);
    // Fetch blogs from API or local storage
    useEffect(() =>
    {
        fetch('blogs.json').then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error=> console.error("Failed to fetch:" + error))
        
    },[]);

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