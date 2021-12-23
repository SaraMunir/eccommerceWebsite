import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard() {
    return (
        <div className="productCard">
            <img src="https://ae01.alicdn.com/kf/Hfb9af48993a54f69acd1d9040e603976K/NO-YOU-CANNOT-TOUCH-MY-HAIR-Print-Women-Tshirts-Cotton-Casual-Funny-t-Shirt-For-Lady.jpg_Q90.jpg_.webp" alt="Wo-Tee-1-1"/>
            <div className='productDetailCntr'>
                <h3>Womens T-Shirt</h3>
                <p>CA$ 24.00</p>
                <Link to={`/product/1235`}>
                    <button>View Detail</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
