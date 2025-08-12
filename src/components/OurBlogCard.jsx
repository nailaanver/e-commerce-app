import React from 'react'

const OurBlogCard = (props) => {
  return (
    <div className='blog-card-1'>
        <img src={props.image}/>
            <div className="blog-card-content">
                <p>{props.sub_head}</p>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <button>{props.button}</button>
            </div>
    </div>
 )
}

export default OurBlogCard