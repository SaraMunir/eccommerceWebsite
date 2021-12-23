import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AddProduct() {
    const [newProductAdded, setNewProductAdded]=useState(false)
    const [allProducts, setAllProducts]=useState([])
    const [product, setProduct]=useState({
        category: 'women', subType: 'Tees', nameOfProduct: '', mainImg: '', rating:0, price:20.99
    })
    const [openModal, setOpenModal] = useState(false)
    const handleChange = (e)=>{
        const {id, value} = e.target;
        setProduct({...product, [id]:value})
    }
    const createProduct = async (e)=>{
        setNewProductAdded(true)
        e.preventDefault();
        const apiResult = await fetch('/api/newProduct', 
            {   method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then( result=>result.json())
            if(apiResult){
                setProduct({  category: 'women', subType: 'Tees', nameOfProduct: '', mainImg: '', rating:0, price:20.99  })
                setOpenModal(false)
                setNewProductAdded(false)
            }
    }
    useEffect(async()=>{
        const loadAllProduct = await fetch('/api/getAllProducts').then(res=>res.json());
        setAllProducts(loadAllProduct)
    }, [newProductAdded])
    return (
        <div className='dashboard addProductsPage'>
            <div className='flexRow justifyCntBetwn'>
                <h2>Product</h2>
                <div>
                    <button className='blackBtn' onClick={()=>setOpenModal(!openModal)}>create</button>
                </div>
            </div>
            {
                openModal ? 
                <div className="modalCntr">
                    <div className='modal'>
                        <div className="closeBtnCntr" onClick={()=>setOpenModal(!openModal)}>
                        <i className="fas fa-times"></i>
                        </div>
                        <form className='addProductForm' onSubmit={createProduct}>
                            <div className='flexCol'>
                                <label htmlFor="nameOfProduct">Name Of Product</label>
                                <input id='nameOfProduct' 
                                value={product.nameOfProduct} type="text"
                                onChange={handleChange}  />
                            </div>
                            <div className='flexCol'>
                                <label  htmlFor="category">category</label>
                                <select name="category" id="category" onChange={handleChange} defaultValue={product.category}>
                                    <option  value="women" hidden>women</option>
                                    <option value="women">women</option>
                                    <option value="men">men</option>
                                </select>
                            </div>
                            <div className='flexCol'>
                                <label  htmlFor="subType">Sub Type</label>
                                <select name="subType" id="subType" onChange={handleChange} defaultValue={product.subType}>
                                    <option  value="tees" hidden>tees</option>
                                    <option value="tees">tees</option>
                                    <option value="shirt">shirt</option>
                                    <option value="dress">dress</option>
                                    <option value="pants">pants</option>
                                    <option value="jacket">jacket</option>
                                </select>
                            </div>
                            <div className='flexCol'>
                                <label htmlFor="price">Price</label>
                                <input id='price' 
                                value={product.price} type="number"
                                onChange={handleChange}  />
                            </div>
                            <button>submit</button>
                        </form>
                    </div>
                </div> 
                : null
            }
            <ul className='productList'>
                    <li className='listItem'>
                        <div className="itemNum">No.</div>
                        <div className="itemName">Name</div>
                        <div className="itemCategory">Category </div>
                        <div className="itemType">Type</div>
                        <div className="itemLink">Edit</div>
                    </li>
            {
                allProducts.length>0 ?
                    allProducts.map((product, idx)=>
                    <li key={product._id} className='listItem'>
                        <div className="itemNum">{idx} </div>
                        <div className="itemName">{product.nameOfProduct} </div>
                        <div className="itemCategory">{product.category} </div>
                        <div className="itemType">{product.subType} </div>
                        <div className="itemLink"><Link className='linkBtn' to={`/Admin/productDetail/${product._id}`}>edit</Link></div>
                    </li>)
                : null
            }


            </ul>
        </div>
    )
}

export default AddProduct
