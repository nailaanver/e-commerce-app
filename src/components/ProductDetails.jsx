
import React, { useState } from "react";
import "../styles/ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { Product } from "./Product";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [] = useState()

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (

   


    <div className="product-details-container container">
      {/* Left - Product Images */}
      <div className="product-main-div">
        <div className="product-images">
          <div className="thumbnail-list">
            <img src="/images/product1.webp" alt="thumb1" />
            <img src="/images/product2.webp" alt="thumb2" />
            <img src="/images/product3.webp" alt="thumb3" />
          </div>
          <div className="main-image">
            <img src="/images/product5.webp" alt="main sofa" />
          </div>
        </div>


       








        {/* Right - Product Info */}
        <div className="product-info">
          <div className="badge">CONSTRUCTION</div>
          <h2 className="product-title">Alexander Roll Arm Sofa</h2>
          <div className="reviews">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />

            (10 Reviews)</div>

          <div className="product-price">
            <span className="old-price">$30.35</span>
            <span className="new-price">$19.25</span>
          </div>

          <p className="product-description">
            Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is
            a completely modern design and you feel comfortable to put on this
            hijab. Buy it at the best price.
          </p>

          {/* Quantity + Add to cart */}
          <div className="cart-actions">
            <div className="quantity-selector">
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button className="add-to-cart">Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
            <button className="wishlist"><FontAwesomeIcon icon={faHeart} /></button>
          </div>

          {/* Product Details */}
          <div className="product-meta">
            <p>
              <strong>SKU:</strong> BO1DOMX8SJ
            </p>
            <p>
              <strong>Categories:</strong> Milk, Cream, Fermented
            </p>
            <p>
              <strong>Tags:</strong> Cheese, Custard, Frozen
            </p>
          </div>

          {/* Social Share */}
          <div className="social-share">
            <span>Share:</span>
            <button><FontAwesomeIcon className='foot-icon-style' icon={faSquareTwitter} /></button>
            <button><FontAwesomeIcon icon={faFacebook} /></button>
            <button><FontAwesomeIcon icon={faLinkedin} /></button>
            <button><FontAwesomeIcon icon={faInstagram} /></button>
          </div>
        </div>
      </div>


      {/*  Tabs Section */}
      <div className="tabs-section">
        <div className="tabs">
          <button
            className={activeTab === "description" ? "tab active" : "tab"}
            onClick={() => setActiveTab("description")}
          >
            DESCRIPTION
          </button>
          <button
            className={activeTab === "info" ? "tab active" : "tab"}
            onClick={() => setActiveTab("info")}
          >
            ADDITIONAL INFORMATION
          </button>
          <button
            className={activeTab === "reviews" ? "tab active" : "tab"}
            onClick={() => setActiveTab("reviews")}
          >
            REVIEWS (3)
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <p>
              In marketing a product is an object or system made available for consumer use it is anything that can be offered to a market to the desire or need of a retailing, products are often referred to as merchandise, and in manufacturing, products are bought as materials and then sold as finished goods. A service regarded to as a type of product. Commodities are usually raw materials metals and agricultural products, but a commodity can also be anything wide the open market. In project management, the formal definition of the project deliverables

              A product can be classified as tangible or intangible. A tangible product is a physical object that can be perceived by touch building, vehicle, gadget, An intangible product is a product that can only be perceived indirectly such as an insurance policy. can be broadly classified under intangible be durable or non durable. A product line is "a group of products that are closely either because they function in a similar manner, are sold to the same customergroups.
            </p>
          )}
          {activeTab === "info" && (
            <div className="additional-info">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Weight</strong></td>
                    <td>2 lbs</td>
                  </tr>
                  <tr>
                    <td><strong>Dimensions</strong></td>
                    <td>12 x 16 x 19 in</td>
                  </tr>
                  <tr>
                    <td><strong>Product</strong></td>
                    {/* <td><a href="https://www.rag-bone.com">Purchase this product on rag-bone.com</a></td> */}
                    <td>Purchase this product on rag-bone.com</td>
                  </tr>
                  <tr>
                    <td><strong>Color</strong></td>
                    <td>Gray, Black</td>
                  </tr>
                  <tr>
                    <td><strong>Size</strong></td>
                    <td>S, M, L, XL</td>
                  </tr>
                  <tr>
                    <td><strong>Model</strong></td>
                    <td>Model</td>
                  </tr>
                  <tr>
                    <td><strong>Shipping</strong></td>
                    <td>Standard shipping: $5.95</td>
                  </tr>
                  <tr>
                    <td><strong>Care Info</strong></td>
                    <td>Machine Wash up to 40ºC/86ºF Gentle Cycle</td>
                  </tr>
                  <tr>
                    <td><strong>Brand</strong></td>
                    <td>Kazen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <p> Excellent product, worth buying!</p>
              <p> Good but delivery was late.</p>
              <p> Very comfortable and stylish sofa.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
