import React, {useEffect, useState, useRef} from 'react'
import { useParams } from 'react-router-dom'
import firebase from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import AddColorForm from './AddColorForm';
import ColorDetail from './ColorDetail';

function ProductDetail() {
    const nameOfColorInput = useRef()
    const {productId} = useParams()
    const [productDetail, setProductDetail]=useState({});
    const [imgObj, setImgObj]= useState({})
    const [uploadBtn, setUploadBtn] = useState(false)
    const [modalOpen, setModalOpen]= useState(false)
    const [alert, setalert]= useState({show:false, message: ''})
    const [colorObj, setColorObj]=useState({
        nameOfColor: '', 
        sizes:[],
    })
    const [isSizeAdded, setIsSizesAdd]=useState({
        XS: false, S: false, M: false, L: false, XL: false
    })
    const [colorSizeObj, setColorSizeObj]=useState(
        {
        size: "M",
        qty: 50
    })
    const [selectedColorDetail, setSelectedColorDetail]=useState({})
    const [showSizeInput, setShowSizeInput]=useState(false)
    const [ showColorForm, setShowColorForm]=useState(false)
    const [ showColorDetail, setShowColorDetail]=useState(false)
    // to upload image
    const handleUploadImg = async (e)=>{
        const id = uuidv4();
        const file = imgObj;
        const imagesRef = firebase.storage().ref('image').child(id);
        await imagesRef.put(file).then(()=>{})
        imagesRef.getDownloadURL().then((async url=>{
            const object = {
                mainImg: {
                    imageId: id,
                    imageUrl: url
                }
            }
            console.log(object)
            const apiResult = await fetch(`/api/addImage/${productId}`, 
            {   method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then( result=>result.json(
            ))
            if(apiResult){
                setImgObj({})
                getProductDetail()
            }
        }))
    }
    const selectImg =  (e)=>{
        const file = e.target.files[0];
        // setting the file to imgObj. 
        setImgObj(file)
        // activating the upload btn only when the file is selected. 
        setUploadBtn(true)
    }
    const getProductDetail = async()=>{
        const fetchProduct = await fetch(`/api/getProductDetail/${productId}`).then(res=>res.json())
        if(fetchProduct){
            // console.log(fetchProduct)
            setProductDetail(fetchProduct)
        }
    }
    const handleChange = (e)=>{
        const {id, value} = e.target;
        setColorObj({...colorObj, [id]:value})
    }
    const handleSizeChange = (e)=>{
        const {id, value} = e.target;
        // console.log([id], value).
        setColorSizeObj({...colorSizeObj, [id]:value})
    }
    const handleQtyChange = (e)=>{
        const {id, value} = e.target;
        // console.log([id], value).
        setColorSizeObj({...colorSizeObj, [id]:Number(value)})
    }
    const addColor=async (e)=>{
        e.preventDefault()
        console.log(colorObj)
        if(colorObj.nameOfColor===""){
            nameOfColorInput.current.focus();
            setalert({show: true, message: 'please provide name'})
            return
        }
        const apiResult =await fetch(`/api/addColors/${productId}`,
        {
            method:'post', 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(colorObj)
        }
        ).then(res=>res.json())
        if(apiResult){
            setIsSizesAdd({ XS: false, S: false, M: false, L: false, XL: false })
            setColorSizeObj( { size: "M", qty: 50 })
            setModalOpen(false);
            setColorObj({ nameOfColor: '',  sizes:[] })
            getProductDetail()
        }
    }
    const showInputSize=(e)=>{
        e.preventDefault()
        setShowSizeInput(!showSizeInput)
    }
    const saveSize=(e)=>{
        e.preventDefault()
        const sizeArrays = [...colorObj.sizes]
        sizeArrays.push(colorSizeObj)
        setColorObj({...colorObj, sizes: sizeArrays})
        setIsSizesAdd({...isSizeAdded, [colorSizeObj.size]:true})
    }
    const removeSize=(index)=>{
        const sizeArr = [...colorObj.sizes]
        setIsSizesAdd({...isSizeAdded, [sizeArr[index].size]:false})
        sizeArr.splice(index,1)
        setColorObj({...colorObj, sizes: sizeArr})
    }
    const openModal=(type, object)=>{
        setModalOpen(!modalOpen)
        if(type === "addColor"){
            setShowColorForm(true)
            setShowColorDetail(false)
        }
        if(type === "showColorDetail"){
            setShowColorDetail(true)
            setShowColorForm(false)
            setSelectedColorDetail(object)
        }
    }
    const closeModal =()=>{
        setModalOpen(!modalOpen)
        setShowColorForm(false)
    }
    useEffect(async ()=>{
        getProductDetail()
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
                <div className='productImg'>
                    {
                    productDetail.mainImg ? 
                    <button>deleteImg</button>
                    :
                    <div>
                        <form className="input-group mb-3" id='myCvrForm' role="form" >
                            <label className="custom-file-label" htmlFor="inputGroupFile02" hidden>Choose file</label>
                            <input 
                                type="file" 
                                name="myFile"
                                onChange={selectImg} id="inpFile"/>
                        </form>
                            <button className={uploadBtn ? "postBtn" : "postBtn postBtnGrey"} disabled={!uploadBtn} onClick={handleUploadImg}>Upload</button> 
                    </div>
                    }
                    <img src={productDetail.mainImg ? productDetail.mainImg.imageUrl: "https://metrolandparcelservices.ca/wp-content/uploads/2020/11/placeholder.png"} alt="" />
                </div>
            </div>
            {/* modal:J  */}
            {
                modalOpen ? 
                <div className="modalCntr">
                    <div className='modal'>
                        <div className="closeBtnCntr" onClick={closeModal}>
                        <i className="fas fa-times"></i>
                        </div>
                        {showColorForm?
                        
                        <AddColorForm 
                        addColor={addColor} 
                        colorObj={colorObj}
                        handleSizeChange={handleSizeChange}
                        colorSizeObj={colorSizeObj}
                        isSizeAdded={isSizeAdded}
                        handleChange={handleChange}
                        nameOfColorInput={nameOfColorInput}
                        showInputSize={showInputSize}
                        showSizeInput={showSizeInput}
                        handleQtyChange={handleQtyChange}
                        saveSize={saveSize}
                        removeSize={removeSize}
                        />
                        : null }
                        {
                            showColorDetail ?
                            <ColorDetail colourObj={selectedColorDetail} productId={productId} getProductDetail={getProductDetail}/>
                            : null
                        }
                    </div>
                </div> 
                : 
                null
            }
            <button onClick={()=>openModal('addColor')}>Add Colors</button>
            <ul className=''>
            {
            productDetail.colours?
                productDetail.colours.length>0 ?
                productDetail.colours.map(colour=>
                    <li key={colour._id} className='flexRow justifyCntBetwn listItem'>
                        <div className="productName">
                            <h3>{colour.nameOfColor}</h3>
                        </div>
                        <div className="itemLink">
                            <button className='linkBtn' onClick={()=>openModal('showColorDetail', colour)}>edit</button>
                        </div>
                    </li>
                    )
                    :null
                :null
            }
            </ul>
        </div>
    )
}

export default ProductDetail
