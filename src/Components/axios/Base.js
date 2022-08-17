import axios from "axios";


const instance = axios.create({

    baseURL: 'https://fakestoreapi.com/auth/',
    body:JSON.stringify({
        username: null,
        password: null
    })
   });

   export default instance;