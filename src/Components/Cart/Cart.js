import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from "../Store/CartSlice";
import { decremantAction } from "../Store/CartSlice";
import { removeAction } from "../Store/CartSlice";
import { getTotals } from "../Store/CartSlice";




import './Cart.css'

const Cart = () => {



    const dispatch = useDispatch();


    document.getElementById('root')


    // const carProductstring = localStorage.getItem('persist:cart')

    // const productDetails = JSON.parse(carProductstring);

    // const cartProductObject = JSON.parse(productDetails.cart)

    // const cartproducts = cartProductObject.cartProducts


    const cart = useSelector((state) => state.persistReducers.cart);



    useEffect(() => {

        dispatch(getTotals())

    }, [cart, dispatch])

    console.log('nameCrt', cart)



    const decremant = (item) => {

        dispatch(decremantAction(item))
    }

    const incremant = (item) => {

        dispatch(addToCartAction(item))

    }




    return (

        <div className="Cart">
            <div>
                Your Cart ( {cart.cartProducts.length} )
            </div>
            <table className="Cart-Table">
                <tr className="tr-top">
                    <th>
                        Item
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        total
                    </th>
                </tr>


                {

                    cart.cartProducts.map(item => {


                        return (
                            <tr className="tr-product">

                                <td className="tr-product-img"><img src={`/products/0${item.id}.jpg`} />
                                    <div className="tr-product-title">{item.title}
                                    </div><button type="submit" className="tr-product-remove-btn"
                                        onClick={() => dispatch(removeAction(item))}>Remove</button><div></div>  </td>
                                <td> ${item.price} </td>

                                <td> <button className="btn-quantity" type="submit" onClick=
                                    {() => decremant(item)}> - </button >
                                    {item.cartQuantity}
                                    <button className="btn-quantity" type="submit" onClick={() => incremant(item)}> + </button> </td>
                                <td> ${item.cartQuantity * item.price}</td>

                            </tr>
                        )


                    })}
            </table>
            <p className="total-p">Total : ${cart.cartTotalAmount} </p>
        </div>
    )
}

export default Cart;


