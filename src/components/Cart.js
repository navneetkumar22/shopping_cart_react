import React, { useEffect, useState } from 'react'

const Cart = ({ cart, setCart }) => {

    const [price, setPrice] = useState(0);

    //function to set the total price
    const handlePrice = () => {
        let value = 0;
        cart.map((item) => (
            value = value + item.amount * item.price
        ))
        setPrice(value);
    }

    //function to remove item from cart
    const removeProduct = (id) => {
        const newArray = cart.filter((item) => item.id !== id);
        setCart(newArray);
    }

    //function to change the product amount
    const changeAmount = (item, quantity) => {
        cart.forEach((product, index, cart) => {
            if (product.id === item.id) {
                cart[index].amount += quantity;

                if (cart[index].amount < 1)
                    cart[index].amount = 1;

                setCart([...cart])
            }
        });
    }

    useEffect(() => {
        handlePrice();
    })


    return (
        <article>
            {
                cart?.map((product) => (
                    <div className='final-cart'>
                        <div className='cart-image'>
                            <img src={product.url} />
                            <h2>{product.title}</h2>
                        </div>
                        <div className='number'>
                            <button onClick={() => changeAmount(product, +1)}>+</button>
                            <button>{product.amount}</button>
                            <button onClick={() => changeAmount(product, -1)}>-</button>
                        </div>
                        <div className='item-price'>
                            <h3><span className='rupee'>&#8377;</span>{product.price * product.amount}</h3>
                            <button onClick={() => removeProduct(product.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }

            <div className='final-price'>
                <h2>Total amount =</h2>
                <h2><span className='rupee'>&#8377;</span>{price}</h2>
                <button>Checkout</button>
            </div>
        </article>
    )
}

export default Cart