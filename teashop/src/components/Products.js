import React from 'react';
import product1 from '../images/product1.jpeg';
import product2 from '../images/product2.jpeg';
import product3 from '../images/product3.jpeg';
const Products = (props) => {
  return (
    <div className='products-container'>
      <section className='about-section clearfix product-section'>
        <article className='product-info'>
          <h3>Chech out</h3>
          <h2>Our Products</h2>
        </article>
        <article className='product'>
          <img src={product1} alt='product 1' />
        </article>
        <article className='product'>
          <img src={product2} alt='product 2' />
        </article>
        <article className='product'>
          <img src={product3} alt='product 3' />
        </article>
      </section>
    </div>
  );
};

export default Products;
