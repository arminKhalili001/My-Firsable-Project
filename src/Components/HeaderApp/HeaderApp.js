import React from "react";
import { Link, Outlet } from "react-router-dom";
import useGeoLocation from "react-ipgeolocation";
import { useSelector } from "react-redux";

import './HeaderApp.css';
import SecondHeader from "./SecondHeader";




const HeaderApp = (props) => {
  const location = useGeoLocation();
  const auth = localStorage.getItem('token')
  const username = localStorage.getItem("username")
  const cartShop = useSelector((state)=> state.persistReducers.cart)

 


  return (
    <div>
      <div className="HeaderApp">
        <div className="first-header">

          <ul className="first-header-ul">

            <Link to="/"> <li className=" first-header-li-simpelPage" >Sample Page</li> </Link>
            <li className=" first-header-li-Location" ><img className=" first-header-li-img-Location" src="/imges/loc.png" />
              Deliver to <br />  <h2>{location.country}</h2></li>

            <li className=" first-header-li-search"><input className=" first-header-li-input-search" placeholder="" />
              <button className="first-header-li-btn-search" /> </li>

            {!auth ?
              <Link to="/signin" className=" first-header-li-signIn-Link"><li className=" first-header-li-signIn">
                <span className="first-header-li-signIn-1">Hello ,  Sign in  </span> <br /> <span className=" first-header-li-signIn-2">
                  Account & Lists <span className=" first-header-li-signIn-2-button"></span> </span></li></Link>
              :
              <li className=" first-header-li-signIn">
                <span className="first-header-li-signIn-1">Hello , Welcome </span> <br /> <span className=" first-header-li-username-2">
                  {username} <span className=" first-header-li-signIn-2-button"></span> </span></li>

            }

            <Link to="/cart" className=" first-header-li-cart-Link"><li className=" first-header-li-cart" >
              <img src="/imges/cart.png" className="first-header-li-cart-img" /> <span className=" first-header-li-cart-Count">
                <p> {cartShop.cartProducts.length} </p></span> <span className=" first-header-li-cart-span"><p>Cart</p></span> </li></Link>
          </ul>

        </div>
        <div>
          <SecondHeader />
        </div>

      </div>
      <div>
        <Outlet />
      </div>
    </div>

  )

}
export default HeaderApp;