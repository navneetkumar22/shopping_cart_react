import React from 'react'

const Card = (data) => {
    const { title, details, price, url } = data;

    return (
        <div className='card'>
            <div className='image-div'>
                <img src={url} />
            </div>
            <div className='details'>
                <h2>{title}</h2>
                <p>{details}</p>
                <h3>Price - Rs. {price}</h3>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card;