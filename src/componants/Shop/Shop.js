import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([]);
    useEffect(()=>{

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))    
    },[]);
    const addCartHandaler = product =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <main className='shop-container'>
             <section className='products-container'>
                {
                products.map(product => <Product product={product} addCartHandaler={addCartHandaler} key={product.id}></Product>)
                }
                
              
             </section>
             <section className='side-container'>
                <h1>Order Summary </h1>
                <div className='order-info'>
                    <p>Selected items:{cart.length}</p>
                    <p>Total Price: $ </p>
                    <p>Total Shipping Charge: $</p>
                    <p>Tax: $</p>
                    <p>Grand Total: $</p>
                </div>
             </section>
             
            
        </main>
    );
};

export default Shop;