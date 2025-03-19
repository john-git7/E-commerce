import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, Home, CreateProduct } from "../src/Routes/Routes";
//import { Bounce } from "react-awesome-reveal";
import server from "./server";
import axios from "axios";
import MyProduct from "./Page/myProduct";
import ActivationPage from "./Page/Activation";
import Cart from "./Page/cart";
import Profile from "./Page/profile";           
import CreateAddress from "./Page/createAddress";
import ProductDetail from "./Page/ProductDetail"; 

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get(`${server}/getuser`, { withCredentials: true }) 
        .then(res => {
            console.log(res.data);
            toast.success(res.data.message);
        })
        .catch(err => toast.error(err.response?.data?.message || "An error occurred"));
    }, []);

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/productCreate" element={<CreateProduct />} />
                <Route path="/myProduct" element={<MyProduct />} />
                <Route path="/activation/:Activation_Token" element={<ActivationPage />}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/profile" element={<Profile />} />
                <Route path='/create-address' element={<CreateAddress />} />
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
        </>
    );
}

export default App;

{/*  /> 
                
                <Route path="/productCreate" element={<CreateProduct/>}/>
                <Route path="/my-product" element={<MyProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
               
                <Route path="/profile" element={<Profile />} />
                <Route path='/create-address' element={<CreateAddress />} /> */}