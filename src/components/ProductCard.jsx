import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {

  const { id,image, category, title, price } = props

  return (

        <Link to={`/product/${id}`} className=" product-card-link">

    <div className="product-card">
              

      <img src={image} />
      <div className="product-card-content">
        <h5>{category}</h5>
        <h3>{title}</h3>
        <div className="product-price">
          <p>{price.currency}{price.actual}</p>
                <h5>{price.currency}{price.selling}</h5>
          
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard