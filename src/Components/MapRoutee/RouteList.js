import { Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";



import HeaderApp from "../HeaderApp/HeaderApp";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import Products from "../Products/Products";
import Register from '../Register/Register';
import Cart from "../Cart/Cart";


const auth = localStorage.getItem('token')



const RouterList = [
    {
        key:0,
        path:'/',
        private: false,
        element: <HeaderApp/>,
        nestedRoute:
        [
            {
                key:1,
                path:'/',
                private: false,
                element: <Home />,
                nestedRoute:[]
                
            },
            {
                key:2,
                path: '/products',
                private:true,
                element: auth ?  <Products/>: <Navigate to="/signin" /> ,
                nestedRoute:[]
                
            },
            {
                key:3,
                path: '/cart',
                private:true,
                element: auth ?  <Cart/>: <Navigate to="/signin" /> ,
                nestedRoute:[]
                
            }
            
        ]
        
    }
    ,
    {
        key:3,
        path:'/signin',
        private:false,
        element: !auth ?  <SignIn /> : <Navigate to='/' /> ,
        nestedRoute:[]
        
    },
    {
        key:4,
        path:'/register',
        private:false,
        element:<Register/> ,
        nestedRoute:[]
    }

];

export default RouterList ;