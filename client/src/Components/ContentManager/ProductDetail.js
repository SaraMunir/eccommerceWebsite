import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const {productId} = useParams()
    const [productDetail, setProductDetail]=useState({})
    useEffect(async ()=>{
        const getProductDetail = await fetch(`/api/getProductDetail/${productId}`).then(res=>res.json())
        if(getProductDetail){
            console.log(getProductDetail)
            setProductDetail(getProductDetail)
        }
    }, [])
    return (
        <div className='dashboard'>
            <h2>Product detail</h2>
            <div className="flexRow">
                <ul className="productList productDetail">
                    <li className='listItem'>
                        <div className="productName">
                            <h3>Name: {productDetail.nameOfProduct}</h3>
                        </div>
                        <div className="itemLink">
                            <button className='linkBtn'>edit</button>
                        </div>
                    </li>
                    <li className='listItem'>
                        <div className="productName">
                            <h3>Price: {productDetail.price}</h3>
                        </div>
                        <div className="itemLink">
                            <button className='linkBtn'>edit</button>
                        </div>
                    </li>
                    <li className='listItem'>
                        <div className="productName">
                            <h3>Type: {productDetail.subType}</h3>
                        </div>
                        <div className="itemLink">
                            <button className='linkBtn'>edit</button>
                        </div>
                    </li>
                </ul>
                <img className='productImg' src={productDetail.mainImg ? productDetail.mainImg: "https://metrolandparcelservices.ca/wp-content/uploads/2020/11/placeholder.png"} alt="" />
            </div>
        </div>
    )
}

export default ProductDetail
