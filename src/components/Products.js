import React from 'react';
import list from '../dataList';
import Card from './Card';
import '../App.css'

const Products = ({ addToCart }) => {
    return (
        <section className='cards-section'>
            {
                list.map((item) => (
                    <Card data={item} addToCart={addToCart} key={item.id} />
                ))
            }
        </section>
    )
}

export default Products;