import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function SideMenu() {
    return (
        <ul className='sideMenu'>
            <Link  to={'/Admin/Dashboard'}>
                <li className={useLocation().pathname==='/Admin/Dashboard'?'sideMenuItem sideMenuActive':'sideMenuItem'}>
                    Dashboard
                </li>
            </Link>
            <Link  to={'/Admin/Products'}>
                <li className={useLocation().pathname==='/Admin/Products'?'sideMenuItem sideMenuActive':'sideMenuItem'}>
                    Products
                </li>
            </Link>
        </ul>
    )
}

export default SideMenu
