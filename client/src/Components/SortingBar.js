import React from 'react'

function SortingBar() {
    return (
        <div className='sortBar'>
            <ul className='flexRow wrapper'>
                <li>Filtering</li>
                <li className='shopingIcons'>
                    <ul className='flexRow justifyCntSpcEven'>
                        <li>Sort By: </li>
                        <li>All</li>
                        <li>New</li>
                        <li>Sale</li>
                    </ul>
                </li>
                <li>Showing Results  5/20</li>
            </ul>
        </div>
    )
}

export default SortingBar
