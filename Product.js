import React from 'react'
import { Link, Outlet } from 'react-router-dom'

 export const Product = () => {
  return (
    <>
      <div>Product</div>
      {/* <br></br> */}
      <input type='search' placeholder='search-product'/>
      <nav className='container primary-nav'>
        <Link to='featured'className='a1'>Featured</Link>
        <Link to='new'>NewProduct</Link>

      </nav>
      <Outlet/>
    </>
  )
}

export default Product
