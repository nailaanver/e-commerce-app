import React from 'react'

const ProductCard = (props) => {
  return (
    <div className="product-card">
        <img src={props.image}/>
        <div className="product-card-content">
            <h5>{props.category}</h5>
            <h3>{props.title}</h3>
            <div className="product-price">
                <p>{props.actual_price}</p>
                <h5>{props.selling_price}</h5>
            </div>
        </div>
    </div>
  )
}

export default ProductCard