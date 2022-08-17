import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";


import "./SecondHeader.css"

const SecondHeader = () =>{
  const auth =localStorage.getItem("token")
    return(
        <div className="second-header">

        <ul className="second-header-ul">

          <li className="second-header-li-all" ><img className="second-header-li-all-icon" src="/imges/menuIcon.png" /><span className="second-header-li-all-span" >All</span></li>
          <Link to='/products' className="second-header-Link" ><li className="second-header-li-products" >Products</li></Link>
          {
            auth ?
            (
               <Logout />
              
              ):(
              <Link to='/signin'><li className="second-header-li-sinIn" >sign in</li></Link>
            )
          }


        </ul>

      </div>
    )
}

export default SecondHeader;