import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"; // outline

import React from 'react'
import '../styles/ShowcasedProdect.css'

const ShowcasedProduct = () => {
    return (
        <section id='showcase'>
            <div className="container showcase-product">
                <div className="content-showcase">
                    <h4>TOP SALE</h4>
                    <h1>Showcased Product</h1>
                </div>
                <div className='showcase-cards'>
                    <div className="showcase-card-1">
                        <img src='/images/bubble-sofa.webp'></img>
                        <h4>Chair Pillow</h4>
                        <div className='star'>
                            <p><FontAwesomeIcon icon={faStarRegular} className='star-icon' /></p>                    <FontAwesomeIcon icon={faStarRegular} />
                            <FontAwesomeIcon icon={faStarRegular} />
                            <FontAwesomeIcon icon={faStarRegular} />
                            <FontAwesomeIcon icon={faStarRegular} />


                        </div>
                        <h4 className='price-color'>USD 200.00</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcasedProduct