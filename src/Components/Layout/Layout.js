import React from "react";
import { Outlet } from "react-router-dom";

import SwitchRoute from "../MapRoutee/SwitchRoute";



const Layout = () =>{
    return(
        <div>
            <Outlet />
            <SwitchRoute />
        </div>
    )
}       
export default Layout ;