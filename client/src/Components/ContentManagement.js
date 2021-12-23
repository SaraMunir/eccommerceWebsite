import React from 'react'
import Dashboard from './ContentManager/Dashboard'
import SideMenu from './ContentManager/SideMenu'
import './Styles/contentManager.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddProduct from './ContentManager/AddProduct';
import ProductDetail from './ContentManager/ProductDetail';

function ContentManagement() {
    return (
        <section className='flexRow'>
            <SideMenu/>
            <Routes>
                <Route path='/Dashboard' element={<Dashboard/>}/>
                <Route path='/Products' element={<AddProduct/>}/>
                <Route path='/productDetail/:productId' element={<ProductDetail/>}/>
            </Routes>
        </section>
    )
}

export default ContentManagement
