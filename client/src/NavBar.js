import React from 'react'
import { Link } from 'react-router-dom'
import './Components/Styles/navBar.css'
function NavBar() {
    return (
        <ul className='flexRow navBar wrapper'>
            <Link to={'/'}  className='logoIcon justifyCntSpcEven'>
            <li>Stitches<span>xxxx</span></li>
            </Link>
            <li className='shopingIcons'>
                <ul className='flexRow justifyCntSpcEven'>
                    <li><i className="fas fa-user-alt"></i></li>
                    <li><i className="far fa-heart"></i></li>
                    <li><i className="fas fa-shopping-bag"></i></li>
                </ul>
            </li>
        </ul>
    )
}

export default NavBar
