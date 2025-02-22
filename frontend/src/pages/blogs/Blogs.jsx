import React from 'react'
import Banner from '../../components/Banner'
import BlogList from './BlogList'

const Blogs = () => {
  return (
    <section className='container max-w-7xl px-4 mx-auto text-primary py-3'>
      <Banner/>
      <BlogList/>

    </section>
  )
}

export default Blogs