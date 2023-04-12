import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ size }) => {
    return (
        <nav>
            <div className="nav-bar">
                <Link to='/' style={{ textDecoration: 'none', color: "black" }}><p className="cart-button">Food Products</p></Link>
                <h1 className="app-name">Shopping Cart</h1>
                <div className="cart-size">
                    <Link to='/cart' style={{ textDecoration: 'none', color: "black" }}><p className="cart-button">Cart</p></Link>
                    <p className="size">{size}</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

