// 

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Product.css'
import ProductCard from './ProductCard'
import { ProductData } from '../data/ProductData'
import { useState } from 'react'
import Pagination from './Pagination'


const categories = [
  { value: 'wooden', label: 'Wooden' },
  { value: 'metalic', label: 'Metalic' }
]

const priceOptions = [
  { value: 20, label: 'Under $20'  },
  { value: 40, label: 'Under $40'  },
]


 const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(ProductData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = ProductData.slice(indexOfFirstItem, indexOfLastItem);

  const [currentItems, setCurrentItems] = useState(ProductData)

  const [filterOptions, setFilterOptions] = useState({
    priceOption: '',
    category: ''
  })

  /**
   * 
   * @param {String} type - Type of the filter method 
   * @param {String} value - Value for the filter 
   */
  const handleFilterChange = (type, value) => {
    console.log(type, value, 'from filter');
    setFilterOptions(prev=> ({ ...prev, [type]: value}))
  }

  useEffect(()=> {

    let productList = ProductData

    if (filterOptions.category) {
      productList = productList.filter(item=> item.category === filterOptions.category)
    } 
    if (filterOptions.priceOption) {
      productList = productList.filter(item=> item.price.selling < filterOptions.priceOption)
    }
   
    setCurrentItems(productList)
  },[filterOptions])

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
              <select  onChange={(e)=> handleFilterChange('priceOption', e.target.value )} >
                <option value="" selected>All Price</option>
                {
                  priceOptions.map(item=> <option value={item.value} >{item.label}</option>)
                }
              </select>
            </div>
            <div className="filter-dropdown">
              <select onChange={(e)=> handleFilterChange('category', e.target.value )}>
                <option value="" selected>All categories</option>
                {
                  ProductData.map(item=> <option value={item.category} >{item.category}</option>)
                }
              </select>
            </div>
          </div>

          <div className='product-cards container'>

            {
              // currentItems.map((item) => <ProductCard image={item.image} category={item.category} title={item.title} actual={item.price.actual} selling={item.price.selling} />)
              currentItems.map((item) => <ProductCard id = {item.id} image={item.image} category={item.category} title={item.title} price = {item.price} />)

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
export default Product









