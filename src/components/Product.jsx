import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Product.css'
import ProductCard from './ProductCard'
import { ProductData } from '../data/ProductData'
import { useState } from 'react'
import Pagination from './Pagination'



export const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(ProductData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ProductData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <main>
        <section id='product-banner'>
          <div className="product-banner-content">
            <img src='/images/product-banner.webp' />

            <div className='product-head container'>
              <h2>PRODUCTS</h2>
              <Link to={'/'} className='bread-crums'>
                Home <span>-</span> Products
              </Link>
            </div>
          </div>
        </section>
        <section id='product-list'>
          <div className='head-product-card container'>
            <h4>20 item On List</h4>
            <div className="filter-dropdown">
              <select>
                <option value="show 20">Show 20</option>
                <option value="thisPastWeek">This Past Week</option>
                <option value="thisPastMonth">This Past Month</option>
                <option value="thisPastYear">This Past Year</option>
                <option value="allTime">All Time</option>
              </select>
            </div>
          </div>

          <div className='product-cards container'>

            {
              ProductData.map((item) => <ProductCard image={item.image} category={item.category} title={item.title} actual_price={item.actual_price} selling_price={item.selling_price} />)
            }
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              currentItems ={currentItems}
            />
          </div>

        </section>
      </main>


    </>
  )
}
