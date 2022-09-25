import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faCartPlus} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{ product , addCartHandaler} = props;
    const {img , name , price , ratings , seller} = product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
                <h2>{name}</h2>
                <h3>Price:${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
           </div>
            <button onClick={()=>addCartHandaler(product)}>
                <p>Add to Cart <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon></p>
                
            </button>
        </div>
    );
};

export default Product;