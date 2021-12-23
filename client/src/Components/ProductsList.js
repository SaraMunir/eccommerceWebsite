import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar'
import ProductCard from './ProductCard'
import SideBar from './SideBar'
import SortingBar from './SortingBar'
import './Styles/productsList.css'
function ProductsList() {

    const {category} = useParams()
    return (
        <>
            <NavBar/>
            <header className={category==='womens'? "productHeader womensHeader" : "productHeader mensHeader"} >
                <h1>{category==='womens'? "Womens" : "Mens"}</h1>
            </header>
            <SortingBar/>
            <section className='wrapper flexGridRow'>

                <SideBar category={category}/>
                <div className='productsList'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>

            
            </section>
        </>
    )
}

export default ProductsList
