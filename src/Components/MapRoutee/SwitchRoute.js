import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RouteList from './RouteList';






const SwitchRoute = () => {


    const listRouter = []
    const auth = localStorage.getItem('token')
    const publicRoter = []
    RouteList.map(item => { publicRoter.push(item) })
    const privateRouter = []
    RouteList.filter(item => item.private == false).map(itemFilter => { privateRouter.push(itemFilter) })


    return (


        <BrowserRouter>
            <Routes>



                {

                    RouteList.map((itemAuth) => {



                        return (<Route path={itemAuth.path} element={itemAuth.element} >

                            {
                                itemAuth.nestedRoute ?
                                    itemAuth.nestedRoute.map(itemsAuth => {
                                        return (<Route path={itemsAuth.path} element={itemsAuth.element} />)
                                    }

                                    )
                                    :
                                    null
                            }

                        </Route>

                        )


                    }


                    )


                }
            </Routes>

        </BrowserRouter>

    )
}
export default SwitchRoute;