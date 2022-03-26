import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = ({laptop, slectBtn}) => {
    const {image, name, price, model, processor, ram, storage} = laptop;
    return (
        <div className='card'>
            <div className="laptop-img">
                <img src={image} alt=""/>
            </div>
            <div className="laptop-details">
                <h2 className="laptop-title">{name}</h2>
                <p>Model: {model}</p>
                <p>Processor: {processor}</p>
                <p>RAM: {ram}</p>
                <p>Storage: {storage}</p>
            </div>
            <div className="cart-price">
                <h4>${price}</h4>
                <button onClick={()=>slectBtn(laptop)}>Select Laptop <FontAwesomeIcon icon={faCartPlus}/></button>
            </div>
            
        </div>
    );
};

export default Product;