import React from 'react'
import '../styles/OurBlog.css'
import { OurBlogData } from '../data/OurBlogData'
import OurBlogCard from './OurBlogCard'

const OurBlog = () => {
  return (
    <>
    <section id='our-blog'>
        <div className="container blog">
            <div className='head-blog'>
                <h4>OUR BLOG</h4>
                <h2>Latest News</h2>
            </div>
            <div className="blog-cards">
                {
                    OurBlogData.map((item) => <OurBlogCard image = {item.image} sub_head = {item.sub_head} title = {item.title} description = {item.description} button = {item.button}/>)
                }
                </div>
            </div>
    </section>
    </>
  )
}

export default OurBlog