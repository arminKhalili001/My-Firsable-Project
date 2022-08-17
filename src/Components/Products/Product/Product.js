import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import './product.css';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../Store/CartSlice'

const Product = () => {
    const [stateproducts, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/products").
            then(response => {
                setProducts(response.data)
            })
            .catch(err => alert('no conection'))

    }, [])



    console.log("productssssssssss", stateproducts)
    const handelAddToCart = (product) => {
        console.log('product' , product)
        
        dispatch(addToCartAction(product))
    }

    return (
        <div className='product'>
            <div>
                <h2>Books</h2>
                <p>There is many books for your skils</p>
            </div>
            {
                stateproducts.map((product) => {


                    return (
                        <div className='product-all' key={product.id}>

                            <div className='product-img'>
                                <img src={`/products/0${product.id}.jpg`} />
                            </div>
                            <div className='product-title'>
                                <p> {product.title} </p>
                            </div>

                            <div className='product-price'>
                            <span className='product-price-d'>$</span> <p> {product.price}</p>
                            </div>

                            
                                <button className='btn' onClick= {() => handelAddToCart(product)}
                                type="submit">Add To Cart</button>
                            

                        </div>
                    )
                })
            }

        </div >
    )
}

export default Product;