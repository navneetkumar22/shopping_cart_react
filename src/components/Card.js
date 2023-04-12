import React from 'react'

const Card = ({ data, addToCart }) => {
    const { title, details, price, url } = data;

    return (
        <div className='card'>
            <div className='image-div'>
                <img src={url} alt='image' />
            </div>
            <div className='details'>
                <h2>{title}</h2>
                <p>{details}</p>
                <h3>Price - &#8377;{price}</h3>
                <button onClick={() => addToCart(data)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card;