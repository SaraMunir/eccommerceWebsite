import React from 'react'

function AddColorForm(props) {
    const {addColor,colorObj,handleSizeChange,colorSizeObj,isSizeAdded, handleChange, nameOfColorInput, showInputSize,showSizeInput, handleQtyChange, saveSize, removeSize}=props
    return (
        <form className='addProductForm' onSubmit={addColor}>
            <div className='flexCol'>
                <label htmlFor="nameOfColor">Name Of Product</label>
                <input id='nameOfColor' 
                value={colorObj.nameOfColor} type="text"
                onChange={handleChange}  
                ref={nameOfColorInput}/>
            </div>
            <button onClick={showInputSize}>Add size</button>
            {
                showSizeInput ?
            <div className="flexRow ">
                <div className='flexCol sizeInput'>
                    <label  htmlFor="size">Select Size</label>
                    <select name="size" id="size" 
                    onChange={handleSizeChange} 
                    defaultValue={colorSizeObj.size}>
                        <option  value="M" hidden>M</option>

                        {isSizeAdded.XS?
                        <option value="XS" disabled>XS</option>
                        : <option value="XS">XS</option>
                        }
                        {isSizeAdded.S?
                        <option value="S" disabled>S</option>
                        : <option value="S">S</option>
                        }
                        {isSizeAdded.M?
                        <option value="M" disabled>M</option>
                        : <option value="M">M</option>
                        }
                        {isSizeAdded.L?
                        <option value="L" disabled>L</option>
                        : <option value="L">L</option>
                        }
                        {isSizeAdded.XL?
                        <option value="XL" disabled>XL</option>
                        : <option value="XL">XL</option>
                        }
                    </select>
                </div>
                <div className='flexCol sizeInput'>
                    <label htmlFor="qty">Quantity</label>
                    <input id='qty' 
                    value={colorSizeObj.qty} type="number"
                    onChange={handleQtyChange}  />
                </div>
                <div className="flexCol sizeInputBtn">
                    <label htmlFor="saveBtn" className='sr-only '>save</label>
                    <button id='saveBtn' className='' onClick={saveSize}>save</button>
                </div>
            </div>
            : null

            }
            {
                colorObj.sizes.length > 0 ?
                <ul className='flexRow flexRowWrap justifyCntSpcEven'>
                    {colorObj.sizes.map((size, idx)=>
                    <li key={`size${idx}`} className='flexRow justifyCntBetwn listItem col45'>
                        <h4>{size.size} {size.qty}</h4>
                        <button onClick={()=>removeSize(idx)}> x </button>
                    </li>
                        )}
                </ul>
                : <p>no sizes has been added</p>
            }
            {
                alert.show ? 
                <div className='alert'> {alert.message} </div>
                : null
            }
            <button>submit</button>
        </form>
    )
}

export default AddColorForm
