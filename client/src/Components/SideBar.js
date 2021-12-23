import React from 'react'

function SideBar({category}) {
    const showMenu=(category)=>{
        const womenMenuCntr = document.getElementById('womenMenuCntr')
        const mensMenuuCntr = document.getElementById('mensMenuuCntr')
        const accessoriesMenuCntr = document.getElementById('accessoriesMenuCntr')
        const womenMenu = document.getElementById('womenMenu')
        const menMenu = document.getElementById('menMenu')
        const accessoriesMenu = document.getElementById('accessoriesMenu')
        if(category==="womenMenu"){
            womenMenuCntr.classList.add("activeMenu")
            mensMenuuCntr.classList.remove("activeMenu")
            accessoriesMenuCntr.classList.remove("activeMenu")
            womenMenu.classList.add("showMenu")
            menMenu.classList.remove("showMenu")
            accessoriesMenu.classList.remove("showMenu")
            
        }else if(category==="menMenu"){
            mensMenuuCntr.classList.add("activeMenu")
            womenMenuCntr.classList.remove("activeMenu")
            accessoriesMenuCntr.classList.remove("activeMenu")
            menMenu.classList.add("showMenu")
            womenMenuCntr.classList.remove("activeMenu")
            womenMenu.classList.remove("showMenu")
            accessoriesMenu.classList.remove("showMenu")
        }else if(category==="accessoriesMenu"){
            mensMenuuCntr.classList.remove("activeMenu")
            womenMenuCntr.classList.remove("activeMenu")
            accessoriesMenuCntr.classList.add("activeMenu")
            accessoriesMenu.classList.add("showMenu")
            menMenu.classList.remove("showMenu")
            womenMenu.classList.remove("showMenu")
        } else {
            mensMenuuCntr.classList.remove("activeMenu")
            womenMenuCntr.classList.remove("activeMenu")
            accessoriesMenuCntr.classList.remove("activeMenu")
            accessoriesMenu.classList.remove("showMenu")
            menMenu.classList.remove("showMenu")
            womenMenu.classList.remove("showMenu")
        }
        // switch (category) {
        //     case "womenMenu":
        //         womenMenu.classList.add("showMenu")
        //         menMenu.classList.remove("showMenu")
        //         accessoriesMenu.classList.remove("showMenu")
        //         break;
        //     case "menMenu":
        //         menMenu.classList.add("showMenu")
        //         womenMenu.classList.remove("showMenu")
        //         accessoriesMenu.classList.remove("showMenu")
        //         break;
        //     case "accessoriesMenu":
        //         accessoriesMenu.classList.add("showMenu")
        //         menMenu.classList.remove("showMenu")
        //         womenMenu.classList.remove("showMenu")
        //         break;
                
        //     default:

        //         accessoriesMenu.classList.remove("showMenu")
        //         menMenu.classList.remove("showMenu")
        //         womenMenu.classList.remove("showMenu")
        //         break;
        // }
    }
    const hideMenu=()=>{
        const womenMenu = document.getElementById('womenMenu')
        const menMenu = document.getElementById('menMenu')
        const accessoriesMenu = document.getElementById('accessoriesMenu')
        const womenMenuCntr = document.getElementById('womenMenuCntr')
        const mensMenuuCntr = document.getElementById('mensMenuuCntr')
        const accessoriesMenuCntr = document.getElementById('accessoriesMenuCntr')

        accessoriesMenu.classList.remove("showMenu")
        menMenu.classList.remove("showMenu")
        womenMenu.classList.remove("showMenu")
        mensMenuuCntr.classList.remove("activeMenu")
        womenMenuCntr.classList.remove("activeMenu")
        accessoriesMenuCntr.classList.remove("activeMenu")
    }
    return (
    <div className="sidebar">
        <div className='card'>
            <div className="cardTitle">
                category
            </div>
            <ul>
                <li>
                    <a href="#" className='menu' onFocus={()=>showMenu('womenMenu')} id='womenMenuCntr'>
                        <div className='menuItem'>  Women <i className="fas fa-caret-right"></i> </div>
                        <ul className='subMenu' id='womenMenu'>
                            <li>
                                <button>T-Shirts</button>
                            </li>
                            <li>
                                <button>Dress</button>
                            </li>
                            <li>
                                <button>Jacket</button>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="#" className='menu' onFocus={()=>showMenu('menMenu')} id='mensMenuuCntr'>
                        <div className='menuItem'>  Men <i className="fas fa-caret-right"></i> </div>
                        <ul className='subMenu' id='menMenu'>
                            <li>
                                <button>T-Shirts</button>
                            </li>
                            <li>
                                <button>Dress</button>
                            </li>
                            <li>
                                <button>Jacket</button>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="#" className='menu' onFocus={()=>showMenu('accessoriesMenuCntr')} id='accessoriesMenuCntr'>
                        <div className='menuItem'> accessories <i className="fas fa-caret-right"></i> </div>
                        <ul className='subMenu' id='accessoriesMenu'>
                            <li>
                                <button>T-Shirts</button>
                            </li>
                            <li>
                                <button>Dress</button>
                            </li>
                            <li>
                                <button onBlur={hideMenu}>Jacket</button>
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default SideBar
