import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    const headerImgArr = [
        'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ]
    const [counter, setCounter] =  useState(0)
    let num =0
    let sec=0
    const setNextImg=(e)=>{
        // console.log(num)
        // sec = 0
        // const countingSecs=setInterval(() => {
        //     sec= sec+1
        //     console.log(sec)
        // }, 1000);

        // console.log(num)
        // console.log(counter)
        // setCounter(counter === headerImgArr.length -1 ? 0 : counter + 1)
        // setCounter(counter < headerImgArr.length ?  counter + 1 : 0)
        const midImg1 = document.getElementById('box1')
        const midImg2 = document.getElementById('box2')
        const midImg3 = document.getElementById('box3')
        if(num===0){
            midImg1.style.transform=`translateX(${-100}vw)`
            setTimeout(() => {
                midImg1.style.zIndex="0"
                midImg2.style.zIndex="3"
                midImg3.style.zIndex="2"
                }, 300);
            } 
        if(num===1){
        midImg2.style.transform=`translateX(${-100}vw)`
        setTimeout(() => {
            midImg1.style.zIndex="1"
            midImg2.style.zIndex="0"
            midImg1.style.transform=`translateX(${0}vw)`
            }, 300);
        }
        if(num===2){
        midImg3.style.transform=`translateX(${-100}vw)`
        setTimeout(() => {
            midImg1.style.zIndex="5"
            midImg2.style.zIndex="3"
            midImg3.style.zIndex="1"
            midImg2.style.transform=`translateX(${0}vw)`
            setTimeout(() => {
                midImg3.style.transform=`translateX(${0}vw)`
                }, 300);
            }, 300);
            
        } 
        if(num===headerImgArr.length -1){
            num=0
        }else {
            num= num+1
        }
    // return () => clearInterval(countingSecs);

    }
    const setPreviousImg=(e)=>{
        // setCounter(counter >= 0 ? counter ===headerImgArr.length -1 ? 0 : counter + 1 :  counter-1)
    }
    useEffect(() => {
        console.log('running?')
        const interval = setInterval(() => {
            setNextImg()
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    return (
        <div className='container'>
            <header className='homePageImg'>
                <div className='boxBox'>
                    <div className='flexRow boxContainer'>
                        <div className="topBox">
                            <div className="boxTop">

                                <h1>
                                    Stitches
                                </h1>
                                {/* <div>
                                    <button className='btn' onClick={setPreviousImg}>Previous</button>
                                    <button className='btn' onClick={setNextImg}>next</button>
                                </div> */}
                            </div>
                        </div>
                        <div className="box" id='box1'>
                            <img src={headerImgArr[0]} alt="" />
                        </div>
                        <div className="box" id='box2' >
                            <img src={headerImgArr[1]} alt="" />

                        </div>
                        <div className="box" id='box3'>
                            <img src={headerImgArr[2]} alt="" />
                        </div>
                    </div>
                </div>
            </header>
            <section className='categories'>
                <div className="firstRow flexRow">
                    <div className="halfWidth flexRow">
                        <div className="halfWidth flexCol">
                            <img className='twoThirdImgHeigh' src="https://images.unsplash.com/photo-1604001307862-2d953b875079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80" alt="women with coat" />
                            <img className='oneThirdImgHeigh' src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80" alt="women with coat" />
                        </div>
                        <div className="halfWidth flexCol">
                            <img className='oneThirdImgHeigh' src="https://images.unsplash.com/photo-1464343015641-615326ab2a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1704&q=80" alt="women with coat" />
                            <img className='twoThirdImgHeigh' src="https://images.unsplash.com/photo-1554219374-6d2c029f855e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="women with coat" />
                        </div>
                    </div>
                    <div className="halfWidth flexCol">
                        <div className='twoThirdImgHeigh contentContainer'>
                            <Link to={'/products/womens'}>
                                <div className='topContent womensColor'>
                                    <h3>Women's Fashion</h3>
                                </div>
                            </Link>
                            <img className='womensHeight flexCol' src="https://images.unsplash.com/photo-1482270406631-a02c51d93c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"  alt='womens picture'/>

                        </div>
                        <div className="oneThirdImgHeigh flexRow">
                            <img className='halfWidth' src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="womens bag" />
                            <img className='halfWidth' src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="womens bag" />
                        </div>
                    </div>
                </div>
                <div className="secondRow">
                    <div className="flexRow">
                        <div className='halfWidth contentContainer'>
                            <Link to={'/products/mens'}>
                                <div className='topContent mensColor'>
                                    <h3>Men's Fashion</h3>
                                </div>
                            </Link>
                            <img className='secondRow' src="https://images.unsplash.com/photo-1577686330226-d71f1d510d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"  alt='mens fashion'/>
                        </div>
                        {/* <div className="flexRow oneThirdImgHeigh">
                            <img className='halfWidth' src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="womens bag" />
                            <img className='halfWidth' src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="womens bag" />
                        </div> */}
                        <div className="halfWidth">
                            <img className='halfWidth secondRow' src="https://images.unsplash.com/photo-1483118714900-540cf339fd46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"  alt='womens picture'/>
                            <img className='halfWidth secondRow' src="https://images.unsplash.com/photo-1528575950036-63c4853d3f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"  alt='womens picture'/>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}
export default HomePage