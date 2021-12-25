import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase';

function ColorDetail({colourObj, productId, getProductDetail}) {
    const {uploadImgForm, setUplaodImgForm}=useState(false)
    const [imgFile, setImgFile]= useState({})
    const [uploadBtn, setUploadBtn] = useState(false)


    const selectImg =  (e)=>{
        const file = e.target.files[0];
        // setting the file to imgObj. 
        setImgFile(file)
        // activating the upload btn only when the file is selected. 
        setUploadBtn(true)
    }
        // to upload image
        const handleUploadImg = async (e)=>{
            const id = uuidv4();
            const file = imgFile;
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
                const apiResult = await fetch(`/api/addImage/${productId}/${colourObj._id}`, 
                {   method: 'post',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(object)
                }).then( result=>result.json(
                ))
                if(apiResult){
                    setImgFile({})
                    getProductDetail()
                }
            }))
        }
    return (
        <div className='addProductForm'>
            <h3>Name: {colourObj.nameOfColor}</h3>
            <div>
                <div className='flexRow'>
                    <h3>Images</h3>
                    <button onClick={()=>setUplaodImgForm(true)}>upload images</button>
                    {uploadImgForm?
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
                    :null
                }

                </div>
                <ul>
                    <li>there are currently no images</li>
                </ul>
                <div>
                    <h3>Sizes</h3>
                    <ul className='flexRow flexRowWrap justifyCntSpcEven'>
                        {colourObj.sizes.map(size=>
                            <li key={size._id} className='flexRow justifyCntBetwn listItem col45' >
                                <h4>{size.size} {size.qty}</h4>
                                <button> x </button>
                        </li>
                            )}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default ColorDetail
