import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import './Logout.css';
import { logout } from "../Store/AuthSlice";
const Logout = () =>{

    const dispatch = useDispatch()
    const handelBtnLogout = () =>{

        localStorage.clear();
        <Link to='/' />
        
        window.location.reload(false);

        dispatch(logout())
    }
        return(
        <div className="Logout">
             <li className="second-header-li-logout" ><button type="submit" onClick={handelBtnLogout} className="Logout-btn">  Logout  </button></li>
        </div>
    )
};

 export default Logout;