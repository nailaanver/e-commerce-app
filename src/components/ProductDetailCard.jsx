import React from 'react'
import '../styles/ProductDetails.css'

const ProductDetailCard = (props) => {

      const { image,badge,reviews,description, category, title, price,sku,tags } = props

  return (
    <div className='product-main-div'>
        <div className="product-images">
            <div className="thumbnail-list">
                <img src={image}/>
                <img src={image}/>
                <img src={image}/>
            </div>
            <div className="main-image">
                <img src={image} />
            </div>
        </div>


        <div className="product-info">
            <div className="badge"><h5>{badge}</h5></div>
            <h2 className="product-title">{title}</h2>
            <div className="reviews">{reviews}</div>
            <div className="product-price"><p>{price.currency}{price.old}</p>
                <h5>{price.currency}{price.new}</h5>
            </div>
            <p className="product-description">{description}</p>
            <div className="product-meta">
                <p>{sku}</p>
                <p>{category}</p>
                <p>{tags}</p>
            </div>
        </div>


    </div>
  )
}

export default ProductDetailCard