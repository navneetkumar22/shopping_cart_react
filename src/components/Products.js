import React from 'react';
import list from '../dataList';
import Card from './Card';
import '../App.css'

const Products = () => {
    return (
        <section className='cards-section'>
            {
                list.map((item) => (
                    <Card title={item.title} details={item.details} price={item.price} url={item.url} key={item.id} />
                ))
            }
        </section>
    )
}

export default Products;